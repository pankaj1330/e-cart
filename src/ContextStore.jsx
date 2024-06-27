import { createContext, useContext, useEffect, useReducer } from "react";
import data from "./data";
import reducer from "./reducer";

const ContextStore = createContext();
// const url = 'https://course-api.com/react-useReducer-cart-project';

export default function ContextProvider({children}){
    const initialState = {
        loading: false,
        cart: data,
        total: 0,
        amount: 0,
      }

      
      const [state,dispatch] = useReducer(reducer,initialState);
      useEffect(()=>{
        dispatch({type:'GET_TOTAL'});
      },[state.cart]);

    //   useEffect(()=>{
    //     async function fetchurl(){
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         console.log(data);
    //         dispatch({type:'SET_CART',payload : data})
    //     }
    //     fetchurl();
    //   },[])

    function initState(){
        dispatch({type:'INIT_STATE',payload:data});
        return;
    }

    function incAmount(id){
        dispatch({type : 'INC_AMOUNT',payload : id});
        return;
    }
    function decAmount(id){
        dispatch({type : 'DEC_AMOUNT',payload : id});
        return;
    }

    function clearCart(){
        dispatch({type:'CLEAR'});
        return;
    }

    function removeItem(id){
        dispatch({type:'REMOVE',payload:id});
        return;
    }
    return <ContextStore.Provider value={{state,incAmount,decAmount,clearCart,removeItem,initState}}>{children}</ContextStore.Provider>
}

export const useGlobal = () => {
    return useContext(ContextStore);
}
