const CoinItem = ({coin}) =>{
    const priceChange = coin.price_change_percentage_24h;
    return(
        <tr>
            <td>{coin.market_cap_rank}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{width:24, height:24,marginRight:5}} /> {coin.name} ({coin.symbol.toUpperCase()})
            </td>
            <td>
                $ {coin.current_price.toLocaleString()}
            </td>
            <td style={{color:  
                            priceChange >= 0 ? 'green' : 'red'
                       }}
            >
                {
                    priceChange !== null && priceChange !== undefined ? priceChange.toFixed(2) + '%' : 'N/A'
                }
            </td>
        </tr>
    )
}

export default CoinItem;