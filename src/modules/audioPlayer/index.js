/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ProgressBar from './ProgressBar'
import PlayControl from './PlayControl'
import PlayIcon from './play.svg'

const AudioPlayer = ({ src }) => {
  const [audio, setAudio] = useState()
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [clickedTime, setClickedTime] = useState()
  const [playerId, setPlayerId] = useState()

  let userAgent
  let isIosAgent
  let isWebkit
  let isAutoplayForbidden

  // During the build phase of the project, Gatsby doesn't have access to any of
  // the 'window' based objects. Check if its undefined allows us to build the
  // project, but still access it when the javascript is running in browser
  // where navigator is available
  if (typeof navigator !== 'undefined') {
    userAgent = navigator.userAgent
    isIosAgent = !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i)
    isWebkit = !!userAgent.match(/WebKit/i)
    isAutoplayForbidden = isIosAgent && isWebkit && !userAgent.match(/CriOS/i)
  }

  const showiOSOverlay = isAutoplayForbidden && !audio

  const loadAudio = () => {
    if (!audio) {
      const audio = new Audio(src)
      setAudio(audio)
    }
  }

  const handleOnClickPlay = () => {
    audio.play()
    setIsPlaying(true)
  }

  const handleOnClickPause = () => {
    audio.pause()
    setIsPlaying(false)
  }

  //  Load audio automatically for browsers where autoplay is not being blocked
  useEffect(() => {
    if (!isAutoplayForbidden) {
      loadAudio()
    }
  }, [])

  useEffect(() => {
    const uuid = uuidv4()
    setPlayerId(`audio-${uuid}`)
  }, [])

  useEffect(() => {
    if (!audio) {
      return
    }

    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)

    if (clickedTime && clickedTime !== currentTime) {
      audio.currentTime = clickedTime
      setClickedTime(null)
    }

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
    }
  }, [audio, isPlaying, playerId, clickedTime])

  return (
    <div sx={styles.container}>
      {showiOSOverlay && (
        <div onClick={loadAudio} sx={styles.playerOverlay}>
          <div sx={styles.overlayIconContainer}>
            <PlayIcon height="40" width="40" />
          </div>
          <p sx={{ ...styles.rightContainer, margin: 'auto' }}>
            Click to here load the audio player
          </p>
        </div>
      )}
      <PlayControl
        isPlaying={isPlaying}
        handleOnClickPlay={handleOnClickPlay}
        handleOnClickPause={handleOnClickPause}
      />
      <div sx={styles.rightContainer}>
        <div sx={styles.listenCTA}>Listen</div>
        <ProgressBar
          playerId={playerId}
          currentTime={currentTime}
          duration={duration}
          onTimeUpdate={setClickedTime}
        />
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '3rem',
    overflow: 'hidden',
    padding: ['1rem 1rem 1rem 0', '1rem 1rem 1rem 0', '1rem 3rem 1rem 1rem'],
    position: 'relative',
  },
  listenCTA: {
    fontSize: ['1rem', '1rem', '1.5rem'],
  },
  rightContainer: {
    flexGrow: 10,
  },
  playerOverlay: {
    alignContent: 'center',
    backgroundColor: 'background',
    display: 'flex',
    fontSize: ['1rem', '1rem', '1.5rem'],
    height: '100%',
    left: 0,
    padding: ['1rem 1rem 1rem 0', '1rem 1rem 1rem 0', '1rem 3rem 1rem 1rem'],
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    width: '100%',
    zIndex: 2,
  },
  overlayIconContainer: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
}

export default AudioPlayer
