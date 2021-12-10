import React, { Component, useReducer } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import reducer, { initialState } from './reducers';
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions';
import { start, successful, failed, add, error } from './actions';

const App = ()=> {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleStart = () => {
    dispatch(start());
  }

  const handleSuccessful = () => {
    dispatch(successful());
  }

  const handleFailed = () => {
    dispatch(failed());
  }

  const handleAdd = () => {
    dispatch(add());
  }

  const handleError = () => {
    dispatch(error());
  }

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurf,
  }
}
export default connect(mapStateToProps, { fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.