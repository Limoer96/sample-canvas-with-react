import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeR, changeG, changeB, changeOpcity, changeStyle } from '../../Actions'; 
import style from './Tool.css';
class ToolBar extends Component {
    constructor( props ) {
        super( props );
    }
    componentDidMount(){
        if(this.props.state.hasComplete){
            this.refs.style_type.value = 'no_style';
            this.refs.r_pixc.value = 10;
            this.refs.g_pixc.value = 10;
            this.refs.b_pixc.value = 10;
            this.refs.opcity_pixc.value = 10;
        }
    }
    componentDidUpdate(){
        if(this.props.state.hasComplete){
            this.refs.style_type.value = 'no_style';
            this.refs.r_pixc.value = 10;
            this.refs.g_pixc.value = 10;
            this.refs.b_pixc.value = 10;
            this.refs.opcity_pixc.value = 10;
        }
    }
    render() {
        let { cr, cg, cb, copcity, cstyle, state } = this.props;
        return (
            <div className={style.toolContainer}>
                <ul>
                    <li className={style.li_each}>
                        <label htmlFor="style" className={style.label}>样式：</label>
                        <select ref='style_type' name="style" onChange={(e) => {cstyle(e.target.value)}}>
                            <option value="no_style">无</option>
                            <option value="lose_color">去色</option>
                            <option value="reverse_color">负色</option>
                        </select>
                    </li>
                    <li className={style.li_each}>
                        <label htmlFor="r" className={style.label}>R：</label>
                        <input ref="r_pixc" className={style.range} name="r" type="range" min="5" max="15" defaultValue="10" step="0.01" onChange={(e) =>{cr(e.target.value/10)}}/>
                        <span ref='r_pan' className={style.show_right}>{this.props.state.r.toFixed(2)}</span>
                    </li>
                    <li className={style.li_each}>
                        <label htmlFor="g" className={style.label}>G：</label>
                        <input ref="g_pixc" className={style.range} name="g" type="range" min="5" max="15" defaultValue="10" step="0.01" onChange={(e) => {cg(e.target.value/10)}}/>
                        <span ref='g_pan' className={style.show_right}>{this.props.state.g.toFixed(2)}</span>
                    </li>
                    <li className={style.li_each}>
                        <label htmlFor="b" className={style.label}>B：</label>
                        <input ref="b_pixc" className={style.range} name="b" type="range" min="5" max="15" defaultValue="10" step="0.01" onChange={(e) => {cb(e.target.value/10)}}/>
                        <span ref='b_pan' className={style.show_right}>{this.props.state.b.toFixed(2)}</span>
                    </li>
                    <li className={style.li_each}>
                        <label htmlFor="opcity" className={style.label}>Opcity：</label>
                        <input ref="opcity_pixc" style={{width: 150}} name="opcity" type="range" min="3" max="10" defaultValue="10" step="0.01" onChange ={(e) => {copcity(e.target.value/10)}}/>
                        <span ref='opcity_pan' className={style.show_right}>{this.props.state.opcity.toFixed(2)}</span>
                    </li>
                </ul>
            </div>
        )
    }
}

ToolBar.propTypes = {
    state: PropTypes.object.isRequired,
    cr: PropTypes.func.isRequired,
    cb: PropTypes.func.isRequired,
    cg: PropTypes.func.isRequired,
    copcity: PropTypes.func.isRequired,
    cstyle: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

const mapDispatchToProps = {
    cr: changeR,
    cb: changeB,
    cg: changeG,
    cstyle: changeStyle,
    copcity: changeOpcity
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);


