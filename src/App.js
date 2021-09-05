import React from "react";
import homeBack from './home_back.png';
import './App.scss';
import Products from "./Products";
import Cart from "./Component/Cart";
import {addQuantity, removeItem, showCartAction, subtractQuantity} from "./Component/actions/cartActions";
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{

    state = {
        show_cart:false
    }
    //to remove the item completely
    showCartAction = (status)=>{
        this.props.showCartSection(status);
    }

    render() {
        let status = this.props.status ? false : true;
        let cartText = this.props.status ? 'X' : 'CART';
        return (
            <div>
                <div className="container-fluid nav_container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="nav_bar">
                                <div className="logo">
                                    <h5>Fulhaus Shop</h5>
                                </div>
                                <div className="cart_button">
                                    <button onClick={()=>{this.showCartAction(status)}} className="btn btn-dark" id="cart_button">{cartText}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row home_section">
                        <div className="col-md-12">
                            <img src={homeBack} alt="Home Back Image" className="home_image" />
                            <div className="home_details">
                                <p className="title">Patio Furniture</p>
                                <button className="btn">Shop</button>
                            </div>
                        </div>
                    </div>
                    <Products></Products>
                </div>

                <Cart/>

            </div>
        );
    }
}



const mapStateToProps = (state)=>{
    return{
        status:state.cartStatus
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        showCartSection :(status)=>{ dispatch(showCartAction(status)) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
