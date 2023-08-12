import './App.css';
import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import AppOptions from '../app-options/app-options';
import { Component } from 'react';


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      ingredients : [
        {
          id:0,
          name: 'Cutlet',
          img: '/cutlet.png',
          time: 1,
          oz: 1,
          kcal: 250,
          price: 2.25,
          amount:0
        },
        {
          id:1,
          name: 'Mayo (10g)',
          img: '/mayo.png',
          time: 0.25,
          oz: 1,
          kcal: 40,
          price:0.35,
          amount:0
        },
        {
          id:2,
          name: 'Onion',
          img: '/onion.png',
          time: 0.25,
          oz: 1,
          kcal: 10,
          price:0.2,
          amount:0
        },
        {
          id:3,
          name: 'Tomato',
          img: '/tomato.png',
          time: 0.25,
          oz: 1,
          kcal: 15,
          price:0.2,
          amount:0
        },
        {
          id:4,
          name: 'Cucumber',
          img: '/cucumber.png',
          time: 0.25,
          oz: 1,
          kcal: 10,
          price:0.2,
          amount:0
        },
        {
          id:5,
          name: 'Cheese',
          img: '/cheese.png',
          time: 0.25,
          oz: 1,
          kcal: 25,
          price: 0.5,
          amount:0
        },
        {
          id:6,
          name: 'Salad',
          img: '/salad.png',
          time: 0.25,
          oz: 1,
          kcal: 10,
          price:0.2,
          amount:0
        },
        {
          id:7,
          name: 'Bun',
          img: '/bun.png',
          time: 0.5,
          oz: 1,
          kcal: 70,
          price:0.75,
          amount:0
        }

      ],
      stats:{
        time:0,
        oz:0,
        kcal:0,
        price:0
      }
    }

  }

  setAmountPlus = (id) =>{
    this.setState(({ingredients})=>({
      ingredients: ingredients.map(item =>{
        if(item.id===id){
          const {stats} = this.state;

          stats.time = this.state.stats.time + item.time;
          stats.oz = this.state.stats.oz + item.oz;
          stats.kcal = this.state.stats.kcal + item.kcal;
          stats.price = this.state.stats.price + item.price;

          this.setState(({stats})=>({
            stats:stats
          }));


          return {...item, amount:item.amount+=1}
        }
          return item
        })
      })
    )

  }


  setAmountMinus = (id) =>{
    this.setState(({ingredients})=>({
      ingredients: ingredients.map(item =>{
        if(item.id===id){
          if(item.amount==0){
            return item;
          }else{
            const {stats} = this.state;

            stats.time = this.state.stats.time - item.time;
            stats.oz = this.state.stats.oz - item.oz;
            stats.kcal = this.state.stats.kcal - item.kcal;
            stats.price = this.state.stats.price - item.price;
  
            this.setState(({stats})=>({
              stats:stats
            }));

            return {...item, amount:item.amount-=1}
          }
        }
          return item
        })
      })
    )
  }

  render(){
    return(
      <div className="App">
        <AppHeader />

        <AppMain data={this.state.stats}/>

        <AppOptions data={this.state.ingredients} setAmountPlus={this.setAmountPlus} setAmountMinus={this.setAmountMinus}/>
      </div>
    )
  }
}

export default App;
