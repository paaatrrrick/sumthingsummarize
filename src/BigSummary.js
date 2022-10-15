import React, { useState, useEffect } from 'react';


export default function SmallSummary(props) {
    console.log(props);
    const { title, text } = props;
    // console.log('checkiing 123');
    // console.log(title, text);
    return (
        <div className='w80'>
            <div className="topAreaOfSummary">
                <h5>{title}</h5>
            </div>
            <hr className='hr2' />
            <p className='bottomAreaOfSummary' style={{fontSize: '20px'}}>{text.substring(0, 2000)}</p>
        </div>
    );
}
