import React from 'react'
import propTypes from 'prop-types'
import { navigateTo } from 'gatsby'
import getBaseUrl from '../../utils/getBaseUrl'

const LanguageSelector = (
  { defaultLang, langKey, langTextMap }
) => {

  const onChange = (
    event
  ) => {

    navigateTo(
      getBaseUrl(
        {
          defaultLang,
          lang: event.target.value,
        }
      )
    )

  }

  const renderOptions = () => {

    return Object.keys(
      langTextMap
    )
    .map(
      (
        key
      ) => {

        return (
          <option
            key={key}
            value={key}
          >
            {langTextMap[key].toUpperCase()}
          </option>
        )

      }
    )

  }

  return (
    <select
      className='languageSelector'
      onChange={onChange}
      defaultValue={langKey}
    >
      {renderOptions(
        langTextMap
      )}
    </select>
  )

}

LanguageSelector.propTypes = {
  defaultLang: propTypes.string.isRequired,
  langKey: propTypes.string.isRequired,
  langTextMap: propTypes.object.isRequired,
}

export default LanguageSelector
