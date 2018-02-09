import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header'

const Dashboard = ()=> <h2>customer list</h2>;
const CustomerNew = ()=> <h2>Custnew</h2>;
const Landing = ()=> <h2>Landing</h2>;

class App extends Component{
  componentDidMount() {
    this.props.fetchCustomer()
  }
  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact={true} path="/" component={Landing}/>
            <Route exact ={true} path="/customers" component={Dashboard}/>
            <Route path="/customers/new" component={CustomerNew}/>
          </div>
        </BrowserRouter>
      </div>

    )
  }

};

export default connect(null, actions)(App);
