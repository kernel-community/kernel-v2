import React from 'react'

const styles = {
  flipCard: {
    perspective: '1000px',
    width: '100%',
  },
  flipCardInner: {
    position: 'relative',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
  },
  flipCardInnerHover: {
    transform: 'rotateY(180deg)',
  },
  flipCardFront: {
    backgroundColor: 'white',
    borderRadius: '0.375rem',
    boxShadow:
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    border: '2px solid rgba(229, 231, 235, 0.5)',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
  },
  flipCardBack: {
    backgroundColor: 'rgb(243, 244, 246)',
    borderRadius: '0.375rem',
    boxShadow:
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    border: '2px solid rgba(229, 231, 235, 0.5)',
    padding: '1rem 0.2rem ',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    transform: 'rotateY(180deg)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '1.5rem',
    padding: '2rem',
    borderBottom: '2px solid rgb(229, 231, 235)',
    height: '175px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    height: '170px',
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
    marginBottom: '1rem',
  },
  linksList: {
    listStyleType: 'disc',
    listStylePosition: 'inside',
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
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      style={styles.flipCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}>
      <div
        style={{
          ...styles.flipCardInner,
          ...(isHovered ? styles.flipCardInnerHover : {}),
        }}>
        <div style={styles.flipCardFront}>
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
        <div style={styles.flipCardBack}>
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
