import React from 'react';
import {connect} from 'react-redux';
import Telemarketer from './telemarketer';
import telemarketerSelected from '../actions/telemarketerSelected';
import 'bootstrap/dist/css/bootstrap.css';

const Telemarketers = ({telemarketers, dispatch}) => (
    <div>
        <strong>Telemarketers</strong>
        {telemarketers.map(tm => 
            <Telemarketer key={tm} 
            telemarketer={tm}
            onTelemarketerSelected={() => dispatch(telemarketerSelected(tm))}
            />) }
    </div>
);

const mapStateToProps = (props) => ({props});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Telemarketers);