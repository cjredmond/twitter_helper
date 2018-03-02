import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    tweet: 'None',
    rating: 0,
    backwards: 'None'
  };

  hitApi = () => {
    console.log('Hit');
  };

  changeTweetHandler = (event) => {

    var x = event.target.value;
    console.log(x)
    axios.get('test/?tweet=' + x)
      .then(function (response) {
        // console.log(response['data']['backwards']);
        var back = response['data']['backwards'];
      })
      // this.setState({
      //   tweet: [event.target.value],
      //   backwards: back
      // })

    // console.log('changing');
    // console.log(this.state['tweet']);
  }

  render() {
    return (
      <div className="App">
        <p>Enter a tweet</p>
        <form className="" action="" method="get">
          <input type="text" name="tweetreact"
            onChange={this.changeTweetHandler}
            defaultValue=''/>
          <button onClick={this.hitApi}>Hit API</button>
        </form>
        <h2>{this.state.tweet}</h2>
        <h3>{this.state.backwards}</h3>
      </div>
    );
  }
}

export default App;
