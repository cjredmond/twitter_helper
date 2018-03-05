import React from 'react';

const TweetBox = (props) => {
  const inputStyle = {
    border: '2px solid red'
  };
  return (

  
        <form className="tweetBox" action="" method="get">
          <textarea type="text" id="tweetreact"
            onChange={props.changed}
          defaultValue=''/>

        </form>


  )
};

export default TweetBox;
