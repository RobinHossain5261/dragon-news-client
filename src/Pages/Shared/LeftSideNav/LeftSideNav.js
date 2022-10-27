import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dragon-news-server-azure-one.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            <div>
                {
                    categories.map(catagory => <p key={catagory.id}>
                        <Link to={`/category/${catagory.id}`}>{catagory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;