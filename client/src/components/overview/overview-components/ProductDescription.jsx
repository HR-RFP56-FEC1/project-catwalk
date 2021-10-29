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

const Slogan = () => (
  <div id='slogan'>Product Slogan. Some catchphrase or description.</div>
)

const Description = () => (
  <div id='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Integer vitae justo eget magna. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Ut sem viverra aliquet eget. Consectetur adipiscing elit ut aliquam.<p>Non arcu risus quis varius quam. Risus quis varius quam quisque id diam. Metus aliquam eleifend mi in nulla posuere.</p></div>
)

export default Facts
export {Fact, Slogan, Description}