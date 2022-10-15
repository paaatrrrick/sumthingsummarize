import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallSummary from './SmallSummary';
import BigSummary from './BigSummary';


const dummyData = { articles: [{ title: 'Hello Kids of the world', text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit alias necessitatibus ipsa mollitia dolor voluptate! Eius, voluptatem aut quos quod culpa nemo excepturi dignissimos temporibus harum quasi nisi veniam!", url: 'https://www.google.com' }, { title: 'Hello Kids of the world', text: 'asdfajsdfjklasdjfklsfjklsf slfjskf slkf', url: 'https://www.google.com' }, { title: 'Hello Kids of the world', text: 'asdfajsdfjklasdjfklsfjklsf slfjskf slkf', url: 'https://www.google.com' }], bigSummary: { title: 'This is our really import title', text: 'asdfajsdfjklasdjfklsfjklsf slfjskf slkf' } }


export default function Home() {

    const [data, setData] = useState(null);

    useEffect(() => {
        console.log('asdf');
        setData(dummyData);
    }, []);

    return (
        <div className="Register">
            <div className="banner">
                <img src={require("./logo.png")} alt="logo" className='logo' />
            </div>
            <h3>Your Study Journey</h3>
            <div className="hr-container">
                <hr />
            </div>
            <div className="centerizeThis">
                <div className="summary-container">
                    {data && data.articles.map((article, index) => <SmallSummary key={index} title={article.title} text={article.text} />)}
                </div>
            </div>
            <h3>Overview</h3>
            <div className="hr-container">
                <hr />
            </div>
            <div className="centerizeThis">
                <div className="summary-container">
                    {data && <BigSummary title={data.bigSummary.title} text={data.bigSummary.text} />}
                </div>
            </div>
        </div>
    );
}
