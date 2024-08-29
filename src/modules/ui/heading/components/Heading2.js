/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Text } from 'theme-ui'

export default function Heading2(props) {
  return (
    <Text
      variant="h2"
      sx={{
        // mb: '32px',
        display: 'block',
        lineHeight: 'normal',
        fontSize: '32px',
        fontWeight: '500',
        letterSpacing: '0.3px',
        fontFamily: 'heading',
        color: 'text',
        marginTop: '0px',
        marginBottom: '0px',
        '& > .anchor-link': {
          opacity: 0,
          color: 'muted',
          fontSize: 6,
          position: 'relative',
          left: '10px',
          top: '-4px',
        },
        '&:hover > .anchor-link': { opacity: 1 },
        '& > .anchor-link:hover': { opacity: 1, color: 'primary' },
      }}
      {...props}
    />
  )
}
