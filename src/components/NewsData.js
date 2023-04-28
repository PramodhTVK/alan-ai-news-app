import React, { useEffect,useState } from "react";
import { getNews } from "../Service/getNews";

export default function NewsData(){
    const [newsData,setNewsData] = useState([])
        const getAllNews = async () =>{
           setNewsData(await getNews())
        }
    useEffect(()=>{
        getAllNews()
    },[])
    console.log(newsData?.data?.articles)
    return (
        <div className="main">
            <h1>Voice News</h1>
            {newsData.map((news) => {
                return(
                    <div>{}</div>
                )
            })}
        </div>
    )
}