import React from 'react'
import propTypes from 'prop-types'

const Paragraph = (
  { label }
) => {

  return (
    <span
      className='paragraph'
    >
      {label}
    </span>
  )

}

Paragraph.propTypes = {
  label: propTypes.string.isRequired,
}

export default Paragraph
