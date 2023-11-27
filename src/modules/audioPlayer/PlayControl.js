import React from 'react'

import PlayIcon from './play.svg'
import PauseIcon from './pause.svg'

const PlayControl = ({ isPlaying, handleOnClickPlay, handleOnClickPause }) => {
  const controlConfig = isPlaying
    ? {
        icon: PauseIcon,
        handleOnClick: handleOnClickPause,
      }
    : { icon: PlayIcon, handleOnClick: handleOnClickPlay }

  return (
    <div onClick={controlConfig.handleOnClick} style={styles.container}>
      <controlConfig.icon height="40" width="40" />
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
