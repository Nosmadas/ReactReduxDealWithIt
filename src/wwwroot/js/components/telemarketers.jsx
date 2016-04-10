import React from 'react';
import {connect} from 'react-redux';
import TelemarketerWithCards from './telemarketerWithCards';
import 'bootstrap/dist/css/bootstrap.css';

const Telemarketers = ({telemarketers}) => (
    <div>
        <strong>Telemarketers</strong>
        {telemarketers.map(tm =>
            <TelemarketerWithCards key={tm.name} telemarketer={tm} />
        ) }
    </div>
);

const mapStateToProps = (props) => ({ telemarketers: props.telemarketers });

export default connect(mapStateToProps)(Telemarketers);