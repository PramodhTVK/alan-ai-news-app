import axios from "axios";

export function getNews(category){
    const API_KEY=`d2b39452dcb14f04a40548851c61f8d1`;
    const API_Endpoint=`https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
   
       return axios.get(`${API_Endpoint}&apiKey=${API_KEY}`)
    
}