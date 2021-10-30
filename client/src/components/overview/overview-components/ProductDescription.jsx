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

const Slogan = ({product}) => (
  <div id='slogan'>{product.slogan}</div>
)

const Description = ({product}) => (
  <div id='description'>{product.description}</div>
)

export default Facts
export {Fact, Slogan, Description}