/** @jsx jsx */

import {jsx} from 'theme-ui';
import {Text} from 'theme-ui';

export default function Subtitle(props) {
  return (
    <Text
      as="h3"
      sx={{
        mb: '32px',
        display: 'block',
        lineHeight: 'normal',
        fontSize: '24px',
        fontWeight: '500',
        letterSpacing: '0.3px',
        fontFamily: 'sanserif',
        color: 'textMuted',
        marginTop: '16px',
        marginBottom: '16px',
        '& > .anchor-link': {
          opacity: 0,
          color: 'muted',
          fontSize: 5,
          position: 'relative',
          left: '10px',
          top: '-3px'
        },
        '&:hover > .anchor-link': {opacity: 1},
        '& > .anchor-link:hover': {opacity: 1, color: 'primary'}
      }}
      {...props}
    />
  );
}
