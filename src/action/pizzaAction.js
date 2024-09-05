import axios from 'axios';

export const getAllPizzaDataAction=()=>async dispatch=>{
    dispatch({type:"GET_PIZZA_REQUEST"});
    
    try {
        const pizza = await axios.get('/api/pizza/pizzadata');
        //console.log(pizza); -- for checking....
        dispatch({type:"GET_PIZZA_SUCCESS", payload:pizza.data});
    } catch (error) {
        dispatch({type:"GET_PIZZA_FAILED", payload:error});
    }
}

export const filterPizzaDataAction=(searchkey,category)=>async dispatch=>{
    dispatch({type:"GET_PIZZA_REQUEST"});
    
    try {
        const pizza = await axios.get('/api/pizza/pizzadata');
        //console.log(pizza); -- for checking....
        var filter = pizza.data.filter(item=>item.name.toLowerCase().includes(searchkey));
        if(category!=='all'){
            filter = pizza.data.filter(item=>item.category.toLowerCase()===category);
        }
        dispatch({type:"GET_PIZZA_SUCCESS", payload:filter});
    } catch (error) {
        dispatch({type:"GET_PIZZA_FAILED", payload:error});
    }
}

export const addNewPizza = (pizza)=>async(dispatch)=>{
    dispatch({type:'ADD_NEW_PIZZA_REQUEST'});
    try {
        const response = await axios.post('/api/pizza/addnew',pizza);
        //console.log(response);---- for checking
        alert('Added succeddfully');
        dispatch({type:'ADD_NEW_PIZZA_SUCCESS'});
    } catch (error) {
        dispatch({type:'ADD_NEW_PIZZA_FAILED'});
    }
}

export const deletePizzaAction=(item)=>async(dispatch)=>{
    dispatch({type:'DELETE_PIZZA_REQUEST'});
    try {
        const response = await axios.post('/api/pizza/deletepizza',item);
        dispatch({type:'DELETE_PIZZA_SUCCESS'});
    } catch (error) {
        dispatch({type:'DELETE_PIZZA_FAILED'});
    }
}
