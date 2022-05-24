/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Text } from 'theme-ui'

export default function Heading4(props) {
  return (
    <Text
      as="h4"
      sx={{
        display: 'block',
        lineHeight: 'normal',
        fontSize: '20px',
        fontWeight: '500',
        letterSpacing: '0.3px',
        fontFamily: 'heading',
        color: 'text',
        marginTop: '8px',
        marginBottom: '8px',
        '& > .anchor-link': {
          opacity: 0,
          color: 'muted',
          fontSize: 7,
          position: 'relative',
          left: '10px',
          top: '-8px',
        },
        '&:hover > .anchor-link': { opacity: 1 },
        '& > .anchor-link:hover': { opacity: 1, color: 'primary' },
      }}
      {...props}
    />
  )
}
