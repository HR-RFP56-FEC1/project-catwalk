# HR-RFP56 Alliacea FEC

## auth.js
Server gets token from auth.js file
Template is in auth copy.js
For server usage please use module.exports = key instead of export default
The server needs module.exports for node syntax
Don't forget to put your token in 'quotes'

## Server api usage
- instead of sending to the api url, send api requests to server
- direct your get and post requests to '/api/' + url of api end point
- server will remove the '/api/' and add the actual api url
- server will add token from auth.js file
- server will attach body of your req to the api request
- results will be sent back in body of response


### How to use Server
- [x] Run 'node server/index.js'

