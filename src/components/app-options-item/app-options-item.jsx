import { Component } from 'react';
import './app-options-item.css'


class AppOptionsItem extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {name,img,amount} = this.props;
        return(
            <div className="item">
                <img src={img} alt={name}></img>
                <h3>{name}</h3>
                <div className='amount'>
                    <div className='amount-value' onClick={this.props.setAmountMinus}>
                        <h3>-</h3>
                    </div>
                    <h3>{amount}</h3>
                    <div className='amount-value' onClick={this.props.setAmountPlus}>
                        <h3>+</h3>
                    </div>

                </div>
             </div>
        )
    }
}

export default AppOptionsItem;