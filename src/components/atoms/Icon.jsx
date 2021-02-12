import React from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import * as icons from '../../../assets/theme/icons'

const Icon = (
  { iconName }
) => {

  const getIconByName = () => {

    return Object.keys(
      icons
    )
    .find(
      (
        iconKey
      ) => {

        return iconName === iconKey

      }
    )

  }

  return (
    <FontAwesomeIcon
      className='icon'
      icon={icons[getIconByName()] || faQuestion}
    />
  )

}

Icon.propTypes = {
  iconName: propTypes.string.isRequired,
}

export default Icon
