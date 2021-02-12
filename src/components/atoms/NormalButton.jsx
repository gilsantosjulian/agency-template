import React from 'react'
import propTypes from 'prop-types'

const NormalButton = (
  { label, ...othersProps }
) => {

  return (
    <button
      {...othersProps}
      className='normalButton'
      type='button'
    >
      {label.toUpperCase()}
    </button>
  )

}

NormalButton.propTypes = {
  label: propTypes.string.isRequired,
}

export default NormalButton
