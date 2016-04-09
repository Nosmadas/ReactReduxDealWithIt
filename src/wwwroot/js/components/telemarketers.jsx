import React from 'react';
import {connect} from 'react-redux';
import Telemarketer from './telemarketer';
import telemarketerSelected from '../actions/telemarketerSelected';
import telemarketerDeselected from '../actions/telemarketerDeselected';
import 'bootstrap/dist/css/bootstrap.css';

const Telemarketers = ({telemarketers, dispatch}) => (
    <div>
        <strong>Telemarketers</strong>
        {telemarketers.map(tm =>
            <Telemarketer key={tm.name}
                telemarketer={tm}
                onTelemarketerSelected={() => onSelectedDispatcher(dispatch, tm) }/>
        ) }
    </div>
);

const onSelectedDispatcher = (dispatch, tm) => {
    if (!tm.selected)
        dispatch(telemarketerSelected(tm))
    else
        dispatch(telemarketerDeselected(tm))
}

const mapStateToProps = (props) => ({ telemarketers: props.telemarketers });
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Telemarketers);