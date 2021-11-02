import React from 'react';

var CharacterRating = (props) => {
  if (props.character === 'Size') {
    return (
      <div className="character-rating">
        <span className="character-name">{props.character}</span>
        <div className="char-slider">
          <input id="char-slider" type="range" min="1" max="5" value={props.rating}
          readOnly="readonly" data-slider-handle="triangle"/>
        </div>
        <div className="char-slider-desc">
          <span>Too Small</span>
          <span>Perfect</span>
          <span>Too Big</span>
        </div>
      </div>
    );
  }

  if (props.character === 'Quality') {
    return (
      <div className="character-rating">
        <span className="character-name">{props.character}</span>
        <div className="char-slider">
          <input id="char-slider" type="range" min="1" max="5" value={props.rating} readOnly="readonly"/>
        </div>
        <div className="char-slider-desc">
          <span>Poor</span>
          <span>Perfect</span>
        </div>
      </div>
    );
  }

  if (props.character === 'Width') {
    return (
      <div className="character-rating">
        <span className="character-name">{props.character}</span>
        <div className="char-slider">
          <input id="char-slider" type="range" min="1" max="5" value={props.rating} readOnly="readonly" />
        </div>
        <div className="char-slider-desc">
          <span>Too Narrow</span>
          <span>Perfect</span>
          <span>Too Wide</span>
        </div>
      </div>
    )
  }

  if (props.character === 'Comfort') {
    return (
      <div className="character-rating">
        <span className="character-name">{props.character}</span>
        <div className="char-slider">
          <input id="char-slider" type="range" min="1" max="5" value={props.rating} readOnly="readonly" />
        </div>
        <div className="char-slider-desc">
          <span>Uncomfortable</span>
          <span>OK</span>
          <span>Perfect</span>
        </div>
      </div>
    )
  }

  if (props.character === 'Length') {
    return (
      <div className="character-rating">
        <span className="character-name">{props.character}</span>
        <div className="char-slider">
          <input id="char-slider" type="range" min="1" max="5" value={props.rating} readOnly="readonly" />
        </div>
        <div className="char-slider-desc">
          <span>Runs Short</span>
          <span>Perfect</span>
          <span>Runs Long</span>
        </div>
      </div>
    )
  }

  if (props.character === 'Fit') {
    return (
      <div className="character-rating">
        <span className="character-name">{props.character}</span>
        <div className="char-slider">
          <input id="char-slider" type="range" min="1" max="5" value={props.rating} readOnly="readonly" />
        </div>
        <div className="char-slider-desc">
          <span>Runs Tight</span>
          <span>Perfect</span>
          <span>Runs Loose</span>
        </div>
      </div>
    )
  }

};

export default CharacterRating;