import React from 'react';

import characteristics from './characteristics.js';

var CharacterRadio = (props) => {

  const selectRating = (rating) => {
    props.charRating(props.character, rating);
  }

  return (
    <div className="character-radio-entry">
      <div className="character-radio-name">
        {props.character}:
      </div>
      <div className="character-radio-btn">
        <label className={"character-radio"+props.character}>
          <input type="radio" name={"character-radio-input"+props.character} onClick={() => {selectRating(1)}}/>
            {characteristics[props.character].score['1']}
        </label>
        <label className={"character-radio"+props.character}>
          <input type="radio" name={"character-radio-input"+props.character} onClick={() => {selectRating(2)}}/>
            {characteristics[props.character].score['2']}
        </label>
        <label className={"character-radio"+props.character}>
          <input type="radio" name={"character-radio-input"+props.character} onClick={() => {selectRating(3)}}/>
            {characteristics[props.character].score['3']}
        </label>
        <label className={"character-radio"+props.character}>
          <input type="radio" name={"character-radio-input"+props.character} onClick={() => {selectRating(4)}}/>
            {characteristics[props.character].score['4']}
        </label>
        <label className={"character-radio"+props.character}>
          <input type="radio" name={"character-radio-input"+props.character} onClick={() => {selectRating(5)}}/>
            {characteristics[props.character].score['5']}
        </label>
      </div>
    </div>
  )
}

export default CharacterRadio;