/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'

import ProgressBar from './ProgressBar'
import Audio from './Audio'
import PlayControl from './PlayControl'

const AudioPlayer = ({ src }) => {
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [clickedTime, setClickedTime] = useState()

  useEffect(() => {
    const audio = document.getElementById('audio')

    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)

    isPlaying ? audio.play() : audio.pause()

    if (clickedTime && clickedTime !== currentTime) {
      audio.currentTime = clickedTime
      setClickedTime(null)
    }

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
    }
  }, [isPlaying, clickedTime])

  const handleOnClickPlayControl = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div sx={styles.container}>
      <Audio src={src} />
      <PlayControl
        isPlaying={isPlaying}
        handleOnClick={handleOnClickPlayControl}
      />
      <div sx={styles.rightContainer}>
        <div sx={styles.listenCTA}>Listen to this article</div>
        <ProgressBar
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
    borderRadius: '9999px',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '3rem',
    overflow: 'hidden',
    padding: ['1rem 1rem 1rem 0', '1rem 1rem 1rem 0', '1rem 3rem 1rem 1rem'],
  },
  listenCTA: {
    fontSize: ['1rem', '1rem', '1.5rem'],
  },
  rightContainer: {
    flexGrow: 10,
  },
}

export default AudioPlayer
