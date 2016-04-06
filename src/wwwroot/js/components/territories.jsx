import React from 'react';

const Territories = ({territories}) => (
    <div>{territories.map(territory => <div key={territory.name}>{territory.name}</div>)}</div>
)

export default Territories;