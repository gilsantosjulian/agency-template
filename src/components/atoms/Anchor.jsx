import React from 'react'
import propTypes from 'prop-types'

const Anchor = (
  {
    multiplePages, elementInViewPort, route, label, onClicked,
  }
) => {

  const getClassName = () => {

    if (elementInViewPort === route) return 'selected'

    return ''

  }

  const goTo = () => {

    onClicked()
    setTimeout(
      () => {

        window.location.href = `/${route === 'home' ? '' : route}`

      }, 500
    )

  }

  const scrollTo = () => {

    let startPoint = document.getElementById(
      route
    ).offsetTop
    if (!multiplePages && route === 'home') startPoint = 0

    window.scrollTo(
      {
        top: startPoint,
        behavior: 'smooth',
      }
    )
    onClicked()

  }

  const onClick = () => {

    if (multiplePages) return goTo()

    return scrollTo()

  }

  return (
    <button
      className={`anchor ${getClassName()}`}
      type='button'
      onClick={onClick}
    >
      {label.toUpperCase()}
    </button>
  )

}

Anchor.propTypes = {
  multiplePages: propTypes.bool,
  elementInViewPort: propTypes.string.isRequired,
  route: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onClicked: propTypes.func.isRequired,
}

Anchor.defaultProps = {
  multiplePages: false,
}

export default Anchor
