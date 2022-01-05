# HR-RFP56 Alliaceae FEC

![javascript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Webpack](https://img.shields.io/badge/-webpack-20232A?style=for-the-badge&logo=webpack&logoColor=blueviolet)
![Babel](https://img.shields.io/badge/-Babel-20232A?style=for-the-badge&logo=babel&logoColor=yellow)


![Alliaceae](extra/Overview-Demo.gif)

# About
We are a client-facing retail web-portal that allows customers to browse items in our retail catalog. The team designed the functions and user interface based on requirements outlined by the leaderships, and our understanding of user needs. The main components of the portal includes Product Overview, Questions and Answers, and Ratings and Reviews.


# Product Overview
- Development lead: Michael Fornwalt


The Overview module is the primary area to display product appearance and detail. It features an image carousel with thumbnail navigation, forward and backward navigation, as well as an expanded view. Expanded view offers a click-to-magnify feature which zooms into the image 250% and tracks the mouse cursor for viewing. Overview includes a product detail section that dynamically renders title, category, price, sale price, and other information relevant to the product. Size selection and Quantity selection are dynamically rendered from the API, allowing only available products to be displayed, selected and added to cart.


# Questions and Answers
- Development lead: Brett Tokairin

The Questions and Answers module provides a place for users to ask and provide additional information about the product. Both are sorted by their usefulness score, which can be voted on. Users can add a question about a specific product. Users can also add an answer to a specific question. By default a limited number of questions and answers are displayed. The user can click to display more questions or answers.

![ratings-and-reviews](http://g.recordit.co/WbFV1MVHqQ.gif)

# Rating and Reviews
- Development lead: Yina Xing

The Ratings & Reviews module will allow viewing and submission of reviews for the product selected.  The functionality contained within this module can be divided into several pieces:
1. Rating Breakdown
2. Product Breakdown
3. Reviews List
4. Filter, Sort and Search
5. Write A New Review

### Rating Breakdown
The average rating for the product will be displayed, and the rating distriibution will be broken down with the total number of reviews and percent of reviews submitted with that particular rating.

### Product Breakdown
Reviews will provide ability to give feedback on specific characteristics of the product. The average feedback received will be displayed for all characteristics which apply to the product.

### Reviews List
The list contains all the reviews submitted for the product. Each individual review will display the following information:
- Star rating
- Date and name of the reviewer
- Review summary and body, including pictures associated with the review
- Whether user recommend the product
- Seller's response to review if there is any
- Other users' feedback on the review

### Filter, Sort and Search
The review list can be filtered to specific ratings by clicking the rating breakdown; Sorted by relavance, time, and helpfulness; Searched by key words in the review summary or body.

### Write A New Review
The ADD A REVIEW button allows user to write new reviews, and will check for all required fields before submission

# How to Start This App
1. Clone the repository
```bash
git clone https://github.com/HR-RFP56-FEC1/project-catwalk.git
```
2. Navigate to the root directory
```bash
cd project-catwalk
```
3. Make a copy of the file `config.example.js` and rename to `config.js`

4. Assign the `API_KEY` variable to your GitHub Access Token.

5. Install dependencies
```bash
npm install
```

6. Build webpack bundle and start the app
```bash
npm build
```
```bash
npm run react-dev
```

7. Open a new terminal window and start the server
```bash
node server/index.js
```

8. Open browser and navigate to [localhost:3000](http://localhost:3000)