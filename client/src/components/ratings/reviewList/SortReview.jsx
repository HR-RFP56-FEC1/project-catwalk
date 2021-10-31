import React from 'react';

var SortReview = (props) => {

  return (
    <div className="sort-review">
      <div>
       {props.reviews.count} reviews, sorted by
      </div>
      <div>
        <label htmlFor="sort-review"></label>
        <select name="sort-review-by" id="sort-review-by">
          <option value="relevance">most relevant &nbsp;</option>
          <option value="time">most recent &nbsp;</option>
          <option value="helpful">most helpful &nbsp;</option>
        </select>
      </div>
    </div>
  );
};

export default SortReview;