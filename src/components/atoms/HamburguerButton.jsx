import React, { forwardRef } from 'react'
import propTypes from 'prop-types'

const HamburguerButton = forwardRef(
  (
    { onClicked }, ref
  ) => {

    return (
      <button
        ref={ref}
        className='hamburguerButton'
        onClick={onClicked}
        type='button'
      >
        <div
          className='line'
        />
        <div
          className='line'
        />
        <div
          className='line'
        />
      </button>
    )

  }
)

HamburguerButton.propTypes = {
  onClicked: propTypes.func.isRequired,
}

export default HamburguerButton
