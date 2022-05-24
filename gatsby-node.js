/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { UrlConverter } = require('./src/build-utils')

const FALLBACK_LOCALE = 'en'
//TODO(Rejon): Add in support for the case similar pages exist outside of the locale folders.
//			   We don't want to override pages at the top level if they exist.

//Create redirect fallbacks to default locales.
//ie If the user types /contribute and it exists in our default locale, take us to that page.
exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  const { data: pages } = await graphql(`
    query redirects {
      pages: allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "//([\\\\w]{2})/(?!header.mdx|index.mdx|sidenav.mdx|example.mdx|footer.mdx|404.mdx|.js|.json)/"
          }
        }
      ) {
        edges {
          node {
            fileAbsolutePath
          }
        }
      }
    }
  `)

  pages.pages.edges.map(({ node }) => {
    const noLocalePath = UrlConverter(node)
      .replace(/^\/([\w]{2})\//, '/')
      .replace('index', '')

    createRedirect({
      fromPath: noLocalePath,
      toPath: `/${FALLBACK_LOCALE}${noLocalePath}`,
      isPermanent: true,
    })
  })

  //Legacy Redirect Fix
  createRedirect({
    fromPath: '/module-0/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-0`,
  })

  createRedirect({
    fromPath: '/module-0/conversation',
    toPath: `/${FALLBACK_LOCALE}/learn/module-0/conversation`,
  })

  createRedirect({
    fromPath: '/module-0/money-language',
    toPath: `/${FALLBACK_LOCALE}/learn/module-0/money-language`,
  })

  createRedirect({
    fromPath: '/module-0/play-of-pattern',
    toPath: `/${FALLBACK_LOCALE}/learn/module-0/play-of-pattern`,
  })

  createRedirect({
    fromPath: '/module-0/purpose',
    toPath: `/${FALLBACK_LOCALE}/learn/module-0/purpose`,
  })

  createRedirect({
    fromPath: '/module-0/trust',
    toPath: `/${FALLBACK_LOCALE}/learn/module-0/trust`,
  })

  createRedirect({
    fromPath: '/module-1/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-1`,
  })

  createRedirect({
    fromPath: '/module-1/joyful-subversion',
    toPath: `/${FALLBACK_LOCALE}/learn/module-1/joyful-subversion`,
  })

  createRedirect({
    fromPath: '/module-1/meaning',
    toPath: `/${FALLBACK_LOCALE}/learn/module-1/meaning`,
  })

  createRedirect({
    fromPath: '/module-1/playdough-protocols',
    toPath: `/${FALLBACK_LOCALE}/learn/module-1/playdough-protocols`,
  })

  createRedirect({
    fromPath: '/module-1/promise-blockchains',
    toPath: `/${FALLBACK_LOCALE}/learn/module-1/promise-blockchains`,
  })

  createRedirect({
    fromPath: '/module-1/understanding-ethereum',
    toPath: `/${FALLBACK_LOCALE}/learn/module-1/understanding-ethereum`,
  })

  createRedirect({
    fromPath: '/module-1/value',
    toPath: `/${FALLBACK_LOCALE}/learn/module-1/value`,
  })

  createRedirect({
    fromPath: '/module-2/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-2`,
  })

  createRedirect({
    fromPath: '/module-2/banking',
    toPath: `/${FALLBACK_LOCALE}/learn/module-2/banking`,
  })

  createRedirect({
    fromPath: '/module-2/better-questions',
    toPath: `/${FALLBACK_LOCALE}/learn/module-2/better-questions`,
  })

  createRedirect({
    fromPath: '/module-2/debt',
    toPath: `/${FALLBACK_LOCALE}/learn/module-2/debt`,
  })

  createRedirect({
    fromPath: '/module-2/engineering',
    toPath: `/${FALLBACK_LOCALE}/learn/module-2/engineering`,
  })

  createRedirect({
    fromPath: '/module-2/money-speech',
    toPath: `/${FALLBACK_LOCALE}/learn/module-2/money-speech`,
  })

  createRedirect({
    fromPath: '/module-2/shelling-out',
    toPath: `/${FALLBACK_LOCALE}/learn/module-2/shelling-out`,
  })

  createRedirect({
    fromPath: '/module-3/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-3`,
  })

  createRedirect({
    fromPath: '/module-3/freedom',
    toPath: `/${FALLBACK_LOCALE}/learn/module-3/freedom`,
  })

  createRedirect({
    fromPath: '/module-3/humility',
    toPath: `/${FALLBACK_LOCALE}/learn/module-3/humility`,
  })

  createRedirect({
    fromPath: '/module-3/intention',
    toPath: `/${FALLBACK_LOCALE}/learn/module-3/intention`,
  })

  createRedirect({
    fromPath: '/module-3/lock-it-open',
    toPath: `/${FALLBACK_LOCALE}/learn/module-3/lock-it-open`,
  })

  createRedirect({
    fromPath: '/module-3/time',
    toPath: `/${FALLBACK_LOCALE}/learn/module-3/time`,
  })

  createRedirect({
    fromPath: '/module-3/remember',
    toPath: `/${FALLBACK_LOCALE}/learn/module-3/remember`,
  })

  createRedirect({
    fromPath: '/module-4/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-4`,
  })

  createRedirect({
    fromPath: '/module-4/art',
    toPath: `/${FALLBACK_LOCALE}/learn/module-4/art`,
  })

  createRedirect({
    fromPath: '/module-4/consensus',
    toPath: `/${FALLBACK_LOCALE}/learn/module-4/consensus`,
  })

  createRedirect({
    fromPath: '/module-4/liberal-radical',
    toPath: `/${FALLBACK_LOCALE}/learn/module-4/liberal-radical`,
  })

  createRedirect({
    fromPath: '/module-4/self-enquiry',
    toPath: `/${FALLBACK_LOCALE}/learn/module-4/self-enquiry`,
  })

  createRedirect({
    fromPath: '/module-4/governance',
    toPath: `/${FALLBACK_LOCALE}/learn/module-4/governance`,
  })

  createRedirect({
    fromPath: '/module-4/the-garden',
    toPath: `/${FALLBACK_LOCALE}/learn/module-4/the-garden`,
  })

  createRedirect({
    fromPath: '/module-5/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-5`,
  })

  createRedirect({
    fromPath: '/module-5/amazon-unbounded-search',
    toPath: `/${FALLBACK_LOCALE}/learn/module-5/amazon-unbounded-search`,
  })

  createRedirect({
    fromPath: '/module-5/incentives',
    toPath: `/${FALLBACK_LOCALE}/learn/module-5/incentives`,
  })

  createRedirect({
    fromPath: '/module-5/listening-stories',
    toPath: `/${FALLBACK_LOCALE}/learn/module-5/listening-stories`,
  })

  createRedirect({
    fromPath: '/module-5/prosocial-value',
    toPath: `/${FALLBACK_LOCALE}/learn/module-5/prosocial-value`,
  })

  createRedirect({
    fromPath: '/module-5/reveal-the-universe',
    toPath: `/${FALLBACK_LOCALE}/learn/module-5/reveal-the-universe`,
  })

  createRedirect({
    fromPath: '/module-5/the-peoples-narrative',
    toPath: `/${FALLBACK_LOCALE}/learn/module-5/the-peoples-narrative`,
  })

  createRedirect({
    fromPath: '/module-6/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-6`,
  })

  createRedirect({
    fromPath: '/module-6/censorship-resistance',
    toPath: `/${FALLBACK_LOCALE}/learn/module-6/censorship-resistance`,
  })

  createRedirect({
    fromPath: '/module-6/duende',
    toPath: `/${FALLBACK_LOCALE}/learn/module-6/duende`,
  })

  createRedirect({
    fromPath: '/module-6/inventing-on-principle',
    toPath: `/${FALLBACK_LOCALE}/learn/module-6/inventing-on-principle`,
  })

  createRedirect({
    fromPath: '/module-6/learn',
    toPath: `/${FALLBACK_LOCALE}/learn/module-6/learn`,
  })

  createRedirect({
    fromPath: '/module-6/serenity',
    toPath: `/${FALLBACK_LOCALE}/learn/module-6/serenity`,
  })

  createRedirect({
    fromPath: '/module-7/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-7`,
  })

  createRedirect({
    fromPath: '/module-7/giving',
    toPath: `/${FALLBACK_LOCALE}/learn/module-7/giving`,
  })

  createRedirect({
    fromPath: '/module-7/no-paradigm',
    toPath: `/${FALLBACK_LOCALE}/learn/module-7/no-paradigm`,
  })

  createRedirect({
    fromPath: '/module-7/perfection',
    toPath: `/${FALLBACK_LOCALE}/learn/module-7/perfection`,
  })

  createRedirect({
    fromPath: '/module-7/scale-ability',
    toPath: `/${FALLBACK_LOCALE}/learn/module-7/scale-ability`,
  })

  createRedirect({
    fromPath: '/module-7/the-gift',
    toPath: `/${FALLBACK_LOCALE}/learn/module-7/the-gift`,
  })

  createRedirect({
    fromPath: '/en/fork-me/learning-curve',
    toPath: `/${FALLBACK_LOCALE}/guiding/contracts`,
  })

  createRedirect({
    fromPath: '/en/resources/nfts',
    toPath: `/${FALLBACK_LOCALE}/resources/research/#nfts`,
  })

  createRedirect({
    fromPath: '/en/resources/design-spec',
    toPath: `/${FALLBACK_LOCALE}/resources/design-ux`,
  })

  createRedirect({
    fromPath: '/en/resources/smart-contracts',
    toPath: `/${FALLBACK_LOCALE}/resources/development`,
  })

  createRedirect({
    fromPath: '/en/resources/zero-knowledge',
    toPath: `/${FALLBACK_LOCALE}/resources/research/#zero-knowledge`,
  })

  createRedirect({
    fromPath: '/en/learn/module-1/promise-blockchains',
    toPath: `/${FALLBACK_LOCALE}/learn/module-1/dreamers`,
  })

  createRedirect({
    fromPath: '/en/build/outsmarting-contracts/lesson-0',
    toPath: `/${FALLBACK_LOCALE}/build/outsmarting-contracts/lifting-the-veil`,
  })

  createRedirect({
    fromPath: '/en/build/outsmarting-contracts/lesson-1',
    toPath: `/${FALLBACK_LOCALE}/build/outsmarting-contracts/random-order`,
  })

  createRedirect({
    fromPath: '/en/build/outsmarting-contracts/lesson-2',
    toPath: `/${FALLBACK_LOCALE}/build/outsmarting-contracts/true-store`,
  })

  createRedirect({
    fromPath: '/en/build/outsmarting-contracts/lesson-3',
    toPath: `/${FALLBACK_LOCALE}/build/outsmarting-contracts/reenter-the-kingdom`,
  })

  createRedirect({
    fromPath: '/en/build/nfteasy/lesson-0',
    toPath: `/${FALLBACK_LOCALE}/build/nfteasy/long-life-libraries`,
  })

  createRedirect({
    fromPath: '/en/build/nfteasy/lesson-1',
    toPath: `/${FALLBACK_LOCALE}/build/nfteasy/character-types`,
  })

  createRedirect({
    fromPath: '/en/build/nfteasy/lesson-2',
    toPath: `/${FALLBACK_LOCALE}/build/nfteasy/perma-network-culture`,
  })

  createRedirect({
    fromPath: '/en/build/nfteasy/lesson-3',
    toPath: `/${FALLBACK_LOCALE}/build/nfteasy/would-tries`,
  })

  createRedirect({
    fromPath: '/en/build/tokenomics/lesson-0',
    toPath: `/${FALLBACK_LOCALE}/build/tokenomics/mounting-up`,
  })

  createRedirect({
    fromPath: '/en/build/tokenomics/lesson-1',
    toPath: `/${FALLBACK_LOCALE}/build/tokenomics/adaptive-sharing`,
  })

  createRedirect({
    fromPath: '/en/build/tokenomics/lesson-2',
    toPath: `/${FALLBACK_LOCALE}/build/tokenomics/communal-treasure`,
  })

  createRedirect({
    fromPath: '/en/build/tokenomics/lesson-3',
    toPath: `/${FALLBACK_LOCALE}/build/tokenomics/flying-high`,
  })

  createRedirect({
    fromPath: '/en/build/tokenomics/lesson-4',
    toPath: `/${FALLBACK_LOCALE}/build/tokenomics/regenerative-commons`,
  })

  createRedirect({
    fromPath: '/en/build/zodiac/lesson-0',
    toPath: `/${FALLBACK_LOCALE}/build/zodiac/past-light`,
  })

  createRedirect({
    fromPath: '/en/build/zodiac/lesson-1',
    toPath: `/${FALLBACK_LOCALE}/build/zodiac/expanding-universe`,
  })

  createRedirect({
    fromPath: '/en/build/zodiac/lesson-2',
    toPath: `/${FALLBACK_LOCALE}/build/zodiac/cosmic-reality`,
  })

  createRedirect({
    fromPath: '/en/build/zodiac/lesson-3',
    toPath: `/${FALLBACK_LOCALE}/build/zodiac/open-multiverse`,
  })

  createRedirect({
    fromPath: '/en/build/zodiac/lesson-4',
    toPath: `/${FALLBACK_LOCALE}/build/zodiac/infinite-learning`,
  })

  createRedirect({
    fromPath: '/en/build/decentralized-ai/lesson-0',
    toPath: `/${FALLBACK_LOCALE}/build/decentralized-ai/into-the-ocean`,
  })

  createRedirect({
    fromPath: '/en/build/decentralized-ai/lesson-1',
    toPath: `/${FALLBACK_LOCALE}/build/decentralized-ai/generative-adversaries`,
  })

  createRedirect({
    fromPath: '/en/build/decentralized-ai/lesson-2',
    toPath: `/${FALLBACK_LOCALE}/build/decentralized-ai/punks-python`,
  })

  createRedirect({
    fromPath: '/en/build/decentralized-ai/lesson-3',
    toPath: `/${FALLBACK_LOCALE}/build/decentralized-ai/analogue-imaginings`,
  })

  createRedirect({
    fromPath: '/en/guiding/contracts/',
    toPath: `/${FALLBACK_LOCALE}/guiding/free-learn/`,
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // inject breadcrumbs into page context
  const { context: oldPageContext } = page

  //NOTE(Rejon): Pass a regex string variable for blog home pages so we can make sure we're getting the correct locale.
  if (
    page.path.includes('/blog/') &&
    !page.componentPath.includes('/blogPosts/')
  ) {
    oldPageContext.regex = `//blogPosts/${page.path.split('/')[1]}/` //ie. /blogPosts/en
  }

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...oldPageContext,
      locale: page.path.split('/')[1],
      pagePath: page.path, //NOTE(Rejon): I provide this so we can have a navigational anchor during static builds for pathDirs and sidenav/breadcrumb data.
    },
  })
}
