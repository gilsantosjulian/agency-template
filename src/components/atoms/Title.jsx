import React from 'react'
import propTypes from 'prop-types'

const Title = (
  { label }
) => {

  return (
    <h3
      className='title'
    >
      {label}
    </h3>
  )

}

Title.propTypes = {
  label: propTypes.string.isRequired,
}

export default Title
