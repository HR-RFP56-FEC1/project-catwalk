import axios from 'axios';

// function for cto change request
// logs interactions to elements on page

const interactions = function(element, widget) {

  let obj = {};
  obj.element = element;
  obj.widget = widget;
  obj.time = Date();
  console.log(obj);
  var urlString = '/api/interactions';
  return axios({
    method: 'post',
    url: urlString,
    responseType: 'json',
    data: JSON.stringify(obj),
    headers: {'Content-Type': 'application/json'},
  });
}

export default interactions;

