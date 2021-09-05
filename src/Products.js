import React from 'react';

import axios from 'axios';
import {connect} from "react-redux";
import './App.scss';
import {addToCart} from "./Component/actions/cartActions";

class Products extends React.Component {

    state = {
        products: []
    }

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    componentDidMount() {
        axios.get('https://main-api.fulhaus.com/fulhaus-tech-test/get-products')
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }

    render() {
        return (
            <div className="row product_section">
                { this.state.products.map((product) => <div className="col-md-4 single_product">
                    <img src={ product.imageURLs[0] } alt="Product Image" className="product_image" />
                    <div className="product_details">
                        <div className="product_details_top">
                            <p className="product_name">{product.itemName}</p>
                            <p className="brand_name">{ product.fulhausCategory }</p>
                        </div>
                        <div className="product_details_bottom">
                            <button onClick={()=>{this.handleClick(product.MAP)}} className="add_to_cart btn btn-secondary">Add To Cart</button>
                            <p className="price">${product.MSRP}</p>
                        </div>
                    </div>
                </div> )}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.products
    }
}
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (MAP)=>{dispatch(addToCart(MAP))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)