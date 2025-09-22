import {useState,useEffect} from 'react'
import CoinItem from '@/components/CoinItem'
import LoadingComponent from '@/components/Loading'
import getCoinGeckoCoins from '@/services/coinGeckoApi'

const homePage = () => {
    const [coinsList, setCoinsList] = useState([])
    const [isLoading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [success,setSuccess] = useState(null)

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
    
}

export default homePage