/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useThemeUI } from 'theme-ui'

function SEO({ description, lang, meta, title, keywords, url, featuredImage }) {
  const { theme } = useThemeUI()

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `keywords`,
          content: keywords,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: 'og:url',
          content: url || site.siteMetadata.websiteURL,
        },
        {
          property: `twitter:url`,
          content: url || site.siteMetadata.websiteURL,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          property: 'og:image',
          content: `https://kernel.community/${featuredImage}`,
        },
        {
          name: 'twitter:image',
          content: `https://kernel.community/${featuredImage}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'theme-color',
          content: theme.colors.primary,
        },
      ].concat(meta)}>
      <link rel="icon" href={'/images/icons/favicon.ico'} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
