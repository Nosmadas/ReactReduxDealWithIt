import React from 'react';
import Telemarketers from './telemarketers';
import Territories from './territories';

const telemarketers = ['Big Tits', 'Booty Sweat', 'Shitty-FatTits', 'Buttland'];
const territories = [{ name: "North" }, { name: "South West", t2: [{ name: "Dorset" }] }, { name: "South East" }];


const App = () => (
    <div>
        <Telemarketers telemarketers={telemarketers} />
        <Territories territories={territories} />
    </div>
);

export default App;

