export const otherReducers=(state={},action)=>{
    switch(action.type){
        case 'GET_OTHERS_REQUEST':
            return{
                oloading: true,
                ...state
            }
        case 'GET_OTHERS_SUCCESS':
            return{
                oloading: false,
                others: action.payload
            }
        case 'GET_OTHERS_FAILED':
            return{
                oloading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const addNewOtherReducers=(state={},action)=>{
    switch(action.type){
        case 'ADD_NEW_OTHER_REQUEST':
            return{
                loading: true
            }
        case 'ADD_NEW_OTHER_SUCCESS':
            return{
                loading: false,
                success: true
            }
        case 'ADD_NEW_OTHER_FAILED':
            return{
                loading: false,
                error: false
            }
        default:
            return state;
    }
}

export const deleteOtherReducers=(state={},action)=>{
    switch(action.type){
        case 'DELETE_OTHER_REQUEST':
            return{
                loading: true
            }
        case 'DELETE_OTHER_SUCCESS':
            return{
                loading: false,
                success: true
            }
        case 'DELETE_OTHER_FAILED':
            return{
                loading: false,
                error: false
            }
        default:
            return state;
    }
}