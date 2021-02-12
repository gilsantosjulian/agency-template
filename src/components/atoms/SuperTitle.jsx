import React from 'react'
import propTypes from 'prop-types'

const SuperTitle = (
  { label }
) => {

  return (
    <h1
      className='superTitle'
    >
      {label}
    </h1>
  )

}

SuperTitle.propTypes = {
  label: propTypes.string.isRequired,
}

export default SuperTitle
