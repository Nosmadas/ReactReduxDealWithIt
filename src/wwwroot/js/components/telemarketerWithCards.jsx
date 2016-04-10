import React from 'react';
import {connect} from 'react-redux';
import telemarketerSelected from '../actions/telemarketerSelected';
import telemarketerDeselected from '../actions/telemarketerDeselected';
import Telemarketer from './telemarketer';
import Cards from './cards';

const TelemarketerWithCards = ({telemarketer, dispatch}) => (
    <div>
        <Telemarketer
            telemarketer={telemarketer}
            onTelemarketerSelected={() => onSelectedDispatcher(dispatch, telemarketer) }/>
        <Cards cards={telemarketer.cards} />
    </div>
);

const onSelectedDispatcher = (dispatch, tm) => {
    if (!tm.selected)
        dispatch(telemarketerSelected(tm))
    else
        dispatch(telemarketerDeselected(tm))
}

const mapStateToProps = (props) => ({props});
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(TelemarketerWithCards);
