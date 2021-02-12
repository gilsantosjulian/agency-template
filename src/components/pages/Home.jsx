import React from 'react'
import propTypes from 'prop-types'
import HeaderAndBody from '../layouts/HeaderAndBody'
import Title from '../atoms/Title'
import SubTitle from '../atoms/SubTitle'
import SuperTitle from '../atoms/SuperTitle'
import Paragraph from '../atoms/Paragraph'
import Image from '../atoms/Image'

const Home = (
  {
    title, subTitle, superTitle, paragraph, image,
  }
) => {

  return (
    <div
      className='home'
      id='home'
    >
      <HeaderAndBody
        header={(
          <>
            <Title
              label={title}
            />
            <SubTitle
              label={subTitle}
            />
          </>
        )}
        body={(
          <>
            <div
              className='left'
            >
              <SuperTitle
                label={superTitle}
              />
              <Paragraph
                label={paragraph}
              />
            </div>
            <div
              className='right'
            >
              <Image
                imageName={image}
              />
            </div>
          </>
        )}
      />
    </div>
  )

}

Home.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  superTitle: propTypes.string.isRequired,
  paragraph: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
}

export default Home
