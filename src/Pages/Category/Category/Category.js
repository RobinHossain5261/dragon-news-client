import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hook/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    useTitle('Category');

    return (
        <div>
            <h4>All Category News : {categoryNews.length} </h4>
            {
                categoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;