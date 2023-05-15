/** @jsx jsx */

import { jsx, Text, Box } from 'theme-ui'
import { Button } from '@modules/ui'

const HonButton = ({
  children,
  onClickButton,
  buttonText,
  descriptionText,
  isDisabled,
}) => {
  return (
    <div>
      <Box sx={{ padding: '0.5rem' }}>
        <Text sx={styles.connectText}>{descriptionText}</Text>
      </Box>
      <Button
        sx={{ marginX: 'auto' }}
        disabled={isDisabled}
        onClick={onClickButton}>
        {buttonText}
      </Button>
      {children}
    </div>
  )
}

const styles = {
  connectText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginX: 'auto',
  },
}

export default HonButton
