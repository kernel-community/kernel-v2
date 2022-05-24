/** @jsx jsx */

import { jsx } from 'theme-ui'

const Divider = (props) => {
  return (
    <hr
      sx={{
        borderTop: '1px solid',
        borderColor: 'muted',
        width: ['100%', '100%', '90%'],
      }}
      {...props}
    />
  )
}

export default Divider
