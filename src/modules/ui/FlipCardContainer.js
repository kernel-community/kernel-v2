import React, { useState, useEffect } from 'react'
import FlipCard from './FlipCard'
import { cardData } from './cardData'

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0.75rem 0.25rem',
  },
  gridMobile: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '0.5rem',
    width: '100%',
    maxWidth: '75%',
    margin: '0 auto',
  },
  gridDesktop: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    width: '100%',
    margin: '0 auto',
  },
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures effect is only run on mount

  return windowSize
}

const FlipCardContainer = () => {
  const { width } = useWindowSize()
  const gridStyles = width >= 640 ? styles.gridDesktop : styles.gridMobile

  return (
    <div style={styles.container}>
      <div style={gridStyles}>
        {cardData.map((card, index) => (
          <FlipCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default FlipCardContainer
