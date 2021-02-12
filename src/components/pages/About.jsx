import React from 'react'
import propTypes from 'prop-types'
import HeaderAndBody from '../layouts/HeaderAndBody'
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph'
import Icon from '../atoms/Icon'

const About = (
  { title, paragraph, iconNames }
) => {

  const renderIcons = () => {

    return iconNames.map(
      (
        iconName
      ) => {

        return (
          <Icon
            key={iconName}
            iconName={iconName}
          />
        )

      }
    )

  }

  return (
    <div
      className='about'
      id='about'
    >
      <HeaderAndBody
        header={(
          <>
            <Title
              label={title}
            />
          </>
        )}
        body={(
          <>
            <Paragraph
              label={paragraph}
            />
            <div
              className='iconsContainer'
            >
              {renderIcons()}
            </div>
          </>
        )}
      />
    </div>
  )

}

About.propTypes = {
  title: propTypes.string.isRequired,
  paragraph: propTypes.string.isRequired,
  iconNames: propTypes.array.isRequired,
}

export default About
