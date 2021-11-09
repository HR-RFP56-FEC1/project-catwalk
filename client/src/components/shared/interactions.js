import axios from 'axios';

const interactions = function(element, widget) {
  let obj = {};
  obj.element = element;
  obj.widget = widget;
  obj.time = Date();
  console.log(obj);
  var urlString = '/api/interactions';
  axios({
    method: 'post',
    url: urlString,
    responseType: 'json',
    data: JSON.stringify(obj),
    headers: {'Content-Type': 'application/json'},
  })
  .then((success) => {
    // console.log(success);
  })
  .catch((error) => {console.log(error)});
}

export default interactions;

