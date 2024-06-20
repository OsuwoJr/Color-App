import React from 'react'

const Square = ({colorValue}) => {
  return (
    <section
    className='square'
    style={{backgroundColor: colorValue}}
    >
      <p>{colorValue ? colorValue : 'Empty'}</p>
    </section>
  ) 
  Square.defaultProps = {
    colorValue: 'Empty Color'
  }
}

export default Square
