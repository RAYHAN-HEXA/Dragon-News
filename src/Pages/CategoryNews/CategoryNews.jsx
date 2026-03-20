import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../Components/newsCard/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const news = useLoaderData();
    const [categorynews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(news);
        } else if (id == '1') {
            const filtered = news.filter((n) => n.others.is_today_pick == true);
            setCategoryNews(filtered);
        } else {
            const filtered = news.filter((n) => n.category_id == id);
            setCategoryNews(filtered);
        }
    }, [news, id]);

    return (
        <div>
            <h1>Found - {categorynews.length} news articles</h1>
            <div>
                {categorynews.map(singleNews => (
                    <NewsCard key={singleNews.id} singleNews={singleNews} />
                ))}
            </div>
        </div>
    );
};

export default CategoryNews;