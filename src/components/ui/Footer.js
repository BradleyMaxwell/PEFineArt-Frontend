import React from 'react'
import styled from 'styled-components'
import instagramSvg from '../../assets/icons/instagram.svg'
import youtubeSvg from '../../assets/icons/youtube.svg'
import twitterSvg from '../../assets/icons/twitter.svg'


export default function Footer() {
  return (
    <FooterContainer className='footer-component'>
        <div>
            <a href="https://www.instagram.com/phoebeedwardsfineart" target={'_blank'} rel='noreferrer'>
                <img src={instagramSvg} alt="Instagram" />
            </a>

            <a href="https://www.youtube.com/channel/UCsi5hlGlulBOGMyRbXq1lng" target={'_blank'} rel='noreferrer'>
                <img src={youtubeSvg} alt="Youtube" />
            </a>

            <a href="https://twitter.com/pefineart" target={'_blank'} rel='noreferrer'>
                <img src={twitterSvg} alt="Twitter" />
            </a>
        </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
    background-color: var(--theme-darkgrey);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    bottom: 0;

    div {
        display: flex;
        min-width: fit-content;
        width: 180px;
        justify-content: space-between;
    }

    a {
        display: flex;

        img {
            width: 100%;
        }
    }
`