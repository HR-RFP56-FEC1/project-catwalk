import React from 'react'
import {useState} from 'react'

const Facts = () => {
  const [facts, setFacts] = useState([1, 2, 3, 4])
  return (
    <div id='facts'>
      {facts.map((fact, i) => <Fact key={i} />)}
    </div>
  )
}

const Fact = () => (
  <div className='fact'>✓ <b>Some interesting fact</b></div>
)

const Slogan = ({productDetails}) => (
  <div id='slogan'>{productDetails.slogan}</div>
)

const Description = ({productDetails}) => (
  <div id='description'>{productDetails.description}</div>
)

export default Facts
export {Fact, Slogan, Description}