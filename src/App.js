import {Component} from "react"
class App extends Component{
  constructor(props){
   super(props);
   this.state={
       Count:0,
   };
  }

  componentWillUnmount(){
    // this.arihnat();
    this.clearInterval();
  }
 countUp=()=>{
    //  this.arihnat();
    this.clearInterval();
    this.interval= setInterval(()=>{
        this.setState({
            Count:this.state.Count +1
        })
    //     this.setState(prevState=>({
    //         Count:parseInt(prevState.Count) +1
    //  }))
     },1000)
 }
 countDown=()=>{
    // this.arihnat();
    this.clearInterval();
    if(this.state.Count > 0){
    this.interval=  setInterval(()=>{
        if(this.state.Count > 0){
        this.setState(prevState=>({
            Count:parseInt(prevState.Count) -1,
     }));
    }else{
        // this.arihnat();
        this.clearInterval();
    }
     },1000)
}
 };
puase=()=>{
    // this.arihnat();
    this.clearInterval();
  
}
reset=()=>{
    // this.arihnat();
    this.clearInterval();
    this.setState(prevState=>({
        Count:0,
    }));
  
   };
   change= e =>{
    // this.arihnat();
    this.clearInterval();
    this.setState({
        Count:parseInt(e.target.value),
    });
}
clearInterval=()=>{
     clearInterval(this.interval)
 }
// arihnat=(()=>{
//  clearInterval( this.interval);
// });



    render(){
       
        return(
     <div>
        <center><label> Type string point : </label>
            <input  onChange={this.change} value={this.state.Count} />
            
            <div className="ari" > <h1>{this.state.Count}</h1></div>
            <br /><br />
            <button className="btn1" onClick={this.countUp}>COUNTUP</button>
            <button className="btn2"  onClick={this.countDown}>COUNTDOWN</button>
            <button className="btn3" onClick={this.puase}>PUASE</button>
            <button className="btn4" onClick={this.reset}>RESET</button>
        </center>
    </div>
        )
    }
}
export default App;
