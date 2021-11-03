import React from 'react';

var SortReview = (props) => {

  const changeSort = (e) => {
    console.log(e.target.value);
    if (e.target.value === 'time') {
      props.changeSort('dateDiff');
    } else if (e.target.value === 'helpful') {
      props.changeSort('helpful')
    }
  }

  return (
    <div className="sort-review">
      <div>
       {props.reviews.length} reviews, sorted by
      </div>
      <div>
        <label htmlFor="sort-review"></label>
        <select name="sort-review-by" id="sort-review-by"
          onChange={changeSort}
        >
          <option value="relevance">most relevant &nbsp;</option>
          <option value="time">most recent &nbsp;</option>
          <option value="helpful">most helpful &nbsp;</option>
        </select>
      </div>
    </div>
  );
};

export default SortReview;