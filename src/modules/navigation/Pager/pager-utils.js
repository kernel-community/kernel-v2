import { dropRight } from "lodash";
import { console } from "window-or-global";

export function findPreviousAndNextSections(page, pagePath) {
  if (!pagePath) throw new Error("must provide pagePath");
  const sectionItems = page.items;
  // we want to get rid of that '/' at the end since
  // that extra '/' does not exist in sideNavData.
  const formattedPagePath = dropRight(pagePath, 1).join("");
  let currentSection, nextSection, previousSection;

  console.log({page, pagePath})

  const handleNestedSectionItem = (nestedSectionItem, nestedIndex) => {
    if (nestedSectionItem.url === formattedPagePath) {
      currentSection = nestedSectionItem;
      const previousNestedModule = nestedItems[nestedIndex - 1];

      if (previousNestedModule) {
        previousSection = previousNestedModule;
      } else if (currentModule) {
        previousSection = currentModule;
      }

      // if there's a next section in the nested data use that
      const nextNestedModule = nestedItems[nestedIndex + 1];
      if (nextNestedModule) {
        nextSection = nextNestedModule;
        // otherwise, use the next top-level module
      } else {
        nextSection = nextModule;
      }
    }
  };

  const handleTopLevelSectionItem = (sectionItem, index) => {
    const previousModule = sectionItems[index - 1];
    const nextModule = sectionItems[index + 1];
    const currentModule = sectionItems[index];

    const getPreviousModule = () => {
      const previousModuleItemsLen = previousModule?.items?.length;
      if (previousModuleItemsLen) {
        return previousModule.items[previousModuleItemsLen - 1];
      } else {
        return previousModule;
      }
    };

    const getNextModule = () => {
      // next top level seciton
      if (currentModule?.items?.length) {
        return currentModule.items[0];
      }
      return nextModule;
    };

    if (sectionItem.url === formattedPagePath) {
      currentSection = sectionItem;

      // previous top level section
      if (previousModule) {
        previousSection = getPreviousModule();
      }

      nextSection = getNextModule();
    }

    if (sectionItem.items) {
      const nestedItems = sectionItem.items;
      nestedItems.forEach(handleNestedSectionItem);
    }
  };

  sectionItems.forEach(handleTopLevelSectionItem);

  console.log({ currentSection, nextSection, previousSection });
  return { currentSection, nextSection, previousSection };
}
