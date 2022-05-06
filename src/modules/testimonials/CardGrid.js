import React from 'react'
import { Box } from 'theme-ui'
import Card from './Card'

const CardGrid = (props) => {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(3, 1fr)'],
          justifyItems: 'center',
          padding: 32,
          gridGap: 4,
        }}>
        {props.cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Box>
    </>
  )
}

export default CardGrid
