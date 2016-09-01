import {connect} from "react-redux";
import Input from "../component/input";

const mapStateToProps = (state, ownProps) => {
    return {
        number: state.number
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const InputConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input)

export default InputConnect;