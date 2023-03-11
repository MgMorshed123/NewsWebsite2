import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumaryCard from '../../../NewsSummaryCard/NewsSumaryCard';

const Home = () => {


    const Allnews = useLoaderData()


    return (
        <div>
            <h2>All news length : {Allnews.length}</h2>

            {
                Allnews.map(news => <NewsSumaryCard
                    keys={news._id}
                    news={news}
                >

                </NewsSumaryCard>)
            }
        </div>
    );
};

export default Home;