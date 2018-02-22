const Result =
(props)=>
{return(
<lable>result is {props.sum}</lable>
)}

class IncrementButton extends React.Component {
   render() {
return(<button onClick={()=>this.props.handleClick()}>+{this.props.incrementValue}</button>);
}};

class App extends React.Component
{
state={sum:0}
 handleClick = (inc) => {
    this.setState((prevState) => ({sum: prevState.sum + inc
    }));
  };
render(){return(
<div>
<IncrementButton incrementValue={1} handleClick={()=>this.handleClick(1)} />
<IncrementButton incrementValue={5} handleClick={()=>this.handleClick(5)} />
<IncrementButton incrementValue={10} handleClick={()=>this.handleClick(10)}/>
<IncrementButton incrementValue={100} handleClick={()=>this.handleClick(100)} />
<br/>
<Result sum={this.state.sum}/>
</div>)};
}

ReactDOM.render(<App/>,mountNode);
