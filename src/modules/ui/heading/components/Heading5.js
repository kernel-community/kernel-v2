/** @jsx jsx */

import {jsx} from 'theme-ui';
import {Text} from 'theme-ui';

export default function Heading5(props) {
  return (
    <Text
      as="h5"
      sx={{
        mb: '32px',
        display: 'block',
        fontSize: '20px',
        fontWeight: 'normal',
        lineHeight: 'normal',
        '& > .anchor-link': {
          opacity: 0,
          color: 'muted',
          fontSize: 7,
          position: 'relative',
          left: '10px',
          top: '-8px'
        },
        '&:hover > .anchor-link': {opacity: 1},
        '& > .anchor-link:hover': {opacity: 1, color: 'primary'}
      }}
      {...props}
    />
  );
}
