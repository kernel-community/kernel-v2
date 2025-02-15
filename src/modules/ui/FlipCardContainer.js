import React from 'react'
import FlipCard from './FlipCard'
import { cardData } from './cardData'

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0.75rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '0.5rem',
    width: '100%',
    margin: '0 auto',
  },
  '@media (min-width: 640px)': {
    grid: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
    },
  },
  '@media (max-width: 640px)': {
    grid: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '1rem',
    },
  },
}

const FlipCardContainer = () => {
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.grid,
          ...(window.innerWidth >= 640
            ? styles['@media (min-width: 640px)'].grid
            : {}),
        }}>
        {cardData.map((card, index) => (
          <FlipCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default FlipCardContainer
