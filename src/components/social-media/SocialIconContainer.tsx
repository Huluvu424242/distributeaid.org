import { FC, useEffect, useState } from 'react'

import siteSettings from '../../../content/site-settings.json'
import SocialMediaLink from './SocialMediaLink'
import { getThemeLargeScreenWidth } from 'utils/site-theme'

const facebookSrc = require('../../images/social-icons/facebook.svg')
const twitterSrc = require('../../images/social-icons/twitter.svg')
const linkedInSrc = require('../../images/social-icons/linked-in.svg')
const instagramSrc = require('../../images/social-icons/instagram.svg')
const githubSrc = require('../../images/social-icons/github.svg')

const socialMediaDetails = [
  {
    href: siteSettings.instagramUrl,
    src: instagramSrc,
    altText: 'Instagram icon',
  },
  {
    href: siteSettings.twitterUrl,
    src: twitterSrc,
    altText: 'Twitter icon',
  },
  {
    href: siteSettings.linkedinUrl,
    src: linkedInSrc,
    altText: 'LinkedIn icon',
  },
  {
    href: siteSettings.facebookUrl,
    src: facebookSrc,
    altText: 'Facebook icon',
  },
  {
    href: siteSettings.githubUrl,
    src: githubSrc,
    altText: 'Github icon',
  },
]

interface Props {
  position: 'footer' | 'side'
}

const SocialIconContainer: FC<Props> = ({ position }) => {
  const isBrowser = typeof window !== 'undefined'
  const [screenWidth, setScreenWidth] = useState(
    isBrowser ? window.innerWidth : 0,
  )

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window?.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (screenWidth < getThemeLargeScreenWidth() && position === 'side') {
    return null
  }

  return (
    <div className={`flex flex-${position === 'side' ? 'col' : 'row'}`}>
      {socialMediaDetails.map((detail) => (
        <SocialMediaLink key={detail.href} {...detail} />
      ))}
    </div>
  )
}

export default SocialIconContainer
