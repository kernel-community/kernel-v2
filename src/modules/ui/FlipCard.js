import React from 'react'

const RotateIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      d="M3 12a9 9 0 1 0 3-6.708V3a1 1 0 0 0-2 0v5h5a1 1 0 0 0 0-2H7.944A7 7 0 1 1 5 12"
      fill="currentColor"
    />
  </svg>
)

const styles = {
  flipCard: {
    perspective: '1000px',
    width: '100%',
  },
  cardHeight: {
    height: 345, 
  },
  flipCardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
  },
  flipped: {
    transform: 'rotateY(180deg)',
  },
  faceBase: {
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    borderRadius: '0.375rem',
    boxShadow:
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    border: '2px solid rgba(229, 231, 235, 0.5)',
    position: 'absolute',
    inset: 0,
  },
  flipCardFront: {
    backgroundColor: 'white',
  },
  flipCardBack: {
    backgroundColor: 'rgb(243, 244, 246)',
    transform: 'rotateY(180deg)',
    padding: '1rem 0.2rem',
  },
  flipBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 6,
    borderRadius: '9999px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '1.5rem',
    padding: '2rem',
    borderBottom: '2px solid rgb(229, 231, 235)',
    height: 175,
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    height: 170,
    borderRight: '1px solid rgb(229, 231, 235)',
  },
  inquirySection: {
    padding: '2rem 1rem',
    textAlign: 'center',
    borderRight: '1px solid rgb(229, 231, 235)',
  },
  inquiryLabel: {
    fontSize: '0.875rem',
    marginBottom: '1.5rem',
  },
  inquiryLink: {
    fontWeight: 600,
    fontSize: '0.875rem',
  },
  backTitle: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '1.5rem',
    marginTop: 8,
    marginBottom: '1rem',
  },
  linksList: {
    listStyleType: 'disc',
    listStylePosition: 'inside',
    paddingInline: 16,
  },
  listItem: {
    margin: '0.5rem 0',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  backLink: {
    color: 'rgb(59, 130, 246)',
    textDecoration: 'underline',
  },
}

const FlipCard = ({
  link,
  title,
  emoji,
  personalInquiry = null,
  personalInquiryLink = '',
  webInquiry = null,
  webInquiryLink = '',
  backLinks = [],
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false)

  return (
    <div style={{ ...styles.flipCard, ...styles.cardHeight }}>
      <div
        style={{
          ...styles.flipCardInner,
          ...(isFlipped ? styles.flipped : {}),
        }}>
        {/* FRONT */}
        <div style={{ ...styles.faceBase, ...styles.flipCardFront }}>
          <button
            type="button"
            aria-label="Flip card"
            aria-pressed={isFlipped}
            style={styles.flipBtn}
            onClick={() => setIsFlipped(true)}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgb(229, 231, 235)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
            <RotateIcon />
          </button>

          <div style={styles.title}>
            <a href={link} style={styles.link}>
              {emoji} {title}
            </a>
          </div>

          <div style={styles.gridContainer}>
            {personalInquiry && (
              <div style={styles.inquirySection}>
                <div style={styles.inquiryLabel}>Personal</div>
                <a href={personalInquiryLink} style={styles.inquiryLink}>
                  {personalInquiry}
                </a>
              </div>
            )}
            {webInquiry && (
              <div style={styles.inquirySection}>
                <div style={styles.inquiryLabel}>Web3</div>
                <a href={webInquiryLink} style={styles.inquiryLink}>
                  {webInquiry}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* BACK */}
        <div style={{ ...styles.faceBase, ...styles.flipCardBack }}>
          <button
            type="button"
            aria-label="Flip card back to front"
            aria-pressed={!isFlipped}
            style={styles.flipBtn}
            onClick={() => setIsFlipped(false)}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgb(209, 213, 219)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
            <RotateIcon />
          </button>

          <div style={styles.backTitle}>Extended Reading</div>
          <ul style={styles.linksList}>
            {backLinks.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <a href={item.link} style={styles.backLink}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
