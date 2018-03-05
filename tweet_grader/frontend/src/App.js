import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TweetBox from './TweetBox/TweetBox.js'
import RatingsDash from './RatingsDash/RatingsDash.js'

class App extends Component {

  state = {
    tweet: '',
    rating: 0,
    backwards: '',
    'subjectivity': 0
  };

  hitApi = () => {
    console.log('Hit');
  };

  changeTweetHandler = (event) => {
    this.setState({
      tweet: [event.target.value],
    })
    var x = event.target.value;
    var self = this;
    axios.get('test/?tweet=' + x)
      .then(function (response) {
        // console.log(response['data']['backwards']);
        var back = response['data']['backwards'];
        var rate = response['data']['rating'];
        var subj = response['data']['subjectivity']
        self.setState({backwards: back,
                       rating: rate,
                       subjectivity: subj})
      })


    // console.log('changing');
    // console.log(this.state['tweet']);
  }

  render() {
    return (
      <div className="App">



        <div className='tweetBoxWrapper'>
          <div className='inputWrapper'>
            <TweetBox
            changed={this.changeTweetHandler}/>
          </div>
        </div>

        <RatingsDash polarity={this.state.rating} subject={this.state.subjectivity} />




      </div>
    );
  }
}

export default App;
