import React, { Component } from 'react';
import style from './Tool.css';
export default class ToolBar extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        let { cr, cg, cb, copcity, cstyle, state } = this.props;
        return (
            <div className={style.toolContainer}>
                <ul className={style.toolList}>
                    <li>
                        <label htmlFor="style" className={style.label_style}>样式：</label>
                        <select name="style" onChange={(e) => {cstyle(e.target.value)}}>
                            <option value="no_style">无</option>
                            <option value="lose_color">去色</option>
                            <option value="reverse_color">负色</option>
                        </select>
                    </li>
                    <li className={style.li_each}>
                        <label htmlFor="r" className={style.label}>R：</label>
                        <input ref="r_pixc" name="r" type="range" min="5" max="15" defaultValue="10" onChange={(e) =>{cr(e.target.value/10)}}/>
                        <span ref='r_pan' className={style.show_right}>{this.props.state.r.toFixed(1)}</span>
                    </li>
                    <li className={style.li_each}>
                        <label htmlFor="g" className={style.label}>G：</label>
                        <input ref="g_pixc" name="g" type="range" min="5" max="15" defaultValue="10" onChange={(e) => {cg(e.target.value/10)}}/>
                        <span ref='g_pan' className={style.show_right}>{this.props.state.g.toFixed(1)}</span>
                    </li>
                    <li className={style.li_each}>
                        <label htmlFor="b" className={style.label}>B：</label>
                        <input ref="b_pixc" name="b" type="range" min="5" max="15" defaultValue="10" onChange={(e) => {cb(e.target.value/10)}}/>
                        <span ref='b_pan' className={style.show_right}>{this.props.state.b.toFixed(1)}</span>
                    </li>
                    <li className={style.li_each}>
                        <label htmlFor="opcity" className={style.label_opcity}>Opcity：</label>
                        <input ref="opcity_pixc" name="opcity" type="range" min="3" max="10" defaultValue="10" onChange ={(e) => {copcity(e.target.value/10)}}/>
                        <span ref='opcity_pan' className={style.show_right}>{this.props.state.opcity.toFixed(1)}</span>
                    </li>
                </ul>
            </div>
        )
    }
}
