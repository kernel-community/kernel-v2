/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Text } from 'theme-ui'

export default function Subtitle(props) {
  return (
    <Text
      as="h3"
      sx={{
        display: 'block',
        lineHeight: 'normal',
        fontSize: '4',
        fontWeight: '500',
        letterSpacing: '0.3px',
        fontFamily: 'sanserif',
        color: 'textMuted',
        '& > .anchor-link': {
          opacity: 0,
          color: 'muted',
          fontSize: 5,
          position: 'relative',
          left: '10px',
          top: '-3px',
        },
        '&:hover > .anchor-link': { opacity: 1 },
        '& > .anchor-link:hover': { opacity: 1, color: 'primary' },
      }}
      {...props}
    />
  )
}
