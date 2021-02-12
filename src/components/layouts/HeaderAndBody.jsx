import React from 'react'
import propTypes from 'prop-types'

const HeaderAndBody = (
  { header, body }
) => {

  return (
    <>
      <div
        className='header'
      >
        {header}
      </div>
      <div
        className='body'
      >
        {body}
      </div>
    </>
  )

}

HeaderAndBody.propTypes = {
  header: propTypes.node.isRequired,
  body: propTypes.node.isRequired,
}

export default HeaderAndBody
