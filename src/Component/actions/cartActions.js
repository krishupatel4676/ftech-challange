
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,SHOW_CART_ACTION} from './action-types/cart-actions'

//add cart action
export const addToCart= (MAP)=>{
    return{
        type: ADD_TO_CART,
        MAP
    }
}
//remove item action
export const removeItem=(MAP)=>{
    return{
        type: REMOVE_ITEM,
        MAP
    }
}
//subtract qt action
export const subtractQuantity=(MAP)=>{
    return{
        type: SUB_QUANTITY,
        MAP
    }
}
//add qt action
export const addQuantity=(MAP)=>{
    return{
        type: ADD_QUANTITY,
        MAP
    }
}

export const showCartAction=(status)=>{
    return{
        type:SHOW_CART_ACTION,
        status:status
    }
}
