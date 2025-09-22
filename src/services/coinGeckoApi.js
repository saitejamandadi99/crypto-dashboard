import axios from 'axios'

const BASE_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;


export const coinsGeckoAxiosApi = axios.create({
    baseURL:BASE_URL,
    headers:{
    'x_cg_pro_api_key':API_KEY,
    },
})

const getCoinGeckoCoins = async  (page = 1) =>{
    try{
        const response = await coinsGeckoAxiosApi.get("/coins/markets",{
            params:{
                vs_currency:'usd', //price in currency
                order:'market_cap_desc', //sorting in market cap descending (largest first)
                per_page:10, // pagination per page number of coins.
                page:page, // page of results to fetch.
                price_change_percentage:'24h' //price change in percentage per 24hrs.
            },
        })
        console.log(response.data)
        return response.data
    }
    catch(err){
        throw new Error(err.message || 'Error in fetching the coins. ');
        
    }
}

export const getTrendingAxiosApi = async () =>{
    try {
        const response =await coinsGeckoAxiosApi.get('/search/trending')
        return response.data.coins.map((c)=>c.item);
        
    } catch (err) {
        throw new Error(err.message || 'Error in fetching the trending details')
    }

}

export const getMarketCoinsAxiosApi = async () =>{
    try{
        const response = await coinsGeckoAxiosApi.get('/coins/markets',
            {
                params:{
                vs_currency:'usd',
                order:'market_cap_desc', 
                per_page:10,
                page:1, 
                price_change_percentage:'24h',
                ...params 
            },
            }
        )

    }
    catch(err){
        throw new Error(err.message || 'Error in fetching the market coins details')
    }
}

