import React, { useRef, createRef } from 'react'
import propTypes from 'prop-types'
import HamburguerButton from '../atoms/HamburguerButton'
import NormalButon from '../atoms/NormalButton'
import LanguageSelector from '../atoms/LanguageSelector'
import Anchor from '../atoms/Anchor'

const Menu = (
  {
    items,
    multiplePages,
    elementInViewPort,
    buttonLabel,
    buttonOnClick,
    defaultLang,
    langKey,
    langTextMap,
  }
) => {

  const itemsContainer = useRef(
    null
  )
  const hamburguerButton = createRef()

  const onClickHamburgerButton = () => {

    hamburguerButton.current.classList.toggle(
      'pressed'
    )
    itemsContainer.current.classList.toggle(
      'visible'
    )

  }

  const renderItems = () => {

    return Object.keys(
      items
    )
    .map(
      (
        key
      ) => {

        return (
          <Anchor
            key={key}
            multiplePages={multiplePages}
            elementInViewPort={elementInViewPort}
            route={key}
            label={items[key]}
            onClicked={onClickHamburgerButton}
          />
        )

      }
    )

  }

  return (
    <div
      className='menu'
    >
      <HamburguerButton
        ref={hamburguerButton}
        onClicked={onClickHamburgerButton}
      />
      <div
        ref={itemsContainer}
        className='items'
      >
        {renderItems()}
        <NormalButon
          label={buttonLabel}
          onClick={buttonOnClick}
        />
        <LanguageSelector
          defaultLang={defaultLang}
          langKey={langKey}
          langTextMap={langTextMap}
        />
      </div>
    </div>
  )

}

Menu.propTypes = {
  items: propTypes.object,
  multiplePages: propTypes.bool,
  elementInViewPort: propTypes.string.isRequired,
  buttonLabel: propTypes.string.isRequired,
  buttonOnClick: propTypes.func.isRequired,
  defaultLang: propTypes.string.isRequired,
  langKey: propTypes.string.isRequired,
  langTextMap: propTypes.object.isRequired,
}

Menu.defaultProps = {
  items: {},
  multiplePages: false,
}

export default Menu
