/** @jsx jsx */
import {jsx, Text} from 'theme-ui';
import {Link} from '@modules/navigation';

const SearchHit = ({title, excerpt, isBlog, url, ...props}) => (
  <Link
    to={url}
    partiallyActive={false}
    activeClassName="not-active"
    {...props}>
    <Text
      variant="h5"
      aria-live="assertive"
      sx={{
        m: 0,
        display: 'block',
        textDecoration: 'none',
        '& mark': {
          backgroundColor: 'primary'
        }
      }}>
      {title} {isBlog ? ' - Blog' : ''}
    </Text>
    <Text
      aria-live="assertive"
      sx={{
        textDecoration: 'none',
        fontWeight: '400',
        fontSize: '14px',
        '& mark': {
          backgroundColor: 'primary'
        }
      }}>
      {excerpt}
    </Text>
  </Link>
);

export default SearchHit;
