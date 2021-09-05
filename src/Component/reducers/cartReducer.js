import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    SHOW_CART_ACTION
} from '../actions/action-types/cart-actions'
import axios from "axios";
import {act} from "@testing-library/react";

const initState = {
    items: [
    ],
    addedItems:[],
    total: 0,
    cartStatus:false
}

axios.get('https://main-api.fulhaus.com/fulhaus-tech-test/get-products')
    .then(res => {
        const products = res.data;
        initState.items = products;
    })

const cartReducer= (state = initState,action)=>{
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.MAP === action.MAP)

          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.MAP === item.MAP)
         if(existed_item)
         {
             return{
                ...state,
                 total: state.total
             }
         }
         else{
            //calculating the total
            let newTotal = state.total + addedItem.MSRP
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.MAP === item.MAP)
        let new_items = state.addedItems.filter(item=> action.MAP !== item.MAP)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.MSRP )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === SHOW_CART_ACTION){
        let status = action.status;
        return{
            ...state,
            cartStatus: status
        }
    }

  else{
    return state
    }
    
}

export default cartReducer
