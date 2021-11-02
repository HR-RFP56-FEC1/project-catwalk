import React from 'react';

import CharacterRating from './CharacterRating.jsx';

var ProductBreakdown = (props) => {
  let breakdown = props.breakdown;
  // console.log('breakdown', breakdown['Quality'].value);
  let characters = Object.keys(breakdown);
  // console.log('characters:', characters);
  return (
    <div className="product-breakdown">
      {characters.map(char => (
        <CharacterRating character={char} rating={breakdown[char].value} key={char}/>
      ))}
    </div>
  );

};

export default ProductBreakdown;