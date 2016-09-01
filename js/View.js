import React, {Component} from "react";
import InputConnect from "./contains/inputConnect";
import ButtonConnect from "./contains/ButtonConnect";

class View extends Component {
    render() {
        return (
            <div>
                <InputConnect/>
                <div style={{float:"left"}}>
                <ButtonConnect text={"加"} actionType={"ADD"}/>
                    </div>
                <div style={{float:"left"}}>
                <ButtonConnect text={"减"} actionType={"REDUCE"}/>
                    </div>
            </div>
        )
    }
}

export default View;