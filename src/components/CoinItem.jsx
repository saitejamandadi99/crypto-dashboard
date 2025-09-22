const CoinItem = ({coin}) =>{
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
                            coin.price_change_percentage_24h >= 0 ? 'green' : 'red'
                       }}
            >
                {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
        </tr>
    )
}

export default CoinItem;