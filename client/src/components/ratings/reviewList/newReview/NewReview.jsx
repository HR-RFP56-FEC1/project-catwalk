import React from 'react';
import axios from 'axios';

import characteristics from './characteristics.js';
import CharacterRadio from './CharacterRadio.jsx';

var NewReview = (props) => {
  return (
    <form className="new-review-modal">
      <h1>Write your review</h1>
      <h2>About product {props.product}</h2>

      <div className="new-review-entry">
        <div className="new-review-overall-rating">
          <div className="required-filed" id="new-review-field-name">Overall Rating:</div>
          <div className="empty-stars">
            <span id="star-1">&#9734;</span>
            <span id="star-2">&#9734;</span>
            <span id="star-3">&#9734;</span>
            <span id="star-4">&#9734;</span>
            <span id="star-5">&#9734;</span>
          </div>
        </div>

        <div className="new-review-whether-recommend">
          <div className="required-field" id="new-review-field-name">Do you recommend this product? </div>
          <input type="radio" id="whether-recommend-yes" name="whether-recommend" value="Yes"/>
          <label htmlFor="whether-recommend-yes">Yes &nbsp;</label>
          <input type="radio" id="whether-recommend-no" name="whether-recommend" value="No"/>
          <label htmlFor="whether-recommend-no">No</label>
        </div>

        <div className="new-review-characteristics">
          <div className="required-filed" id="new-review-field-name">Characteristics:</div>
          <div className="characteristic-breakdown">
            <CharacterRadio character="size" />
            <CharacterRadio character="length" />
            <CharacterRadio character="quality" />
          </div>
        </div>

        <div className="new-review-summary">
          <div id="new-review-field-name">
            Add Summary:
          </div>
          <div className="add-review-summary">
            <input type="text" name="review-summary" id="review-summary"
              placeholder="Example: Best purchase ever!" style={{ fontWeight: "normal" }}/>
          </div>
        </div>

        <div className="new-review-body">
          <div className="required-field" id="new-review-field-name">
            Add Written Review:
          </div>
          <div className="add-review-body">
            <textarea placeholder="Why did you like the product or not?" />
            <div id="review-body-character-counter">Mininum required characters left: XX</div>
          </div>
        </div>

        <div className="new-review-add-photo">
          <button>Add Photo</button>
        </div>

        <div className="new-review-nickname">
          <div className="required-field" id="new-review-field-name">
            Your Nickname:
          </div>
          <div className="new-review-nickname">
            <input type="text" name="review-nickname" id="review-nickname"
              placeholder="Example: jackson11!" style={{ fontWeight: "normal" }}/>
          </div>
          <div>
            For privacy reasons, do not use your full name or email address
          </div>
        </div>

        <div className="new-review-email">
          <div className="required-field" id="new-review-field-name">
            Your Email:
          </div>
          <div className="new-review-email">
            <input type="text" name="review-email" id="review-email"
              placeholder="Example: jackson11@email.com" style={{ fontWeight: "normal" }}/>
          </div>
          <div>
            For authentication reasons, you will not be emailed
          </div>
        </div>

        <div className="new-review-submit">
          <button id="submit-new-review">Submit</button>
        </div>

      </div>
    </form>
  )
}

export default NewReview;