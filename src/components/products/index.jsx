import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import './style.css';

const initialState = false;

function ProductList({name, city, listOfProducts}){
   
    const [flag, setFlag] = useState(initialState);
    const [count, setCount]= useState(0);
    const [changeStyle, setChangeStyle]= useState(false);


    // function renderTextBlock(getFlag){
    //     return getFlag ? <h4>
    //     Name is {name} he is belongs to this city {city}
    //     </h4> : 
    //     <h4>Hello World</h4>
    // }

    // let renderTextBlock = flag ? 
    // (<h4>
    //     Name is {name} he is belongs to this city {city}
    // </h4> ): 
    // (<h4>Hello World</h4>);

    // let renderTextBlock = null;
    // if(flag){
    //     renderTextBlock = <h4>
    //         Name is {name} he is belongs to this city {city}
    //         </h4>
    // }else{
    //     renderTextBlock = <h4>Hello World</h4>
    // }
   
    function handleToggleText(){
        setFlag(!flag);
    }
    function handlIncreaseCount(){
        setCount(count + 1);
    }
    useEffect(()=>{
        setFlag(!flag);
        console.log("Run only once page load");

        return () => {
            console.log("component is Unmounted -> some side effect here also");
            
        };
        
    },[]);//this will only run on page load once 
    useEffect(()=>{
        if(count === 10) setChangeStyle(true);
        console.log(changeStyle); 
        
    },[count]);
   
    return (
        <div>
            <h3 className="title">ECommerce Project</h3>
            {/* <ProductItem/> */}
            {/* {renderTextBlock(flag)} */} 
            {/* {renderTextBlock} */}
            <button onClick={handleToggleText}>Toggle Text</button>

            {
                flag ? (<h4>
                    Name is {name} he is belongs to this city {city}
                    </h4>):
                    ( <h4>Hello World</h4>)
            }

            <div>
                <button style={{backgroundColor : changeStyle ? 'black': 'white', color : changeStyle ? 'white' : 'black'}} onClick={handlIncreaseCount}>
                    Increase Count</button>
                <p>Count is {count}</p>
            </div>
            
            <ul> 
                {listOfProducts.map((item, index) => (
                    <ProductItem singleProductItem={item} key={index} />
                ))}
            </ul>
        </div>
    )
}

export default ProductList