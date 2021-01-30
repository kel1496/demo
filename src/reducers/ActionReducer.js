import {ACTIONS_LOADING, ACTIONS_RECIEVED, ACTIONS_FAILED} from '../actions/resultAction'

const DefaultState = {
    loading: false,
    data:[],
    errorMsg: ""
};

const ActionReducer = (state = DefaultState,action) => {
    switch (action.type) {
        case ACTIONS_LOADING:
            return{
                ...state,
                loading:true
            }
            
        case ACTIONS_RECIEVED:
            return{
                ...state,
                loading:true,
                data: action.payload
            }

        case ACTIONS_FAILED:
            return{
                ...state,
                loading:true,
                errorMsg: "Not Found"
            }
    
        default:
            return state;
    }
}

export default ActionReducer;