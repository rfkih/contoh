import { combineReducers, createStore} from 'redux'

const init ={
    id: 0,
    username:"",
    role: "",
    berhasil:"hore",
}



const authReducer = (state = init, action) =>{
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
            id: action.payload.id, 
            username: action.payload.username,
            role: action.payload.role}
            break;
       
        default:

            return state
            break;
    }
};

const reducers = combineReducers({
    auth: authReducer,
});

const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;