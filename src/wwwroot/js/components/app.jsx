import React from 'react';
import {connect} from 'react-redux';
import Telemarketers from './telemarketers';
import Territories from './territories';
import appCss from '../../css/app.css';

const App = (telemarketers, territories) => (
    <div className='container'>
        <Telemarketers telemarketers={telemarketers} />
        <Territories territories={territories} />
    </div>
);

const mapStateToProps = (props) => ({ props });

export default connect(mapStateToProps)(App);
