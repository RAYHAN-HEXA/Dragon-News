import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const news = useLoaderData();

 
    useEffect(()=>{
 const categoryNews = news.filter((n)=> n.category_id==id);
 console.log(categoryNews)
    },[news,id])
    return (
        <div>
           <h1>CategoryNews-{id}</h1> 
        </div>
    );
};

export default CategoryNews;