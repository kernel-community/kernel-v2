import React from 'react'

const Audio = ({ src, playerId }) => {
  return (
    <audio id={playerId}>
      <source src={src} />
      Your browser does not support the <code>audio</code> element.
    </audio>
  )
}

export default Audio
