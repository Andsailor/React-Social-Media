// React-redux ecosystem imports
import { sendMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

// Components imports
import Dialogs from './Dialogs';

//HOC imports
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

let mapStateToProps = (state) => {

    return {
        messages: state.messages,
    }
};

let mapDispatchToProps = (dispatch) => {

    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText))
        }
    }
}

let DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;