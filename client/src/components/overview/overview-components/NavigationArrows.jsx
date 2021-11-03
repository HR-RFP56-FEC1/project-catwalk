import React from 'react'

const Arrows = ({view, onClickArrow}) => (
  <div>
    <div id=
      {view === 'default' ?
      'arrow-left-bg' :
      'arrow-left-bg-expanded'
      }
    >
      <img
        src='./img/left-arrow.png'
        onClick={() => onClickArrow(-1)}
        id='arrow-left'
      />
    </div>
    <div id=
      {view === 'default' ?
      'arrow-right-bg' :
      'arrow-right-bg-expanded'
      }
    >
      <img
        src='./img/right-arrow.png'
        onClick={() => onClickArrow(1)}
        id='arrow-right'
      />
    </div>
  </div>
)

export default Arrows