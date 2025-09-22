"use client";
import {useState,useEffect} from 'react'
import CoinItem from '@/components/CoinItem'
import LoadingComponent from '@/components/Loading'
import getCoinGeckoCoins from '@/services/coinGeckoApi'

const HomePage = () => {
    const [coinsList, setCoinsList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [page, setPage] = useState(1)
    const [isLoading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [success,setSuccess] = useState("")

    const fetchPage = (pageNum) =>{
      setLoading(true)
      setError(null)
      setSuccess(null)

      getCoinGeckoCoins(pageNum)
      .then((data)=>{
        setCoinsList(data)
        setSuccess('Data fetched Successfully')
        setLoading(false)
        setPage(pageNum)
      })
      .catch((err)=>{
        setError(err.message)
        setSuccess(null)
        setLoading(false)
      })
    }

    useEffect(()=>{
      fetchPage(1)
    },[])

    useEffect(()=>{
      if (searchTerm ===''){
        setFilteredList(coinsList)
      }
      else{
        const filteredItems = coinsList.filter(
          (coin)=>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredList(filteredItems)
      }
    }, [searchTerm,coinsList])

    return(
      <div className='container mt-4'>
        {error && <div className='alert alert-danger'>{error}</div>}
        {success && <div className='alert alert-success'>{success}</div>}

        <input type='search' className='form-control mb-4' placeholder='Search with name or symbol' value ={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}  />


        {isLoading ? 
          <LoadingComponent />
        :
          (
            filteredList.length > 0 ? (
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
                    {filteredList.map((eachCoin)=>(
                      <CoinItem key={eachCoin.id} coin = {eachCoin} />
                    ))}
                  </tbody>
                </table>
                <div className='d-flex justify-content-between mt-3'>
                    <button className='btn btn-primary' onClick={()=>fetchPage(page-1)} disabled= {page === 1}>Previous</button>
                      <span>Page:{page}</span>
                    <button className='btn btn-primary' onClick={()=>fetchPage(page+1)} disabled= {filteredList.length < 10}>Next</button>
                </div>

              </>
            ) :
                (<p>No coins Found </p>)
          )
        }

      </div>
    )


}

export default HomePage