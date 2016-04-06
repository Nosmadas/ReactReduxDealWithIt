import React from 'react';
import Telemarketer from './telemarketer';

const Telemarketers = ({telemarketers}) => (
    <div>
        <strong>Telemarketers</strong>
        {telemarketers.map(tm => <Telemarketer key={tm} telemarketer={tm}/>) }
    </div>
);

export default Telemarketers;