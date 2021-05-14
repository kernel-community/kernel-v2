/** @jsx jsx */
import {Flex, jsx} from 'theme-ui';
import {Link} from 'gatsby';
import Sticky from 'react-sticky-el';
import {parent} from 'window-or-global';

const TableOfContents = ({data}) => {
  return (
    <Sticky
      boundaryElement=".content-boundary"
      hideOnBoundaryHit={false}
      dontUpdateHolderHeightWhenSticky={true}
      sx={{
        width: '258px',
        '.sticky': {
          width: '258px'
        }
      }}>
      <Flex sx={{flexDirection: 'column', pl: 4, pt: 5}}>
        <p sx={{fontWeight: 'bold', m: 0}}>Table of contents</p>
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
          fontWeight: parentDepth > 1 ? 'normal' : 'bold'
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
