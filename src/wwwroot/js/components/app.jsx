import React from 'react';
import Telemarketers from './telemarketers';
import Territories from './territories';
import appCss from '../../css/app.css';

const telemarketers = ['Big Ass', 'Booty Sweat', 'Shitty Butters', 'Buttland'];
const territories = [{ name: "North" }, { name: "South West", t2: [{ name: "Dorset" }] }, { name: "South East" }];

const App = () => (
    <div className='container'>
        <Telemarketers telemarketers={telemarketers} />
        <Territories territories={territories} />
    </div>
);

export default App;

