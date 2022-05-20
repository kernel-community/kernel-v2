import React from 'react'

const Audio = ({ src }) => {
  return (
    <audio id="audio">
      <source src={src} />
      Your browser does not support the <code>audio</code> element.
    </audio>
  )
}

export default Audio
