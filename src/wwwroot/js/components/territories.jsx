import React from 'react';
import {connect} from 'react-redux';

const Territories = ({territories}) => (
    <div>{territories.map(territory => <div key={territory.name}>{territory.name}</div>)}</div>
)

const mapStateToProps = (props) => ({ territories: props.territories });

export default connect(mapStateToProps)(Territories);