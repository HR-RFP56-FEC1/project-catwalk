import React from 'react';

import characteristics from './characteristics.js';

const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var CharacterRadio = (props) => {
  return (
    <div className="character-radio-entry">
      <div className="character-radio-name">
        {capitalizeFirst(props.character)}:
      </div>
      <div className="character-radio-btn">
        <label className="character-radio-label">
          <input type="radio" name="character-radio-input" />
            {characteristics[props.character].score['1']}
        </label>
        <label className="character-radio-label">
          <input type="radio" name="character-radio-input" />
            {characteristics[props.character].score['2']}
        </label>
        <label className="character-radio-label">
          <input type="radio" name="character-radio-input" />
            {characteristics[props.character].score['3']}
        </label>
        <label className="character-radio-label">
          <input type="radio" name="character-radio-input" />
            {characteristics[props.character].score['4']}
        </label>
        <label className="character-radio-label">
          <input type="radio" name="character-radio-input" />
            {characteristics[props.character].score['5']}
        </label>
      </div>
    </div>
  )
}

export default CharacterRadio;