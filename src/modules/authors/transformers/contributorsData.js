import allContributors from "@content/all-contributors.json";
import {MDXtoAuthor} from "@modules/authors";

import contributorsFilter from "./contributorsFilter";

const contributorsData = (all, list, author, _children, filterProps) => {
    //If the all prop is present AND
    //we have contributers in our data file AND
    //we DONT have children, pass the allContributer data.
    //ELSE get author contribution data from our mdx children
    // let specificAuthor = author && allContributors.contributers && !all ?

    if (all && allContributors.contributors && _children.length === 0) {
        return contributorsFilter(
            allContributors.contributors,
            all,
            filterProps
        );
    }

    if (!all && allContributors.contributors && author) {
        const specificAuthors = Array.isArray(author)
            ? author.map((a) =>
                  allContributors.contributors.find(
                      (n) => n.login && n.login === a.replace(/@/g, "")
                  )
              )
            : [
                  allContributors.contributors.find(
                      (n) => n.login && n.login === author.replace(/@/g, "")
                  )
              ];

        if (specificAuthors) {
            return contributorsFilter(specificAuthors, all, filterProps);
        }

        return [];
    }

    if (_children.length > 0) {
        return getAuthorDataFromChildren(all, list, _children, filterProps);
    }

    return [];
};

export default contributorsData;

//Get Author Data from MDX Child elements.
//See MDXtoAuthor.js on spec.
export const getAuthorDataFromChildren = (
    all,
    list,
    _children,
    filterProps
) => {
    const authorData = MDXtoAuthor(_children, list);

    //If we still want to render allContributors, but we
    //also want to pass our own custom data. We concatenate it
    //to the end of the allContributor data.
    return all && allContributors.contributors
        ? contributorsFilter(
              allContributors.contributors.concat(authorData),
              all,
              filterProps
          )
        : contributorsFilter(authorData, all, filterProps);
};
