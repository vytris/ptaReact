import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    state = { 
        count: 1,
        items: [
            'arroz',
            'feijao',
            'batata'
        ]
     }
     constructor(){
         super();
         this.handleIncrement = this.handleIncrement.bind(this);
     }

    handleIncrement(){
        this.setState({count: this.state.count + 1});
    }
    resetCount = () =>{
        this.setState({count: 0});
    }

    render() { 
        return (
            <div>
                <h1 className="titulo-home">{this.showCount()}</h1>
                <h2 onClick={this.showCount}>Olá Mundo</h2>
                <input onClick={this.handleIncrement} type="submit" value="Add"/>
                <input onClick={this.resetCount} type="submit" value="Reset"/>

                <ul>
                    {this.state.items.map(item =>  <li>{item}</li>)}
                </ul>
            </div>
        );
    }
    showCount = () => {
        return this.state.count ? this.state.count : 'Zero';

    }
}
 
export default Home;
<h1>Hello World</h1>