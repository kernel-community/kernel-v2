import React from 'react'

import PlayIcon from './play.svg'
import PauseIcon from './pause.svg'

const PlayControl = ({ isPlaying, handleOnClick }) => {
  const Icon = isPlaying ? PauseIcon : PlayIcon

  return (
    <div onClick={handleOnClick} style={styles.container}>
      <Icon height="40" width="40" />
    </div>
  )
}
const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
}
export default PlayControl
