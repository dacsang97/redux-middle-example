import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { addValue, subValue, addValueAsync } from "../actions/numberActions";

const mapStateToProps = state => {
  return {
    number: state.counter.number
  };
};

export default connect(mapStateToProps, { addValue, subValue, addValueAsync })(
  Counter
);
