import './app-main.css'

const { Component } = require("react");


class AppMain extends Component{

    constructor(props){
        super(props);

    }


    render(){
        return(
            <div className="main">
                <div className="container main-container">
                    <div className="main-title">
                        <h2>Make Your Burger</h2>
                    </div>
                    <div className='burger-image'>
                        <img src={'/burger.png'} title='burger'></img>
                    </div>
                    <div className='summary'>
                        <h3>Summary</h3>
                        <div className='price'>
                            <h3>{this.props.data.price.toFixed(2)}$</h3>
                            <button type='button'>Checkout</button>
                        </div>
                        <div className='summary-info'>
                            <div className='time'>
                                <img src={'/time.png'} alt='time'></img>
                                <p>{this.props.data.time} min</p>
                            </div>
                            <div className='oz'>
                                <img src={'/scales.png'} alt='oz'></img>
                                <p>{this.props.data.oz} oz</p>
                            </div>
                            <div className='kcal'>
                                <img src={'/kcal.png'} alt='kcal'></img>
                                <p>{this.props.data.kcal} kcal</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }

}

export default AppMain;