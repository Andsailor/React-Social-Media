import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    // Global state storage
    _state: {

        // Profile page
        profile: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likeCounts: 1 },
                { id: 2, message: 'It"s my first post', likeCounts: 3 }
            ],
            newPostText: 'Create new post'
        },

        // Dialogs page
        messages: {
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
            ],
            newMessageText: ""
        },
        sidebar: {

        }
    },

    // Render DOM root
    _renderTree() {
    },

    // Getter function for private state
    getState() {
        return this._state;
    },

    // Function-observer for renderTree
    subscribe(observer) {
        this._renderTree = observer;
    },

    dispatch(action) {  // { type: 'ADD-POST'}
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = dialogsReducer(this._state.messages, action);

        this._renderTree(this._state)
    }
}


export default store;