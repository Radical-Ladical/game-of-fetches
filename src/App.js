import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import components from './components/axios';


export default class App extends Component {
  constructo(props) {
    super(props);
    this.state= {
      isLoaded:false,
      data:[]
    }
  }
  componentDidMount() {
    let one ="http://anapioficeandfire.com/api/characters/16";

    const requestOne = axios.get(one);

    axios.all([requestOne]).then(axios.spread((...responses) =>{
      console.log(responses)
      const responseOne = responses[0].data.born

    })).catch(errors => {
      console.log ('Error fetching data')
    })
    
  }
  render() {
    return(
      <div>
        <h2>Where was Margaery Tyrell born?</h2>
        <h4>{this.state.data[0]}</h4>
      </div>
    )
  }
}




export default App;
