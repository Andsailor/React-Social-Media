const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messagesData: [
        { id: 1, message: "Hello, Rolling Stones is amazing!" },
        { id: 2, message: "What's up man? How was your weekend?" },
        { id: 3, message: "Buffalo Bills destroyed their conferention opponents. We are on the way to SuperBowl!!!" },
        { id: 4, message: "Im ill. Can you bring me some food please?" },
        { id: 5, message: "Du hast" },
    ],
    dialogsData: [
        { id: 1, name: "Andrew", img: "https://i.pinimg.com/originals/7c/67/c5/7c67c5576c2fbbf9791ac04436fb0aa2.jpg" },
        { id: 2, name: "Keith", img: "https://i.pinimg.com/280x280_RS/12/9f/cd/129fcd2565f7a5a9267b8fe8546fe4ce.jpg" },
        { id: 3, name: "Josh", img: "https://cdn.dribbble.com/users/2493621/screenshots/8502207/8-bit-josh-allen-dribble_4x.png" },
        { id: 4, name: "Merlin", img: "https://octodex.github.com/images/baracktocat.jpg" },
        { id: 5, name: "Till", img: "https://i0.wp.com/haulixdaily.com/wp-content/uploads/2020/03/image.jpeg?fit=1500%2C1057&ssl=1" },
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:

            let body = action.newMessageText;

            return {
                ...state,
                messagesData: [...state.messagesData, { id: state.messagesData.length + 1, message: body }],
            }

        default:

            return state;
    }
}

export const sendMessageActionCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

export default dialogsReducer;