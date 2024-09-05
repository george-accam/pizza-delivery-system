export const getAllPizzaDataReducers=(state={},action)=>{
    switch(action.type){
        case 'GET_PIZZA_REQUEST':
            return{
                loading: true,
                ...state
                };
        case 'GET_PIZZA_SUCCESS':
            return{
                loading:false,
                pizzas : action.payload
            };
        case 'GET_PIZZA_FAILED':
            return{
                loading: false,
                error : action.payload
            };
        default:
            return state; 
    }
}

export const addNewPizzaReducers=(state={},action)=>{
    switch(action.type){
        case 'ADD_NEW_PIZZA_REQUEST':
            return{
                loading: true
            }
        case 'ADD_NEW_PIZZA_SUCCESS':
            return{
                loading: false,
                success: true
            }
        case 'ADD_NEW_PIZZA_FAILED':
            return{
                loading: false,
                error: false
            }
        default:
            return state;
    }
}

export const deletePizzaReducers=(state={},action)=>{
    switch(action.type){
        case 'DELETE_PIZZA_REQUEST':
            return{
                loading: true
            }
        case 'DELETE_PIZZA_SUCCESS':
            return{
                loading: false,
                success: true
            }
        case 'DELETE_PIZZA_FAILED':
            return{
                loading: false,
                error: false
            }
        default:
            return state;
    }
}
