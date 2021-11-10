import React, {useState, useEffect} from 'react';
import axios from 'axios';

import characteristics from './characteristics.js';
import CharacterRadio from './CharacterRadio.jsx';
import AddReviewPhotoBtn from './AddPhoto.jsx';

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
  const[recommend, setRecommend] = useState(null);
  const[characteristics, setCharacteristics] = useState({});
  const[bodyCount, setBodyCount] = useState(0);
  const[photoUrl, setPhotoUrl] = useState([null, null, null, null, null]);
  const[countPhoto, setCountPhoto] = useState(0);
  const[summary, setSummary] = useState(null);
  const[body, setBody] = useState(null);

  const[nickname, setNickname] = useState(null);
  const[email, setEmail] = useState(null);

  const clickOverallRating = (e) => {
    let starID = e.target.id.split('-')[1];
    setOverallRating(starID);
  }

  const handleRecommend = (e) => {
    if (e.target.value === 'Yes') {
      setRecommend(true);
    }
    if (e.target.value === 'No') {
      setRecommend(false);
    }
  }

  const charRating = (char, rating) => {
    let obj = {...characteristics};
    obj[props.characteristics[char].id] = rating;
    setCharacteristics(obj);
  }

  const typeSummary = (e) => {
    setSummary(e.target.value);
  }

  const typeReview = (e) => {
    setBody(e.target.value);
    let charCount = e.target.value.length;
    setBodyCount(charCount);
  }

  // functions for the review photo part
  const addUrl = (url, photoId) => {
    let newUrls = [...photoUrl];
    newUrls[parseInt(photoId)] = url;
    setPhotoUrl(newUrls);
  }

  useEffect(() => {
    let count = 0;
    for (var i = 0; i < 4; i++) {
      if (photoUrl[i] === null && photoUrl[i+1] !== null) {
        var newUrls = [...photoUrl];
        newUrls[i] = newUrls[i+1];
        newUrls[i+1] = null;
        setPhotoUrl(newUrls);
      }
    }
    for (var i = 0; i < 5; i++) {
      if (photoUrl[i] === null) {
        setCountPhoto(i);
        return;
      }
    }
  }, [photoUrl])

  // function for nickname
  const typeNickname = (e) => {
    setNickname(e.target.value);
  }

  const typeEmail = (e) => {
    setEmail(e.target.value);
  }

  const checkReview = (e) => {
    let missing = [];
    let valid = true;
    if (overallRating === 0) {
      missing.push('overall rating');
      valid = false;
    }

    if (recommend === null) {
      missing.push('recommendation');
      valid = false;
    }

    for (var char in props.characteristics) {
      if (!characteristics[props.characteristics[char].id]) {
        missing.push(`characteristics: ${char}`);
        valid = false;
      }
    }


    if (bodyCount < 50) {
      missing.push('review body');
      valid = false;
    }

    if (nickname === null || nickname.trim().length === 0) {
      missing.push('nickname');
      valid = false;
    }

    if (nickname === null || email.trim().length === 0){
      missing.push('email');
      valid = false;
    } else {
      const reg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (!reg.test(email)) {
        missing.push('email');
        valid = false;
      }
    }

    if (valid) {
      return true;
    } else {
      alert(`Please fill in the following fields correctly: ${missing.join(', ')}!`);
      return false;
    }
  }

  const postHandler = () => {
    let obj = {};
    obj.product_id = props.productId;
    obj.rating = parseInt(overallRating);
    obj.summary = summary;
    obj.body = body;
    obj.recommend = recommend;
    obj.name = nickname;
    obj.email = email;
    obj.photos = photoUrl.slice(0, countPhoto);
    obj.characteristics = characteristics;
    console.log(obj);

    var urlString = '/api/reviews';

    return axios({
      method: 'post',
      url: urlString,
      responseType: 'json',
      data: JSON.stringify(obj),
      headers: {'Content-Type': 'application/json'}
    });
  }

  const submitReview = (e) => {
    let valid = checkReview();
    if (valid) {
      postHandler();
    }
  }

  return (
    <div id="new-review-form">
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
              overallRating == 5 &&
              <div><span>{ratingMeaning[overallRating]}&nbsp;&#128525;</span></div>
            }
            {
              overallRating == 4 &&
              <div><span>{ratingMeaning[overallRating]}&nbsp;&#128522;</span></div>
            }
            {
              overallRating == 3 &&
              <div><span>{ratingMeaning[overallRating]}&nbsp;&#128578;</span></div>
            }
            {
              overallRating == 2 &&
              <div><span>{ratingMeaning[overallRating]}&nbsp;&#128543;</span></div>
            }
            {
              overallRating == 1 &&
              <div><span>{ratingMeaning[overallRating]}&nbsp;&#128534;</span></div>
            }
          </div>
        </div>

        <div id="new-review-whether-recommend">
          <div className="required-field" id="new-review-whether-recommend-field-name">Do you recommend this product? </div>
          <input type="radio" id="whether-recommend-yes" name="whether-recommend" value="Yes"
            onClick={handleRecommend}/>
          <label htmlFor="whether-recommend-yes">Yes &nbsp;</label>
          <input type="radio" id="whether-recommend-no" name="whether-recommend" value="No"
            onClick={handleRecommend}/>
          <label htmlFor="whether-recommend-no">No</label>
        </div>

        <div id="new-review-characteristics">
          <div className="required-field" id="new-review-characteristics-field-name">Characteristics:</div>
          <div id="characteristic-breakdown">
            {Object.keys(props.characteristics).map(char => (
              <CharacterRadio character={char} key={char} charRating={charRating.bind(this)}/>
            ))}
          </div>
        </div>

        <div id="new-review-summary">
          <div id="new-review-summary-field-name" className="optional-field">
            Add Summary:
          </div>
          <div id="add-review-summary">
            <input type="text" name="review-summary"
              placeholder="Example: Best purchase ever!" style={{ fontWeight: "normal" }}
              onChange={typeSummary}/>
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
          <div id="new-review-add-photo-field-name" className="optional-field">
            Add Photo:
          </div>
          <div id="review-photos-row">
            <AddReviewPhotoBtn url={photoUrl[0]} photoId="0" onChange={addUrl.bind(this)}/>
            {countPhoto >= 1 && <AddReviewPhotoBtn url={photoUrl[1]} photoId="1" onChange={addUrl.bind(this)}/>}
            {countPhoto >=2 && <AddReviewPhotoBtn url={photoUrl[2]} photoId="2" onChange={addUrl.bind(this)}/>}
            {countPhoto >=3 && <AddReviewPhotoBtn url={photoUrl[3]} photoId="3" onChange={addUrl.bind(this)}/>}
            {countPhoto >= 4 && <AddReviewPhotoBtn url={photoUrl[4]} photoId="4" onChange={addUrl.bind(this)}/>}
          </div>
        </div>

        <div id="new-review-nickname">
          <div className="required-field" id="new-review-nickname-field-name">
            Your Nickname:
          </div>
          <div id="add-review-nickname">
            <input type="text" name="review-nickname"
              placeholder="Example: jackson11!" style={{ fontWeight: "normal" }}
              onChange={typeNickname}/>
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
              placeholder="Example: jackson11@email.com" style={{ fontWeight: "normal" }}
              onChange={typeEmail}/>
          </div>
          <div>
            For authentication reasons, you will not be emailed
          </div>
        </div>

        <div id="new-review-submit">
          <button id="submit-new-review"
            onClick={submitReview}>Submit</button>
          <button id="close-new-review"
            onClick={props.close}>Close</button>
        </div>

      </div>
    </div>
  )
}

export default NewReview;