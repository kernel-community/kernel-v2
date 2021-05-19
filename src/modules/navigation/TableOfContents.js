/** @jsx jsx */
import {Flex, jsx} from 'theme-ui';
import {Link} from 'gatsby';
import Sticky from 'react-sticky-el';
import {console, parent} from 'window-or-global';

const TableOfContents = ({data, styles, isMobile}) => {
  return (
    <Sticky
      boundaryElement=".content-boundary"
      hideOnBoundaryHit={false}
      disabled={isMobile}
      dontUpdateHolderHeightWhenSticky={true}
      sx={{
        width: ['100%', '100%', '258px'],
        '.sticky': {
          width: '258px'
        },
        ...styles
      }}>
      <Flex
        sx={{
          flexDirection: 'column',
          pl: [0, 0, 3],
          pt: [0, 0, 5],
          maxHeight: ['unset', 'unset', '100vh'],
          overflow: 'auto'
        }}>
        <p sx={{fontWeight: 'bold', m: 0, fontSize: ['26px', '26px', '14px']}}>
          Table of contents
        </p>
        <ul sx={{m: 0, mt: 3, pl: 0, minWidth: '200px', listStyleType: 'none'}}>
          {data.items.map((node, index) => (
            <ChildNode
              key={`toc-${node.url}-${index}`}
              parentDepth={0}
              {...node}
            />
          ))}
        </ul>
      </Flex>
    </Sticky>
  );
};

const ChildNode = ({url, items, title, parentDepth}) => {
  return (
    <li sx={{mb: 3}}>
      <Link
        to={url}
        sx={{
          variant: 'styles.a',
          lineBreak: 'anywhere',
          fontWeight: parentDepth > 1 ? 'normal' : 'bold',
          fontSize: ['14px', '14px', 2]
        }}>
        {title}
      </Link>

      {items && items.length > 0 && (
        <ul
          sx={{
            m: 0,
            mt: 3,
            pl: 0,
            minWidth: '200px',
            listStyleType: 'none',
            ml: parentDepth < 3 ? '20px' : 0 //NOTE(Rejon): Don't let the margin left continue for more than 3 depth. It just looks wrong.
          }}>
          {items.map((node, index) => (
            <ChildNode
              key={`toc-${node.url}-${index}`}
              parentDepth={parentDepth + 1}
              {...node}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TableOfContents;
