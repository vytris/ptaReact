import React, { Component } from 'react';
import './product.css'

class Product extends Component {
    state = { 
        count: 0,
     }
    render() { 
        const countStyle = this.state.count ? 'amoun-style' : 'amount-style-zero'
        return (
            <div className="product">
                <img src={this.props.image} alt="product" className="product-image"/>
                <div className="product-info-container">
                    <h3>{this.props.name}</h3>
                    <p>R${this.props.price}</p>
                    <p className={countStyle}>{this.state.count}</p>
                </div>
                <input type="submit" value="Add" onClick={this.add} className="btn-product"/>
                <input type="submit" value="Remove" onClick={this.remove} className="btn-product"/>
            </div>
          );
    }

    add =() =>{
        this.setState({count: this.state.count + 1});
    }

    remove =() =>{
        console.log(this.state.count);
        if(this.state.count >0){
            this.setState({count: this.state.count - 1})
        }
    }
}
 
export default Product;