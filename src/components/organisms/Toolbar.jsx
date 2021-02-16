import React from 'react'
import propTypes from 'prop-types'
import SuperTitle from '../atoms/SuperTitle'
import Menu from '../molecules/Menu'

const Toolbar = (
  {
    title,
    buttonLabel,
    buttonOnClick,
    defaultLang,
    langKey,
    langTextMap,
    pageIds,
    multiplePages,
    elementInViewPort,
  }
) => {

  return (
    <div
      className='container mx-auto bg-black'
    >
      <div
        className='left'
      >
        <SuperTitle
          label={title}
        />
      </div>

      <div
        className='right'
      >
        <Menu
          items={pageIds}
          multiplePages={multiplePages}
          elementInViewPort={elementInViewPort}
          buttonLabel={buttonLabel}
          buttonOnClick={buttonOnClick}
          defaultLang={defaultLang}
          langKey={langKey}
          langTextMap={langTextMap}
        />
      </div>
    </div>
  )

}

Toolbar.propTypes = {
  title: propTypes.string.isRequired,
  buttonLabel: propTypes.string.isRequired,
  buttonOnClick: propTypes.func.isRequired,
  defaultLang: propTypes.string.isRequired,
  langKey: propTypes.string.isRequired,
  langTextMap: propTypes.object.isRequired,
  pageIds: propTypes.object,
  multiplePages: propTypes.bool,
  elementInViewPort: propTypes.string.isRequired,
}

Toolbar.defaultProps = {
  pageIds: {},
  multiplePages: false,
}

export default Toolbar
