import React from 'react'
import propTypes from 'prop-types'

const SubTitle = (
  { label }
) => {

  return (
    <h4
      className='subTitle'
    >
      {label}
    </h4>
  )

}

SubTitle.propTypes = {
  label: propTypes.string.isRequired,
}

export default SubTitle
