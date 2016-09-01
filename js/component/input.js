import React, {Component} from "react";
import {render} from "react-dom";
import {createStore} from "redux";

class Input extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {
        const {dispatch, number}=this.props;
        return (
            <div>
                <input type="text" value={number}/>
            </div>
        )
    }
}

export default Input;