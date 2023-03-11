import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {


    const Allnews = useLoaderData()


    return (
        <div>
            <h2>All news length : {Allnews.length}</h2>
        </div>
    );
};

export default Home;