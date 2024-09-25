import React from 'react'
import { Flex, Grid } from 'theme-ui'

const BigNumber = ({children}) => {
  return (
    <div style={{fontSize: '54px'}}>
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
            width: '100%'
          }}>
            <div>
              <BigNumber>
                2057
              </BigNumber>
              <div>
                Kernel Fellows
              </div>
            </div>
            <div>
              <BigNumber>
                92
              </BigNumber>
              <div>
                countries
              </div>
            </div>
            <div>
              <BigNumber>
                200+
              </BigNumber>
              <div>
                active projects
              </div>
            </div>
            <div>
              <BigNumber>
                $100MM
              </BigNumber>
              <div>
                Raised by Kernel Fellows
              </div>
            </div>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default Stats;