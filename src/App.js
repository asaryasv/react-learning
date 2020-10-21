import React, {Component} from 'react';


class Ideation extends Component {
  constructor(){
    super();
    this.state ={
      modVotes:0,
      offVotes:0
    }
  }
  increaseVotes =(stateVariable )=>{
    if(stateVariable === 'modVotes')
    this.setState({modVotes: this.state[stateVariable]+1})
  else
    this.setState({offVotes: this.state[stateVariable]+1})
  }

   decreaseVotes =(stateVariable)=>{
    if(this.state[stateVariable]>0) {
    if(stateVariable === 'modVotes')
    this.setState({modVotes: this.state[stateVariable]-1})
  else 
    
    this.setState({offVotes: this.state[stateVariable]-1})
  
  }
}



  render() {
    return <ul>
<li>
<span>ModernOffice</span> - <span>votes: {this.state.modVotes}</span><button onClick={()=> {this.increaseVotes('modVotes')}}>+</button> <button onClick={()=> {this.decreaseVotes('modVotes')}}>-</button>
</li>
<li>
<span>Offsite</span> - <span>votes: {this.state.offVotes}</span><button onClick={()=> {this.increaseVotes('offVotes')}}>+</button> <button onClick={()=> {this.decreaseVotes('offVotes')}}>-</button>
</li>
</ul>
  }
}




export default Ideation;
