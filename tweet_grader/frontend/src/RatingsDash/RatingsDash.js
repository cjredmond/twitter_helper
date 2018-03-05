import React from 'react';
import './RatingsDash.css'

const RatingsDash = (props) => {
  return (<div className="ratingsDash">
            <div className='row'>
              <div className='col-md-6'>
                <span>Polarity</span>
                <div className='rating-card'>
                  <span>{props.polarity}</span>
                </div>
              </div>
              <div className='col-md-6'>
                <span>Subjectivity</span>
                <div className='subj-card'>
                  <span>{props.subject}</span>
                </div>
              </div>
            </div>

         </div>)
};

export default RatingsDash;
