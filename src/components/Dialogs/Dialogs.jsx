// React ecosystem imports
import React from 'react';

// Styles imports
import classes from './Dialogs.module.css'

// Components imports
import DialogItem from './Dialogitem/DialogItem';
import Message from './Message/Message';

import AddMessageReduxForm from '../Forms/DialogsForm.jsx'

const Dialogs = (props) => {

    let state = props.messages;

    const { messagesData, dialogsData } = state;

    let dialogsItem = dialogsData.map(item => {

        return (
            <DialogItem name={item.name} key={item.id} id={item.id} avatar={item.img} />
        )
    })

    let messagesItem = messagesData.map(item => {

        return (
            <Message dispatch={props.dispatch} key={item.id} id={item.id} message={item.message} />
        )
    })

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsItem}

            </div>
            <div className={classes.messages}>
                <div>
                    {messagesItem}
                </div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}



export default Dialogs;