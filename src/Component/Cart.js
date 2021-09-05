import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {removeItem, addQuantity, subtractQuantity, showCartAction} from './actions/cartActions'
import App from "../App";

class Cart extends Component{

    //to remove the item completely
    handleRemove = (MAP)=>{
        this.props.removeItem(MAP);
    }
    //to add the quantity
    handleAddQuantity = (MAP)=>{
        this.props.addQuantity(MAP);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (MAP)=>{
        this.props.subtractQuantity(MAP);
    }
    render(){

        let total = this.props.total;
        let cartClassName = 'container side_menu hide_side_menu';
        let status = this.props.cartStatus;
        if(status === true){
            cartClassName = 'container side_menu';
        }
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                    <div className="row cart_single_product">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={item.imageURLs[0]} alt="Product Image" className="cart_product_image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="cart_product_details">
                                        <div className="cart_product_detail_top">
                                            <p className="cart_product_name">{item.itemName}</p>
                                            <p className="cart_brand_name">{item.fulhausCategory}</p>
                                        </div>
                                        <div className="remove_cart_section">
                                            <a onClick={()=>{this.handleRemove(item.MAP)}} className="remove_cart_text">&#215;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-8">
                                    <div className="cart_product_detail_bottom">
                                        <p className="cart_product_price">${item.MSRP}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                         
                    )
                })
            ):

             (
                <p>Nothing Add To Cart.</p>
             )
       return(
           <div className={cartClassName}>
               <div className="cart_product_section">
                   {addedItems}
               </div>
               <div className="checkout_button_section">
                   <div className="total_section">
                       <p className="total_cart">Total:</p>
                       <p className="price_cart">${total}</p>
                   </div>
                   <div className="button_section">
                       <button className="btn btn-dark">Checkout</button>
                   </div>
               </div>
           </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        addedItems: state.addedItems,
        total:state.total,
        cartStatus: state.cartStatus
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        removeItem: (MAP)=>{dispatch(removeItem(MAP))},
        addQuantity: (MAP)=>{dispatch(addQuantity(MAP))},
        subtractQuantity: (MAP)=>{dispatch(subtractQuantity(MAP))},
        showCartSection :(status)=>{ dispatch(showCartAction(status)) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)