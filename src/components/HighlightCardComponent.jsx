const HighlightCardComponent = ({ coin }) => {
  const priceChange = coin.price_change_percentage_24h;

  const formatNumber = (num) => {
    if (num === null || num === undefined || isNaN(num)) return "N/A";
    return num.toLocaleString();
  };

  return (
    <div className="card m-2 p-3" style={{ width: "220px" }}>
      <img
        src={coin.image}
        alt={coin.name}
        style={{ width: 40, height: 40, marginBottom: 8 }}
      />
      <h5>
        {coin.name} ({coin.symbol ? coin.symbol.toUpperCase() : "N/A"})
      </h5>
      <p>Price: ${formatNumber(coin.current_price)}</p>
      <p>
        24h Change:{" "}
        {priceChange !== null && priceChange !== undefined
          ? priceChange.toFixed(2) + "%"
          : "N/A"}
      </p>
      <p>Market Cap: {coin.market_cap ? `$${formatNumber(coin.market_cap)}` : "N/A"}</p>
      <p>24h Volume: {coin.total_volume ? `$${formatNumber(coin.total_volume)}` : "N/A"}</p>
    </div>
  );
};

export default HighlightCardComponent;
