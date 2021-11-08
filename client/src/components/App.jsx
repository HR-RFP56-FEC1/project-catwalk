import React, {useState, useEffect} from 'react';
import Overview from './overview/Overview.jsx';
import Ratings from './ratings/Ratings.jsx';
import QnA from './questions/QnA.jsx';
import Related from './related/Related.jsx'


//pass `mainProduct` as `id` to your component
//then, delete this id to test functionality
let id = 40344

var App = () => {
  const [mainProduct, setMainProduct] = useState(40344)

  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [mainProduct])

  const handleProductChange = (idClicked) => {
    setMainProduct(idClicked)
  }

  return (
    <div>
      <Overview id={mainProduct}/>
      <Related id={mainProduct} handleProductChange={handleProductChange}/>
      <Ratings />
      <QnA />
    </div>
  )
}

export default App;