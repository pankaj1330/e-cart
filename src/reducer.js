export default function reducer(state,action){
    if(action.type === 'INIT_STATE'){
        return {...state,cart : action.payload}
    }
    if(action.type === 'INC_AMOUNT'){
        const newList = state.cart.map(item => {
            if(item.id === action.payload){
                return {...item,amount : item.amount + 1}
            }
            return item;
        })
        return {...state,cart : newList}
    }
    if(action.type === 'DEC_AMOUNT'){
        const decAmt = state.cart.map(item => {
            if(item.id === action.payload){
                return {...item,amount : item.amount - 1}
            }
            return item;
        })
        const newList = decAmt.filter(item => item.amount !== 0); 
        return {...state,cart : newList}
    }
    if(action.type === 'REMOVE'){
        return {...state,cart : state.cart.filter(item => item.id !== action.payload)};
    }
    if(action.type === 'CLEAR'){
        return {...state,cart:[]};
    }
    if(action.type === 'GET_TOTAL'){
        let cartTotal = state.cart.reduce((cartTotal,currentValue)=>{
            cartTotal.total += (currentValue.price * currentValue.amount);
            cartTotal.amount += currentValue.amount;
            return cartTotal
                
        },{total:0,amount:0})
        cartTotal.total = parseFloat(cartTotal.total.toFixed(2));
        return {...state,...cartTotal}
    }
    if(action.type === 'SET_CART'){
        return {...state,cart : action.payload};
    }
    return state;
}