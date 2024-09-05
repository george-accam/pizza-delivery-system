import axios from "axios";
export const otherStuffsAction=()=>async dispatch=>{
    dispatch({type:"GET_OTHERS_REQUEST"});
    try {
        const others = await axios.get('/api/others/otherstuff');
        dispatch({type:"GET_OTHERS_SUCCESS",payload:others.data});
    } catch (error) {
        dispatch({type:"GET_OTHERS_FAILED",payload:error});
    }
}

export const filterotherStuffsAction=(searchkey,category)=>async dispatch=>{
    dispatch({type:"GET_OTHERS_REQUEST"});
    try {
        const others = await axios.get('/api/others/otherstuff');
        var filter = others.data.filter(item=>item.name.toLowerCase().includes(searchkey));
        if(category!=='all'){
            filter = others.data.filter(item=>item.category.toLowerCase()===category);  
        }
        dispatch({type:"GET_OTHERS_SUCCESS",payload:filter});
    } catch (error) {
        dispatch({type:"GET_OTHERS_FAILED",payload:error});
    }
}

export const addOtherStuffAction =(item)=>async dispatch=>{
    dispatch({type:'ADD_NEW_OTHER_REQUEST'});
    try {
        const response = await axios.post('/api/others/addnew',item);
        dispatch({type:'ADD_NEW_OTHER_SUCCESS'});
    } catch (error) {
        dispatch({type:'ADD_NEW_OTHER_FAILED'});
    }
}

export const deleteOtherStuffAction=(item)=>async dispatch=>{
    dispatch({type:'DELETE_OTHER_REQUEST'});
    try {
        const response = await axios.post('/api/others/delete',item);
        alert('Deleted successfully! Please refresh the page');
        dispatch({type:'DELETE_OTHER_SUCCESS'});
    } catch (error) {
        dispatch({type:'DELETE_OTHER_FAILED'});
    }
}