import React from 'react';
import interactions from '../../shared/interactions.js';

var SearchReview = (props) => {

  const onSearch = (e) => {
    props.searchReview(e.target.value.toLowerCase());
  }

  return (
    <div className="search-review">
      <input id='search-review-input' type="text" onChange={onSearch} placeholder="Search for reviews by keywords in summary or body..."/>
    </div>
  )
}

export default SearchReview;
