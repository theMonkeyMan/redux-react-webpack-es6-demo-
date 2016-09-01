import React, {Component} from "react";
import {render} from "react-dom";
import {createStore} from "redux";

class Button extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {
        //获取react-redux提供的connect方法传递过来的数据,默认传递dispatch
        const {dispatch, onHandler, text}=this.props;
        return (
            <div>
                <button onClick={onHandler}>
                    {text || "按钮"}
                </button>
            </div>
        )
    }
}

export default Button;