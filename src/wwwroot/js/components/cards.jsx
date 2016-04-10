import React from 'react';
import {connect} from 'react-redux';

const Cards = ({cards = {}, dispatch}) => (
  <div className="card inline">Cards go here</div>  
);

const mapStateToProps = (props) => ({ cards: props.cards });
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Cards);