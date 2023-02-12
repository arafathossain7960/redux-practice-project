import { ADD_TO_CART, REMOVE_TO_CART } from "../ActionsTypes/ActionsTypes"

export const productsAdd=(data)=>{
    return{
        type:ADD_TO_CART,
        payload:data,
    }
}

export const productRemoved =(data)=>{

    return{
        type:REMOVE_TO_CART,
        payload:data
    }
  
}