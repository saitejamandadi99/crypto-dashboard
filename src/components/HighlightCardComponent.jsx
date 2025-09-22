const HighlightCardComponent = ({ coin }) => {
  const priceChange = coin.price_change_percentage_24h;
  return (
    <div className="card m-2 p-3" style={{ width: "220px" }}>
      <img
        src={coin.image}
        alt={coin.name}
        style={{ width: 40, height: 40, marginBottom: 8 }}
      />
      <h5>
        {coin.name} ({coin.symbol.toUpperCase()})
      </h5>
      <p>Price: ${coin.current_price.toLocaleString()}</p>
      <p>
        24h Change:{" "}
        <span style={{ color: priceChange >= 0 ? "green" : 
            "red" 
            }}
        >
          {priceChange ? 
          priceChange.toFixed(2) + "%" : 
          "N/A"
        }
        </span>
      </p>
      <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
      <p>24h Volume: ${coin.total_volume.toLocaleString()}</p>
    </div>
  );
};

export default HighlightCard;
