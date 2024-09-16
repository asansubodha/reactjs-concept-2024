import { Component } from "react";


class ClassBasedComponent extends Component{

    //state
    state = {
        showText : false,
        changeColor : false,
        count : 0,
        changeCountstyle : false
    };
    handleClick = ()=>{
        console.log("button Clicked");
        const {showText, changeColor} = this.state;
        this.setState({
            showText : !showText,
            changeColor : !changeColor
        });
    };
    //componenetDidMount
    //componentDidUpdate
    //componemtWillUnmount

    componentDidMount(){
        console.log("this is called first time page load");
        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor,
        });
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps,prevState);

        if(prevState && prevState.count !== this.state.count && this.state.count ===10){
            this.setState({
                ...this.state,
                changeCountstyle : !this.state.changeCountstyle,
            });
        }
        
    }

    componentWillUnmount(){
        console.log('component is getting unmounted');
        
    }

    handleCount = ()=> {
        this.setState({
            ...this.state,
            count : this.state.count + 1
        });
    }
    render(){
        console.log(this.state.showText);
        const {showText, changeColor, count, changeCountstyle} = this.state;
        console.log(changeCountstyle);
        

        return <div>
            {
                showText ? (<h3 style={{color : changeColor ? 'red' : 'black'}}>
                    Class based Component</h3>) : null
            }
            <button onClick={this.handleClick}>Toggle Text</button>
            <button onClick={this.handleCount}>Increase Count</button>
            <h3 style={{color : changeCountstyle ? 'blue': 'black', fontSize : changeCountstyle ? '30px' : '12px '}}>
                Count is {count}</h3>
        </div>
    }
}
export default ClassBasedComponent