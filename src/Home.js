import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallSummary from './SmallSummary';
import BigSummary from './BigSummary';


// const dummyData = { articles: [{ title: 'Hello Kids of the world', text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit alias necessitatibus ipsa mollitia dolor voluptate! Eius, voluptatem aut quos quod culpa nemo excepturi dignissimos temporibus harum quasi nisi veniam!", url: 'https://www.google.com' }, { title: 'Hello Kids of the world', text: 'asdfajsdfjklasdjfklsfjklsf slfjskf slkf', url: 'https://www.google.com' }, { title: 'Hello Kids of the world', text: 'asdfajsdfjklasdjfklsfjklsf slfjskf slkf', url: 'https://www.google.com' }], bigSummary: { title: 'This is our really import title', text: 'asdfajsdfjklasdjfklsfjklsf slfjskf slkf' } }


export default function Home() {

    const [data, setData] = useState(null);
    const [bigData, setBigData] = useState(null);

    const requests = async () => {
        console.log('this called');
        const d1 = await fetch("http://127.0.0.1:5000/get_summaries").then(res => res.json());
        const bd = await fetch("http://127.0.0.1:5000/total_summary").then(res => res.json());
        setData(d1);
        setBigData(bd);
    }

    const buttonClicked = async () => {
        console.log('here here')
        setData(null);
        setBigData(null);
        const response = await fetch("http://127.0.0.1:5000/clear_summaries", {method:"POST"}).then(res => res.json());
    }

    useEffect(() => {
        requests();
        // fetch("http://127.0.0.1:5000/get_summaries"
        // ).then(response => response.json)
        // .then(datresa => console.log(data));

        // fetch("http://127.0.0.1:5000/total_summary"
        // ).then(response => response.json)
        // .then(data => console.log(data));
    }, []);

    return (
        <div className="Register">
            <div className="banner">
                <img src={require("./logo.png")} alt="logo" className='logo' />
            </div>
            <button onClick={() => {buttonClicked()}}>Clear</button>
            <h3>Your Study Journey</h3>
            <div className="hr-container">
                <hr />
            </div>
            <div className="centerizeThis">
                <div className="summary-container">
                    {data && data.map((article, index) => <SmallSummary key={index} title={article.title} text={article.summarized_body} url={article.url}/>)}
                </div>
            </div>
            <h3>Overview</h3>
            <div className="hr-container">
                <hr />
            </div>
            <div className="centerizeThis">
                <div className="summary-container">
                    {bigData && <BigSummary title={bigData.title} text={bigData.summarized_body} />}
                </div>
            </div>
        </div>
    );
}
