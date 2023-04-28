import React, { useEffect } from "react";
import { getNews } from "../Service/getNews";

export default function NewsData(){
    
        const getAllNews = () =>{
            getNews()
        }
    useEffect(()=>{
        getAllNews()
    },[])
    return (
        <div className="main">
            <h1>Voice News</h1>
        </div>
    )
}