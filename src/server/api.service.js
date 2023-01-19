import axios from "axios"

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
   
  },
  headers: {
    'X-RapidAPI-Key': 'ffdd3dc636msh92b1d0694632e09p12dbb2jsn73791b963e32',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
 
export const ApiService ={
    async fetching(url){
        const response = await axios.get(`${BASE_URI}/${url}`,options)
        return response

    }
}