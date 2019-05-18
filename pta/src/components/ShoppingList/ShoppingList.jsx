import React, { Component } from 'react';
import Product from '../Products/Products'

class ShoppingList extends Component {
    state = {
        items:[
        {
            name: 'Arroz',
            price: 3.13,
            code: 132165,
            img: 'https://tempodecozimento.com.br/wp-content/uploads/2017/11/Fotolia_176406866_XS.jpg'
        },
        {
            name: 'Feijao',
            price: 2.22,
            code: 4658,
            img:'https://tempodecozimento.com.br/wp-content/uploads/2017/10/batata.jpg'
        },
        {
            name:'Batata',
            price: 5.55,
            code: 87963,
            img:'https://conteudo.imguol.com.br/bf/2016/09/30/feijao-carioca-1475248200048_v2_900x506.jpg'
        }
    ]
     }
    render() { 
        return (  
            <section>
                <h1>Shopping</h1>
                {this.state.items.map(item => <Product name={item.name} price={item.price} image={item.img}/>)}
            </section>
        );
    }
}
 
export default ShoppingList;