import React, { Component } from 'react';
import style from './Header.css';
export default class Header extends Component {
    constructor( props ) {
        super( props );
    }
    render() { 
        return (
            <div className={style.container}>
                <h1 className={style.brand}>图片编辑器Demo </h1>
                <p className={style.time}>Time: {new Date().toString()}</p>
            </div>
        )
    }
}

