export const addToCartAction=(pizza,quantity,varient)=>(dispatch,getState)=>{
    var cartItem={
        id:pizza._id,
        name: pizza.name,
        image:pizza.image,
        prices : pizza.prices,
        varient: varient,
        quantity: quantity,
        cartItemPrice: pizza.prices[0][varient] *  quantity
    }
    //console.log(cartItem); -- for checking
    
    dispatch({type:"ADD_TO_CART", payload: cartItem});

    const cartitem = getState().addToCartReducers.cartItem;
    localStorage.setItem('cartItem',JSON.stringify(cartitem));

}

export const deleteFromCart=(pizza)=>(dispatch,getState)=>{
    dispatch({type:'DELETE_FROM_CART',payload:pizza});
    const cartitem = getState().addToCartReducers.cartItem;
    localStorage.setItem('cartItem',JSON.stringify(cartitem));

}

export const emptyTheCart=()=>(dispatch)=>{
    dispatch({type:'EMPTY_THE_CART'});
    localStorage.removeItem('cartItem');
}