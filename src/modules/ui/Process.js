/** @jsx jsx */
import { Children } from 'react'
import { Flex, Box, jsx } from 'theme-ui'

const Process = ({ children }) => {
  const _Children = Children.toArray(children)

  return (
    <Box sx={{ mt: '34px', mb: '34px' }}>
      {_Children.map((child, index) => {
        return (
          <Flex
            key={`process-child-${index}`}
            sx={{
              flexDirection: 'row',
            }}>
            <Box
              sx={{
                fontSize: '24px',
                fontWeight: '500',
                width: '40px',
                minWidth: '40px',
                height: '40px',
                lineHeight: '39px',
                mt: '10px',
                mb: '10px',
                minHeight: '40px',
                borderRadius: '100%',
                color: 'onPrimary',
                textAlign: 'center',
                backgroundColor: 'primary',
                // marginTop: "12px",
              }}>
              {`${index + 1}`}
            </Box>
            <Box
              sx={{
                ml: 3,
                mt: '18px',
                mb: '18px',
                borderBottom: '1px solid',
                borderColor: 'muted',
                width: '100%',
                pb: '32px',
                '& > *:only-child, & > *:last-child': { m: 0 },
              }}>
              {child}
            </Box>
          </Flex>
        )
      })}
    </Box>
  )
}

export default Process
