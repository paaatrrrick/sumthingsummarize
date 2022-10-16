import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const dummyData = [["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt suscipit officia dolore voluptate veniam atque nihil necessitatibus corporis sunt aperiam ut, qui sequi at beatae eaque iste adipisci corrupti aut.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt suscipit officia dolore voluptate veniam atque nihil necessitatibus corporis sunt aperiam ut, qui sequi at beatae eaque iste adipisci corrupti aut.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt suscipit officia dolore voluptate veniam atque nihil necessitatibus corporis sunt aperiam ut, qui sequi at beatae eaque iste adipisci corrupti aut.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt suscipit officia dolore voluptate veniam atque nihil necessitatibus corporis sunt aperiam ut, qui sequi at beatae eaque iste adipisci corrupti aut.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt suscipit officia dolore voluptate veniam atque nihil necessitatibus corporis sunt aperiam ut, qui sequi at beatae eaque iste adipisci corrupti aut.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt suscipit officia dolore voluptate veniam atque nihil necessitatibus corporis sunt aperiam ut, qui sequi at beatae eaque iste adipisci corrupti aut."], ['Hello123', 'World', 'This', 'Is', 'A', 'Test']];

export default function Quiz() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showingResults, setShowingfResults] = useState(false);
    const getData = async () => {
        const poop = await fetch("http://127.0.0.1:5000/quiz").then(res => res.json());
        console.log(poop);
        setLoading(false);
        const newArr = [];
        for (let i = 0; i < poop.length; i++) {
            const subArr = [];
            for (let j = 0; j < 5; j++) {
                try {
                    subArr.push(poop[i][j]);
                } catch(e) {
                    subArr.push('None of the above');
                }
            }
            newArr.push(subArr)
        }
        setData(newArr);
    }
    useEffect(() => {
        getData();
        console.log('her123');
    }, []);
    const submitQuiz = () => {
        setShowingfResults(true);
    }

    const linkClicked = () => {
        console.log('here123');
        setShowingfResults(false);
        setData(null);
    }

    return (
        <div className="Register">
            <div className="banner">
                <img src={require("./logo.png")} alt="logo" className='logo' />
            </div>
            <Link onClick={() => {linkClicked();}} className='myButton' to="/">Go Back</Link>
            {!showingResults ?
                <div className='questionsContainer'>
                    <h3 style={{ marginLeft: '0px', marginTop: '-10px', marginBottom: '10px' }}>Practice Quiz</h3>
                    {data && data.map((article, index1) => <div className='containerForQuestion' key={index1}>
                        <div className='marginBottomDiv'></div>
                        <h4>{article[0]}</h4>
                        <div className='marginBottomDiv'></div>
                        {article.slice(1).map((word, index) => <div key={index}>
                            <input type="radio" id={String(word + String(index * 1000) + String(index1 * 200))} name={article[0]} value={word} />
                            <label htmlFor={String(word + String(index * 1000) + String(index1 * 200))}>{word}</label>
                            <div className='marginBottomDiv'></div>
                        </div>)}
                        <hr style={{ width: '100%' }} />
                    </div>)}
                    <button className='submitButton' onClick={() => { submitQuiz(); }}>Submit</button>
                </div>
                :
                <div className='resultsDiv'>
                    <h3 className='centeredH3'>Your Score Is 100%. Congrats!</h3>
                    <Link className='myButtonNormalPosition' to="/">Go Back</Link>
                </div>
            }
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
