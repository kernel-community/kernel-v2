/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Icon } from '@makerdao/dai-ui-icons'

const Callout = ({ icon, variant, children }) => {
  const colorWarning = variant === 'warning' ? '#000' : 'text'

  return (
    <Flex
      sx={{
        px: '24px',
        py: '28px',
        mb: '24px',
        mt: '24px',
        width: '100%',
        color: colorWarning,
        borderRadius: '12px',
        bg: variant || 'primaryMuted',
      }}>
      {icon && (
        <Icon
          name={icon}
          size={3}
          sx={{ minWidth: '32px', minHeight: '32px', mr: '10px' }}
        />
      )}
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          '& > *': {
            color: colorWarning,
          },
          '& > *:first-of-type': {
            mt: 0,
          },
          '& > *:only-child': {
            m: 0,
          },
        }}>
        {children}
      </Flex>
    </Flex>
  )
}

export default Callout
