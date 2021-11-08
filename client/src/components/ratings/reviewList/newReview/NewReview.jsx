import React, {useState, useEffect} from 'react';
import axios from 'axios';

import characteristics from './characteristics.js';
import CharacterRadio from './CharacterRadio.jsx';

const RatingStars = (props) => {
  let filled = props.rating;
  let empty = 5 - props.rating;
  if (props.starID <= filled) {
    return (
      <span id={"star-"+props.starID}
        onClick={props.click}
        style={ {cursor:"pointer"} }>
        &#9733;
      </span>
    )
  } else {
    return (
      <span id={"star-"+props.starID}
        onClick={props.click}
        style={ {cursor:"pointer"} }>
        &#9734;
      </span>
    )
  }
}

const ratingMeaning = {
  1: 'Poor',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Great'
}

var NewReview = (props) => {
  const[overallRating, setOverallRating] = useState(0);
  const[bodyCount, setBodyCount] = useState(0);

  const clickOverallRating = (e) => {
    let starID = e.target.id.split('-')[1];
    setOverallRating(starID);
  }

  const typeReview = (e) => {
    let charCount = e.target.value.length;
    setBodyCount(charCount);
  }

  return (
    <form id="new-review-form">
      <h1>Write your review</h1>
      <h2>About product {props.product}</h2>

      <div id="new-review-entry">
        <div id="new-review-overall-rating">
          <div className="required-field" id="new-reviewoverall-rating-field-name">
            Overall Rating:
          </div>
          <div className="rating-stars">
            {
              [1, 2, 3, 4, 5].map(i => {
                return (
                  <RatingStars rating={overallRating}
                  key={i} starID={i} click={clickOverallRating.bind(this)}/>
                )
              })
            }
            {
              overallRating > 0 &&
              <div>
                <span>
                  {ratingMeaning[overallRating]}
                </span>
                <span onClick={() => {setOverallRating(0);}}
                style={ {cursor: "pointer"} }>
                  &#40;clear&#41;
                </span>

              </div>
            }
          </div>
        </div>

        <div id="new-review-whether-recommend">
          <div className="required-field" id="new-review-whether-recommend-field-name">Do you recommend this product? </div>
          <input type="radio" id="whether-recommend-yes" name="whether-recommend" value="Yes"/>
          <label htmlFor="whether-recommend-yes">Yes &nbsp;</label>
          <input type="radio" id="whether-recommend-no" name="whether-recommend" value="No"/>
          <label htmlFor="whether-recommend-no">No</label>
        </div>

        <div id="new-review-characteristics">
          <div className="required-field" id="new-review-characteristics-field-name">Characteristics:</div>
          <div id="characteristic-breakdown">
            <CharacterRadio character="size" />
            <CharacterRadio character="length" />
            <CharacterRadio character="quality" />
          </div>
        </div>

        <div id="new-review-summary">
          <div id="new-review-summary-field-name" className="optional-field">
            Add Summary:
          </div>
          <div id="add-review-summary">
            <input type="text" name="review-summary"
              placeholder="Example: Best purchase ever!" style={{ fontWeight: "normal" }}/>
          </div>
        </div>

        <div id="new-review-body">
          <div className="required-field" id="new-review-body-field-name">
            Add Written Review:
          </div>
          <div id="add-review-body">
            <textarea
              placeholder="Why did you like the product or not?"
              onChange={typeReview}
            />
            {
              bodyCount < 50 &&
              <div id="review-body-character-counter" style={ {color:"#ea9291"} }>
                Mininum required characters left: {50 - bodyCount}
              </div>
            }
            {
              bodyCount >= 50 &&
              <div id="review-body-character-counter">
                Mininum reached
              </div>
            }
          </div>
        </div>

        <div id="new-review-add-photo">
          <button>Add Photo</button>
        </div>

        <div id="new-review-nickname">
          <div className="required-field" id="new-review-nickname-field-name">
            Your Nickname:
          </div>
          <div id="add-review-nickname">
            <input type="text" name="review-nickname"
              placeholder="Example: jackson11!" style={{ fontWeight: "normal" }}/>
          </div>
          <div>
            For privacy reasons, do not use your full name or email address
          </div>
        </div>

        <div id="new-review-email">
          <div className="required-field" id="new-review-email-field-name">
            Your Email:
          </div>
          <div id="add-review-email">
            <input type="text" name="review-email"
              placeholder="Example: jackson11@email.com" style={{ fontWeight: "normal" }}/>
          </div>
          <div>
            For authentication reasons, you will not be emailed
          </div>
        </div>

        <div id="new-review-submit">
          <button id="submit-new-review">Submit</button>
          <button id="close-new-review"
            onClick={props.close}>Close</button>
        </div>

      </div>
    </form>
  )
}

export default NewReview;