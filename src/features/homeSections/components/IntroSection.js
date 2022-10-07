import React from 'react'
import LogoSvg from '../../../assets/icons/logo.svg'
import styled from 'styled-components'
import ButtonLink, { ButtonColor } from '../../../components/ui/ButtonLink'
import '../assets/homeStyles.css'

export default function IntroSection() {
  return (
    <section>
      <SectionHeader id='section-header'>
        <img src={LogoSvg} alt="Phoebe Edwards Fine Art" />
      </SectionHeader>

      <ContentContainer className='max-width-container'>
        <IntroTextContainer>
          <Paragraph>
            <h1>Welcome!</h1>
            
            <h4>
              Explore my artworks ranging from equine and pet portraits, to beautiful landscapes and various commission works I have produced over the past few years.
            </h4>

            <h4>
              Learn more about the artist behind the work.
            </h4>
          </Paragraph>

          <div className="center-content-x">
            <ButtonLink to='/biography' label="biography" color={ButtonColor.PINK}>biography</ButtonLink>
          </div>
        </IntroTextContainer>
      </ContentContainer>
    </section>
  )
}

const SectionHeader = styled.div`
  background-position: center;
  display: flex;
  justify-content: center;
  padding: 2rem;

  img {
    max-height: 15vh;
  }
`

const ContentContainer = styled.div`
  justify-content: space-between;
  text-align: center;
  margin: 50px auto;
`

const IntroTextContainer = styled.div`
  width: fit-content;
`

const Paragraph = styled.div`
  h1 {
    margin-bottom: 20px;
    letter-spacing: 0.8px;
  }

  h4 {
    line-height: 1.6;
    max-width: 50ch;
    margin-bottom: 30px;
    text-transform: none;
  }

  &:h4:first-child {
    border: 3px solid green;
  }
`