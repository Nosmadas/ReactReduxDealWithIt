import React from 'react';

const Telemarketers = (props) => (
    <div>
        <strong>Telemarketers</strong>
        {props.telemarketers.map(tm => (<div key={tm}>{tm}</div>))}
    </div>
);


export default Telemarketers;

//function(tm) {
//    return (<div key={tm}>{tm}</div>);
//})