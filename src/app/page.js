import {useState,useEffect} from 'react'
import CoinItem from '@/components/CoinItem'
import LoadingComponent from '@/components/Loading'
import getCoinGeckoCoins from '@/services/coinGeckoApi'

const HomePage = () => {
    const [coinsList, setCoinsList] = useState([])
    const [isLoading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [success,setSuccess] = useState("")

    useEffect(()=>{
      setLoading(true)
      setError(null)
      setSuccess(null)

      getCoinGeckoCoins()
      .then((data)=>{
        setCoinsList(data)
        setSuccess('Data fetched Successfully')
        setLoading(false)
      })
      .catch((err)=>{
        setError(err.message)
        setSuccess(null)
        setLoading(false)
      })

    },[])

    return(
      <div className='container mt-4'>
        {error && <div className='alert alert-danger'>{error}</div>}
        {success && <div className='alert alert-success'>{success}</div>}
        {isLoading ? 
          <LoadingComponent />
        :
          (
            coinsList.length > 0 ? (
              <>
                <h2>Top CryptoCurrencies by Market Cap</h2>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Coin</th>
                      <th>Price</th>
                      <th>24h Change%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coinsList.map((eachCoin)=>(
                      <CoinItem key={eachCoin.id} coin = {eachCoin} />
                    ))}
                  </tbody>
                </table>
              </>
            ) :
                (<p>No coins Found </p>)
          )
        }

      </div>
    )


}

export default HomePage