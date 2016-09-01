import React, {Component} from "react";
import {render} from "react-dom";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {addReducer} from "./reducer/addReducer";
import View from "./View";
import logger from "./middleWare/logger";
import throwLog from "./middleWare/throw";

//注册中间件
let createStoreMiddleWare=applyMiddleware(logger,throwLog)(createStore);

//用applyMiddleware加工过的createStore来创建store
let store = createStoreMiddleWare(addReducer);


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View />
            </Provider>
        )
    }
}

window.onload = function () {
    render(
        React.createElement(App),
        document.getElementById("example")
    )
}