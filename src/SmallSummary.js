import React, { useState, useEffect } from 'react';




export default function SmallSummary(props) {
    console.log(props);
    const { title, text, url } = props;
    // console.log('checkiing 123');
    // console.log(title, text);
    return (
        <div className='w40'>
            <div className="topAreaOfSummary">
                <h5>{title}</h5>
                <a href="https://www.patrickrfoster.com" className='viewSite'>View Site</a>
            </div>
            <hr className='hr2' />
            <p className='bottomAreaOfSummary'>{text.substring(0, 300)}</p>
        </div>
    );
}
