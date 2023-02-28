// React ecosystem imports
import React from 'react';

// Styles imports
import classes from './Dialogs.module.css'

// Components imports
import DialogItem from './Dialogitem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.messages;

    const { messagesData, dialogsData, newMessageText } = state;

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

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text)
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsItem}

            </div>
            <div className={classes.messages}>

                <div>{messagesItem}</div>
                <div>
                    <div><textarea
                        value={newMessageText}
                        placeholder='Enter your message'
                        onChange={onMessageChange} >
                    </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send message</button></div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;