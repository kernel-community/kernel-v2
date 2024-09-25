import React from 'react'
import { Flex, Grid } from 'theme-ui'

const BigNumber = ({ children }) => {
  return <div style={{ fontSize: '64px' }}>{children}</div>
}

const BigText = ({children}) => {
  return <div style={{fontSize: '24px'}}>{children}</div>
}

const StatSection = ({children}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {children}
    </div>
  )
}

const Stats = () => {
  return (
    <Flex
      sx={{
        backgroundColor: 'surfaceAlt',
        borderRadius: 'medium',
        flexDirection: 'column',
        marginX: ['2rem', '2rem', '0rem'],
        // marginTop: ['-2rem', '-4rem'],
      }}>
      <Flex>
        <Grid
          id="projectContainer"
          sx={{
            gridColumnGap: ['1rem', '4rem'],
            gridRowGap: ['4rem', '6rem'],
            padding: '2rem',
            overflowX: ['scroll', 'hidden', 'hidden'],
            overflowY: 'hidden',
            gridTemplateRows: ['auto', 'auto'],
            gridAutoFlow: 'column',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            width: '100%',
          }}>
          <StatSection>
            <BigNumber>2057</BigNumber>
            <BigText>Kernel Fellows</BigText>
          </StatSection>
          <StatSection>
            <BigNumber>92</BigNumber>
            <BigText>countries</BigText>
          </StatSection>
          <StatSection>
            <BigNumber>200+</BigNumber>
            <BigText>active projects</BigText>
          </StatSection>
          <StatSection>
            <BigNumber>$100MM</BigNumber>
            <BigText>Raised by Kernel Fellows</BigText>
          </StatSection>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default Stats
