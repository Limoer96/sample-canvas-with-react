import React, { Component } from 'react';
import style from './Content.css';
import { drawImage, changeOpcity, saveImage, drawBackground } from './canvas.js';
export default class Content extends Component {
    constructor( props ) {
        super( props );
    }
    componentDidMount() {
        this.initialBackground();
    }
    componentDidUpdate(){
        this.updateCanvas();
    }
    initialBackground(){
        let canvas = this.refs.canvas;
        let ctx = canvas.getContext('2d');  
        drawBackground(ctx);   
    }
    initialImage(){
        let canvas = this.refs.canvas;
        let ctx = canvas.getContext('2d');
        let img = this.refs.image;  
        drawImage(img, ctx);
    }
    updateCanvas(){
        let canvas = this.refs.canvas;
        let img = this.refs.image;
        let ctx = canvas.getContext('2d');      
        drawImage(img, ctx);      
        let state= this.props.state; 
        changeOpcity(canvas, ctx, state.opcity, state.r, state.g, state.b, state._style);
    }
    save(){
        let canvas = this.refs.canvas;
        saveImage(canvas);
    }
    getFileInfo(e){
        let FileReader = window.FileReader;
        let image = this.refs.image;
        if(FileReader){
            let reader = new FileReader();
            let file = e.target.files[0]; // 可以获取到文件
            reader.onload = function(e){
                image.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }else{
            console.log('can not use fileReader');
        }
        setTimeout(() => {
            this.initialImage();
        }, 500);
        return this.props.mDefault();
    }
    render() {
        return (
            <div className={style.contentContainer}> 
                <canvas  ref='canvas' width="600px" height="400px">
                    不支持canvas
                </canvas>
                <div className={style.btnContainer}>
                    <p className={style.selectContainer}>
                        <span className={style.notice}>选择文件</span>
                        <input className={style.select} type="file"  onChange={this.getFileInfo.bind(this)} accept='image/png, image/jpeg, image/gif'/>
                    </p>
                    <button className={style.save} onClick={this.save.bind(this)}>保存到本地</button>
                </div>
                <img style={{display: 'none'}} ref='image' />
            </div>
        )
    }
}
