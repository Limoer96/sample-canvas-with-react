import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import store from './Store.js';
import Header from './components/Header/Header';
import Content from  './components/Content/Content';
import ToolBar from './components/Tool/Tool';
import { render } from 'react-dom';


const App = () => (
    <div style={{margin: 0, padding: 0}}>
        <Header />
        <Content />
        <ToolBar />
    </div>
)


render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

