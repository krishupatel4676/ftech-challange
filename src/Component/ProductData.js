import React from 'react';
import axios from 'axios';
import '../App.scss';

class ProductData extends React.Component{


    state = {
        products: []
    }

    constructor() {
        super();
        axios.get('https://main-api.fulhaus.com/fulhaus-tech-test/get-products')
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }


}

export default ProductData;