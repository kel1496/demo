import axios from 'axios';

export const ACTIONS_LOADING = 'ACTIONS_LOADING';
export const ACTIONS_RECIEVED = "ACTIONS_RECIEVED" ;
export const ACTIONS_FAILED = "ACTIONS_FAILED";

export const GetActividades = () => async dispatch => {
    try {
        dispatch({
            type: ACTIONS_LOADING
        })

        const res = await axios.get(`https://demos.inbonis.com/api-coach-es-informa/activities`)
        const data = [];
        for (let i = 0; i < res.data.length; i++){
            data.unshift(res.data[i])
        
        }

        dispatch ({
            type: ACTIONS_RECIEVED,
            payload: data
        })

    }catch(e){
        dispatch({
            type: ACTIONS_FAILED
        })
        
    }
}
