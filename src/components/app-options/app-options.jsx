import './app-options.css';
import AppOptionsItem from '../app-options-item/app-options-item';


function AppOptions({data,setAmountPlus,setAmountMinus}){

    const elements = data.map((el)=>{
        const {id, ...elProps} = el;
        return(
            <AppOptionsItem {...elProps} key={id} setAmountPlus={()=>{setAmountPlus(id)}} setAmountMinus={()=>{setAmountMinus(id)}}/>
        )
    })

    return(
        <div className='options'>
            <div className='container options-container'>
                <div className='wrapper'>
                    {elements}
                </div>
            </div>
        </div>
    )
}


export default AppOptions;