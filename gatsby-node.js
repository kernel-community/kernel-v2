/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const {UrlConverter} = require('./src/build-utils');
const FALLBACK_LOCALE = 'en';
//TODO(Rejon): Add in support for the case similar pages exist outside of the locale folders.
//			   We don't want to override pages at the top level if they exist.

//Create redirect fallbacks to default locales.
//ie If the user types /contribute and it exists in our default locale, take us to that page.
exports.createPages = async ({graphql, actions}) => {
  const {createRedirect} = actions; //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  const {data: pages} = await graphql(`
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
  `);

  pages.pages.edges.map(({node}) => {
    const noLocalePath = UrlConverter(node)
      .replace(/^\/([\w]{2})\//, '/')
      .replace('index', '');

    createRedirect({
      fromPath: noLocalePath,
      toPath: `/${FALLBACK_LOCALE}${noLocalePath}`,
      isPermanent: true
    });
  });

  //Legacy Redirect Fix
  createRedirect({
    fromPath: '/module-0/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-0`
  });

  createRedirect({
    fromPath: '/module-1/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-1`
  });

  createRedirect({
    fromPath: '/module-2/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-2`
  });

  createRedirect({
    fromPath: '/module-3/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-3`
  });

  createRedirect({
    fromPath: '/module-4/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-4`
  });

  createRedirect({
    fromPath: '/module-5/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-5`
  });

  createRedirect({
    fromPath: '/module-6/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-6`
  });

  createRedirect({
    fromPath: '/module-7/',
    toPath: `/${FALLBACK_LOCALE}/learn/module-7`
  });
};

exports.onCreatePage = async ({page, actions}) => {
  const {createPage, deletePage} = actions;

  // inject breadcrumbs into page context
  const {context: oldPageContext} = page;

  //NOTE(Rejon): Pass a regex string variable for blog home pages so we can make sure we're getting the correct locale.
  if (
    page.path.includes('/blog/') &&
    !page.componentPath.includes('/blogPosts/')
  ) {
    oldPageContext.regex = `//blogPosts/${page.path.split('/')[1]}/`; //ie. /blogPosts/en
  }

  deletePage(page);
  createPage({
    ...page,
    context: {
      ...oldPageContext,
      locale: page.path.split('/')[1],
      pagePath: page.path //NOTE(Rejon): I provide this so we can have a navigational anchor during static builds for pathDirs and sidenav/breadcrumb data.
    }
  });
};
