import React, {useState, useEffect} from 'react';
import Overview from './overview/Overview.jsx';
import Ratings from './ratings/Ratings.jsx';
import QnA from './questions/QnA.jsx';
import Related from './related/Related.jsx'
import axios from 'axios';
import interactions from './shared/interactions.js';

//pass `mainProduct` as `id` to your component
//then, delete this id to test functionality
let id = 40350

var App = () => {
  const [mainProduct, setMainProduct] = useState(40363)
  const [productInfo, setProductInfo] = useState(undefined)
  const [reviewsMeta, setReviewsMeta] = useState(undefined)

  const getProductInfo = function() {
    var urlString = `/api/products/${mainProduct}` ;
    axios({
      method: 'get',
      url: urlString,
      responseType: 'json'
    }).then((results) => {
      setProductInfo(results.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const getReviewsMeta = function() {
    var urlString = `/api/reviews/meta?product_id=${mainProduct}&count=100` ;
    return axios({
      method: 'get',
      url: urlString,
      responseType: 'json'
    }).then((results) => {
      setReviewsMeta(results.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(()=> {
    getProductInfo();
    getReviewsMeta();
  }, [])


  useEffect(()=> {
    window.scrollTo(0, 0);
    getProductInfo();
    getReviewsMeta();
  }, [mainProduct])

  const handleProductChange = (idClicked) => {
    setMainProduct(idClicked)
    interactions("related-product", "overview");
  }

  return (
    <div id='app-container'>
      {productInfo ? <Overview id={mainProduct} productInfo={productInfo} reviews={reviewsMeta}/>: false}
      {productInfo ? <Related id={mainProduct} handleProductChange={handleProductChange}/>: false}
      {<QnA id={mainProduct} productInfo={productInfo}/>}
      {reviewsMeta ? <Ratings id={mainProduct} productInfo={productInfo} overallRating={reviewsMeta}/>: false}
    </div>
  )
}

export default App;