## Show Relevant Information for Single Product in Catalogue
-one product is associated to many sizes and styles
  -each result in unique SKU
-product detail page presents items at the product level
  -breakdown by style/size will only be reflected in product detail page

-when browsing to new product, product detail page should update to show info for that product

## Overview

-top-most module
-user can select style and size and add to cart
-image gallery and cart selection will be specific to SKU chosen as opposed to overarching product

## Image Gallery

-photo gallery showing images of the product
-specific to currently selected product STYLE
  -if new style is chosen, gallery updates photos
  -each style has set of images associated
-gallery will allow customers to browse between and zoom in on these photos

-gallery viewable in two states:

  -**default view**
    -single main image
      -overlaid by list of thumbnail images
    -by default, first image in set will be displayed as main image
      -this image will match smaller thumbnail image shown first

    -when switching styles:
      -index of the image currently selected:
        -should be maintained when gallery updates for new style

    -clicking on any thumbnail should:
      -update main image

    -thumbnail corresponding to the image currently selected as main
      -should be highlighted to indicate the current selection

    -clicking on the currently selected thumbnail should do nothing

    -up to 7 thumbnail images will be displayed at a given time in the list

    -if more than 7 imagines are in the set:
      -user should be able to scroll forward/backwards through thumbnails
      -an arrow button pointing either direction should:
        -allow customer to scroll through remaining thumbnails in either direction

    -customers should be able to:
      -change to next or previous image in set using forward and backwards arrow buttons
        -buttons should appear near the right and left edges of image
          -when clicked, main image and thumbnail highlighted should update

    -if nagivating to previous or next image with arrows:
      -if the thumbnail corresponding to the now selected image is no longer visible
        -thumbnail list should scroll similarly so newly selected thumb is visible

    -if user hovers over main image anywhere other than thumbs, or arrows:
      -mouse icon should change to show magnifying glass
      -if user clicks image:
        -image gallery should change to expanded view

  -**expanded view**
    -expanded view of the image gallery will overlay rest of item detail page
    -much of same functionality on default view will also be available when expanded

    -expanded view will consist of a main page
      -image will span entire screen

    -main image will still offer right/left arrows
      -same function as scrolling through image set

    -thumbs no longer appear over main image
      -icons indicating each image in the set will appear
      -icons will be much smaller
        -same functionality
          -clicking on them will skip to that image
    -icon for currently selected image will be different from rest

    -clicking main image will zome image by 2.5 times
      -mouse should become a + symbol while hovering over main image

    -after clicking, zoomed image will be too large to display in space provided
      -portion of the image shown should correspond to mouse position relative to screen
      -example - moving mouse right should pan image right






## Product Information

-general info about product will be displayed at top of Overview
  -Star Rating (# of Reviews)
  -represent rating with array of solid or outlined stars
    -total of 5 stars should always appear
  -accurate to within a quarter of a review point
    -3.8 should display 3.75 stars and 1.25 outlined stars

  -next to star rating
    -if no reviews, hide this component
    -create a link "Read all ${number} reviews"
      -clicking should scroll page to Rating & Reviews module

  -product category

  -product title

  -price
    -each product has default style
      -should appear if no style selected
    -derived from style, not product
    -update dynamically with user's currently selected style
    -price may be on sale
      -if SKU is currently discounted
        -sale should appear in red
        -original price should follow, struckthrough

  -product overview
    -free form text field
    -may not exist, display only if exists

  -share on social media
    -below product info
      -fb
      -twitter
      -pinterest

## Style Selector

-below product information
-all styles should display for current product at all times
  -each style displayed as thumbnail
  -should appear in rows of 4
  -user should see all styles
  -user should be able to toggle between styles
    -current selection should be indicated with overlay of checkmark on top of thumbnail
    -title for that style should appear
      -typed out in full above the thumbnail list

## Add to cart

-below style selector
  -two drop downs
    -select size
    -select quantity
    -options available vary based on selected product style

  -**drop down 1** - size selector
    -by default, dropdown should show "Select Size"
    -when collapsed, dropdown should show currently selected size
    -list sizes available for currently selected style
    -only sizes in stock should be listed
      -sizes not available should not appear in list
      -if no stock for current style:
        -dropdown becomes inactive and read "OUT OF STOCK"

  -**drop down 2** - quantity
    -allow user to:
      -select quantity of current style
      -select size
      -add to cart

    -sequence of integers from 1 to max
      -max capped by either:
        -quantity of this style and size in stock
        -hard limit of 15
      -if size not selected:
        -quantity dropdown displays '-' and is disabled
      -once size has been selected
        -dropdown defaults to 1

    -button labeled "Add to Cart" will appear
      -below the size and quantity dropdowns
      -this button will be used to place:
        -style, size, quantity of producted selected
          -into user cart

      -depending on current size and quantity selection:
        -if default 'Select Size' is selected:
          -clicking this button should open the size dropdown
          -a message should appear above the dropdown stating:
            "Please select size".

        -if there is no stock:
          -this button should be hidden

        -if both a valid size and valid qty are selected:
          -clicking this button will add the product to user cart




