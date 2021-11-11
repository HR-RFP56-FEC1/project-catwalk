import React from 'react';
import characteristics from '../../reviewList/newReview/characteristics.js';

var CharacterRating = (props) => {
  console.log(typeof props.rating);
  let rating = props.rating;
  let margin = (100*(rating-1)/4) + '%';
  // let margin = toString(1+(parseInt(props.rating)-1)/4) + '%';
  console.log(typeof margin);
  console.log(margin);
  return (
    <div className="character-rating">
      <span className="character-name">{props.character}</span>
      <div className="char-slider">
        &nbsp;
      </div>
      <div className="char-slider-sep-bar" style={ {marginLeft:"33.33333333%", marginTop:"-5%"} }>
       &nbsp;
      </div>
      <div className="char-slider-sep-bar" style={ {marginLeft:"66.66666666%", marginTop:"-4%"} }>
       &nbsp;
      </div>
      <div id="char-slider-thumb" style={ {marginLeft:margin, marginTop:"-5%"} }>
        &#9660;
      </div>
      <div className="char-slider-desc">
        <span style={ {textAlign:"left"} }>{characteristics[props.character].score['1']}</span>
        <span style={ {textAlign:"center"} }>{characteristics[props.character].score['3']}</span>
        <span style={ {textAlign:"right"} }>{characteristics[props.character].score['5']}</span>
      </div>
    </div>
  );
}



// var CharacterRating = (props) => {
//   if (props.character === 'Size') {
//     return (
//       <div className="character-rating">
//         <span className="character-name">{props.character}</span>
//         <div className="char-slider">
//           <input id="char-slider" type="range" min="1" max="5" value={props.rating}
//           readOnly="readonly" data-slider-handle="triangle"/>
//         </div>
//         <div className="char-slider-desc">
//           <span>Too Small</span>
//           <span>Perfect</span>
//           <span>Too Big</span>
//         </div>
//       </div>
//     );
//   }

//   if (props.character === 'Quality') {
//     return (
//       <div className="character-rating">
//         <span className="character-name">{props.character}</span>
//         <div className="char-slider">
//           <input id="char-slider" type="range" min="1" max="5" value={props.rating} readOnly="readonly"/>
//         </div>
//         <div className="char-slider-desc">
//           <span>Poor</span>
//           <span>Expected</span>
//           <span>Perfect</span>
//         </div>
//       </div>
//     );
//   }

//   if (props.character === 'Width') {
//     return (
//       <div className="character-rating">
//         <span className="character-name">{props.character}</span>
//         <div className="char-slider">
//           <input id="char-slider" type="range" min="1" max="5" value={props.rating} readOnly="readonly" />
//         </div>
//         <div className="char-slider-desc">
//           <span>Too Narrow</span>
//           <span>Perfect</span>
//           <span>Too Wide</span>
//         </div>
//       </div>
//     )
//   }

//   if (props.character === 'Comfort') {
//     return (
//       <div className="character-rating">
//         <span className="character-name">{props.character}</span>
//         <div className="char-slider">
//           <input id="char-slider" type="range" min="1" max="5" value={props.rating} readOnly="readonly" />
//         </div>
//         <div className="char-slider-desc">
//           <span>Uncomfortable</span>
//           <span>OK</span>
//           <span>Perfect</span>
//         </div>
//       </div>
//     )
//   }

//   if (props.character === 'Length') {
//     return (
//       <div className="character-rating">
//         <span className="character-name">{props.character}</span>
//         <div className="char-slider">
//           <input id="char-slider" type="range" min="1" max="5" value={props.rating} readOnly="readonly" />
//         </div>
//         <div className="char-slider-desc">
//           <span>Runs Short</span>
//           <span>Perfect</span>
//           <span>Runs Long</span>
//         </div>
//       </div>
//     )
//   }

//   if (props.character === 'Fit') {
//     return (
//       <div className="character-rating">
//         <span className="character-name">{props.character}</span>
//         <div className="char-slider">
//           <input id="char-slider" type="range" min="1" max="5" value={props.rating} readOnly="readonly" />
//         </div>
//         <div className="char-slider-desc">
//           <span>Runs Tight</span>
//           <span>Perfect</span>
//           <span>Runs Loose</span>
//         </div>
//       </div>
//     )
//   }

// };

export default CharacterRating;