import React, { useState, useEffect } from 'react';
import SmallSummary from './SmallSummary';
import BigSummary from './BigSummary';
import { Link } from 'react-router-dom';



// const dummyData = { articles: [{ title: 'Hello Kids of the world', text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit alias necessitatibus ipsa mollitia dolor voluptate! Eius, voluptatem aut quos quod culpa nemo excepturi dignissimos temporibus harum quasi nisi veniam!", url: 'https://www.google.com' }, { title: 'Hello Kids of the world', text: 'asdfajsdfjklasdjfklsfjklsf slfjskf slkf', url: 'https://www.google.com' }, { title: 'Hello Kids of the world', text: 'asdfajsdfjklasdjfklsfjklsf slfjskf slkf', url: 'https://www.google.com' }], bigSummary: { title: 'This is our really import title', text: 'asdfajsdfjklasdjfklsfjklsf slfjskf slkf' } }


export default function Home() {

    const [data, setData] = useState(null);
    const [bigData, setBigData] = useState(null);
    const [loading, setLoading] = useState(true);

    const requests = async () => {
        console.log('this called');
        // const d1 = await fetch("http://127.0.0.1:5000/get_summaries").then(res => res.json());
        // const bd = await fetch("http://127.0.0.1:5000/total_summary").then(res => res.json());
        setLoading(false);
        // setData(d1);
        // setBigData(bd);
    }

    const buttonClicked = async () => {
        console.log('here here')
        // setData(null);
        // setBigData(null);
        // const response = await fetch("http://127.0.0.1:5000/clear_summaries", {method:"POST"}).then(res => res.json());
    }

    useEffect(() => {
        setLoading(true);
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
            <button className='myButton' onClick={() => { buttonClicked() }}>Clear</button>
            <h3>Your Study Journey Summarized</h3>
            <div className="hr-container">
                <hr />
            </div>
            <div className="centerizeThis">
                <div className="summary-container">
                    {data && data.map((article, index) => <SmallSummary key={index} title={article.title} text={article.summarized_body} url={article.url} />)}
                    {!data && <h4 style={{ fontWeight: 500, fontSize: "20px" }}>No Data</h4>}

                </div>
            </div>
            <h3>Overview</h3>
            <Link className='toQuiz' to="/quiz">Practice Quiz</Link>
            <div className="hr-container">
                <hr />
            </div>
            <div className="centerizeThis">
                <div className="summary-container">
                    {bigData && <BigSummary title={bigData.title} text={bigData.summarized_body} />}
                    {!data && <h4 style={{ fontWeight: 500, fontSize: "20px" }}>No Data</h4>}
                </div>
            </div>
            {loading &&
                <div className='loadingParentDiv'>
                    <div className='saberBody'>
                        <h3 id='myH3'>Loading... </h3>
                        <div id="loader">
                            <div className="ls-particles ls-part-1"></div>
                            <div className="ls-particles ls-part-2"></div>
                            <div className="ls-particles ls-part-3"></div>
                            <div className="ls-particles ls-part-4"></div>
                            <div className="ls-particles ls-part-5"></div>
                            <div className="lightsaber ls-left ls-green"></div>
                            <div className="lightsaber ls-right ls-red"></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
