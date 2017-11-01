import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeToDefault } from '../../Actions';
import { drawImage, changeOpcity, saveImage, drawBackground } from '../../canvas';
import style from './Content.css';

class Content extends Component {
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
        let { state } = this.props;
        let canvas = this.refs.canvas;
        let img = this.refs.image;
        saveImage(canvas, img, state);
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
        return this.props.makeToDefault();
    }
    render() {
        return (
            <div className={style.contentContainer}> 
                <canvas ref='canvas' width="600px" height="400px" draggable={true}>
                    你的浏览器不支持Canvas
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

Content.propTypes = {
    state: PropTypes.object.isRequired,
    makeToDefault: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

export default connect(mapStateToProps, { makeToDefault })(Content);





