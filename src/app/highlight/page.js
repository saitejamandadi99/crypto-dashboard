"use client";
import { useEffect, useState } from "react";
import HighlightCard from "@/components/HighlightCardComponent";
import {
  getTrendingAxiosApi,
  getMarketCoinsAxiosApi,
} from "@/services/coinGeckoApi";
import LoadingComponent from "@/components/Loading"; 

const Highlights = () => {
  const [trending, setTrending] = useState([]);
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHighlights = async () => {
      setLoading(true);
      setError(null);
      try {
        const trendingData = await getTrendingAxiosApi();
        setTrending(trendingData);

        const marketData = await getMarketCoinsAxiosApi({
          per_page: 100,
          page: 1,
          price_change_percentage: "24h",
        });

        const gainers = [...marketData]
          .filter((coin) => coin.price_change_percentage_24h !== null)
          .sort(
            (a, b) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h
          )
          .slice(0, 5);

        const losers = [...marketData]
          .filter((coin) => coin.price_change_percentage_24h !== null)
          .sort(
            (a, b) =>
              a.price_change_percentage_24h - b.price_change_percentage_24h
          )
          .slice(0, 5);

        setTopGainers(gainers);
        setTopLosers(losers);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHighlights();
  }, []);

  if (isLoading) return <LoadingComponent />;
  if (error) return <p>Error loading highlights: {error}</p>;

  return (
    <div className="my-3">
      <h3>Trending Coins</h3>
      <div className="d-flex flex-wrap">
        {trending.map((coin) => (
          <HighlightCard key={coin.id} coin={coin} />
        ))}
      </div>

      <h3 className="mt-4">Top Gainers (24h)</h3>
      <div className="d-flex flex-wrap">
        {topGainers.map((coin) => (
          <HighlightCard key={coin.id} coin={coin} />
        ))}
      </div>

      <h3 className="mt-4">Top Losers (24h)</h3>
      <div className="d-flex flex-wrap">
        {topLosers.map((coin) => (
          <HighlightCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
