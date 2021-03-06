import { SET_USERS } from "./types";

const initialState = {
    isSidebarShow: true,
    users: [],
    // ... va hokazo
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };

        default: return state;
    }
}

export default reducer;