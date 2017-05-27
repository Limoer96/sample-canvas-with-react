import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import { changeR, changeG, changeB, changeOpcity, changeStyle } from './Actions.js'; 
import store from './Store.js';
import Header from './Header';
import Content from  './Content';
import ToolBar from './Tool';
import { render } from 'react-dom';

class App extends Component {
    constructor( props ) {
        super( props );
    }  
    render() {
        let { state, cr, cg, cb, copcity, cstyle } = this.props;
        return (
            <div style={{margin: 0, padding: 0}}>
                <Header />
                <Content state={ state }/>
                <ToolBar cr={cr} cg={cg} cb={cb} copcity={copcity} cstyle={cstyle} state={state} />
            </div>
        )
    }
}

function mapStatetoProps(state){
    return {state: state}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({cr: changeR, cg: changeG, cb: changeB, copcity: changeOpcity, cstyle: changeStyle}, dispatch)
}
// 创建包装过后的容器组件
App = connect(mapStatetoProps, mapDispatchToProps)(App);


render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('body')
)
