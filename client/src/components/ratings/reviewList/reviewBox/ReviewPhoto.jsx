import React, {useState} from 'react';

import interactions from '../../../shared/interactions.js';

var ReviewPhoto = (props) => {
  const [photoModal, showModal] = useState(false);
  const toggleReviewPhotoModal = (e) => {
    if (!photoModal) {
      interactions("review-photo", "ratings-and-reviews");
    }
    showModal(!photoModal)
  }
  return (
    <div>
      <img className="review-photo"
        src={props.photo.url}
        onClick={toggleReviewPhotoModal}
      />
      {
        photoModal &&
        <div className="modalBackground">
          <b id="close-review-photo-modal"
          onClick={toggleReviewPhotoModal}>&#91;&times;&#93;</b>
          <img id="review-photo-in-modal"
            src={props.photo.url}
          />
        </div>
      }
      <div>
      </div>
    </div>
  )
};

export default ReviewPhoto;