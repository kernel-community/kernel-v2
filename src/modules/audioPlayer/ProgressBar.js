/** @jsx jsx */
import { jsx } from 'theme-ui'
import { format, addSeconds } from 'date-fns'

const ProgressBar = ({ currentTime, duration, onTimeUpdate, playerId }) => {
  const percentProgress = (currentTime / duration || 0) * 100

  const formatDuration = (duration) => {
    const durationTime = addSeconds(new Date(0), duration || 0)
    return format(durationTime, 'mm:ss')
  }

  const progressBarId = `progressBar-${playerId}`

  const getTimeAtPosition = (e) => {
    const bar = document.getElementById(progressBarId)
    const barStart = bar.getBoundingClientRect().left
    const barWidth = bar.offsetWidth
    const clickPositionInPage = e.pageX
    const clickPositionInBar = clickPositionInPage - barStart
    const timePerPixel = (duration || 0) / barWidth
    return timePerPixel * clickPositionInBar
  }

  const handleBarInteraction = (e) => {
    onTimeUpdate(getTimeAtPosition(e))

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(getTimeAtPosition(eMove))
    }

    document.addEventListener('mousemove', updateTimeOnMove)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove)
    })
  }

  const barStyle = {
    ...styles.progressBar,
    background: `linear-gradient(to right, #FFD500 ${percentProgress}%, white 0)`,
  }

  const knobStyle = {
    ...styles.progressKnob,
    left: `${percentProgress - 2}%`,
  }

  return (
    <div sx={styles.container}>
      <span sx={styles.timeText}>{formatDuration(currentTime)}</span>
      <div
        id={progressBarId}
        style={barStyle}
        onMouseDown={handleBarInteraction}>
        <span sx={knobStyle} />
      </div>
      <span sx={styles.timeText}>{formatDuration(duration)}</span>
    </div>
  )
}

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    userSelect: 'none',
    width: '100%',
  },
  progressBar: {
    alignItems: 'center',
    border: 'solid',
    borderRadius: '5px',
    borderWidth: '0.5px',
    cursor: 'pointer',
    display: 'flex',
    flex: 1,
    height: '10px',
    margin: '0 20px',
  },
  progressKnob: {
    backgroundColor: '#FFD500',
    border: '1.5px solid white',
    borderRadius: '50%',
    height: '16px',
    position: 'relative',
    width: '16px',
  },
  timeText: {
    fontSize: ['.8rem', '.8rem', '1.5rem'],
    width: '10%',
  },
}

export default ProgressBar
