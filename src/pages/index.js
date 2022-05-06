import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { navigate } from 'gatsby'
import { useTranslation } from '@modules/localization'
import { getInitialLocale } from '@utils'
import { SEO } from '@modules/utility'

//This page doesn't exist and solely acts as a reroute for language.
const IndexPage = () => {
  const { allLocales, DEFAULT_LOCALE } = useTranslation()

  useEffect(() => {
    if (typeof window !== 'undefined' && window) {
      let initialLocale = getInitialLocale(allLocales, DEFAULT_LOCALE)

      //Replace current route with locale based index.
      navigate(`/${initialLocale}/`, { replace: true })
    }
  })

  const seo = {
    title: 'Kernel Community',
    description:
      'A peer-to-peer, lifelong learning community of the most talented individuals in web3',
    keywords: 'community, kernel, contribute',
    featuredImage: 'images/shares/giving.png',
  }

  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <SEO {...seo} />
    </Helmet>
  )
}

export default IndexPage
