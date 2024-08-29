/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Text } from 'theme-ui'

export default function Heading1(props) {
  return (
    <Text
      variant="h1"
      sx={{
        // mb: '24px',
        display: 'block',
        lineHeight: 'normal',
        fontSize: '48px',
        letterSpacing: '0.3px',
        fontWeight: '500',
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
          top: '-6px',
        },
        '&:hover > .anchor-link': { opacity: 1 },
        '& > .anchor-link:hover': { opacity: 1, color: 'primary' },
      }}
      {...props}
    />
  )
}
