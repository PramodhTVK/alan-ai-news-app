import React, { useEffect, useState } from "react";
import { getNews } from "../Service/getNews";
import moment from "moment";
import alanBtn from '@alan-ai/alan-sdk-web';

export default function NewsData() {
    const [newsData, setNewsData] = useState([]);
    const alanKey = `5af992aafbb3090273ab90534044f3352e956eca572e1d8b807a3e2338fdd0dc/stage`;
    const [selectOption, setselectOption] = useState('');
    const getAllNews = async () => {
        let allNews = await getNews(selectOption);
        if(allNews && allNews.data)setNewsData(allNews.data.articles);
    };

    const selectCategory = (event)=>{
        setselectOption(event.target.value)
    }
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: (commandData) => {
                setselectOption(commandData.data) 
            }
        });
      }, [alanKey]);

    useEffect(() => {
        getAllNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectOption]);
    

    return (
        <div className="main">
        <h1>Voice News</h1>
        <div className="select"><label for="cars">Choose a Category:</label>

        <select className="select-box" name="category" id="category" onChange={selectCategory} value={selectOption}>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        </select>
        </div>
        <div className="grid-main">
        {newsData?.map((news, index) => {
    return (
        <div className="grid-child" key={index}>
        <img className="news-image" src={news?.urlToImage} alt="news" />
        <p className="news-title">{news?.title}</p>
        <p className="news-content">{news?.content}</p>
        <div className="space-between">
        <p className="news-author">Author:{news?.author ? news.author : 'Author Name not available'}</p>
        <p className="news-date">Date: {moment(news?.publishedAt).format('LL')}</p>
        </div>
        <a href={news?.url}>Read More..</a></div>
            )
            })}
            </div>
        </div>
    );
}
