export const userRegisterReducer=(state={},action)=>{
    switch(action.type){
        case 'USER_REGISTER_REQUEST':
            return{
                loading: true,
            }
        case 'USER_REGISTER_SUCCESS':
            return{
                loading: false,
                success: true
            }
        case 'USER_REGISTER_FAILED':
            return{
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export const userLoginReducer=(state={},action)=>{
    switch(action.type){
        case 'USER_LOGIN_REQUEST':
            return{
                loading: true
            }
        case 'USER_LOGIN_SUCCESS':
            return{
                loading: false,
                user : action.payload,
            }
        case 'USER_LOGIN_FAILED':
            return{
                loading: false,
                error: action.payload
            }
        case 'USER_LOGOUT':
            return{
                loading: false,
                user:null
            }
        default:
            return state;
    }
}

export const allUserReducer=(state={},action)=>{
    switch(action.type){
        case 'ALL_USER_REQUEST':
            return{
                loading: true
            }
        case 'ALL_USER_SUCCESS':
            return{
                loading: false,
                userdata : action.payload,
            }
        case 'ALL_USER_FAILED':
            return{
                loading: false,
                error: action.payload
            }
        case 'USER_LOGOUT':
            return{
                loading: false,
                user:null
            }
        default:
            return state;
    }
}

export const userDeleteReducer = (state={},action)=>{
    switch(action.type){
        case 'DELETE_USER_REQUEST':
            return{
                loading: true
            }
        case 'DELETE_USER_SUCCESS':
            return{
                loading: false,
                success:true,
            }
        case 'DELETE_USER_FAILED':
            return{
                loading: false,
                error: true
            }

        default:
            return state;
    }
}