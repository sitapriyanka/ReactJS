

class IncrementButton1 extends React.Component
{
state={counter:2, sum:0}

 handle = () => {
    this.setState((prevState) => ({sum: prevState.sum + prevState.counter
    }));
  };
render(){return(
<div>
<button onClick={this.handle}>{this.state.counter}</button><br/>
<lable>result is {this.state.sum}</lable>
</div>)};
}




ReactDOM.render(<IncrementButton1/>,mountNode);
