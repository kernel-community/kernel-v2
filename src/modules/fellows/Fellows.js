import React from 'react'
import { Flex, Text, Image, Grid, Button } from 'theme-ui'
import { Subtitle } from '../ui/heading'
import { Icon } from '@makerdao/dai-ui-icons'

const originalArray = require('../../../content/fellows.json')

const Fellows = () => {
  return (
    <Flex
      sx={{
        paddingTop: ['-2rem', '-4rem'],
        marginBottom: ['4rem', '4rem'],
        flexDirection: 'column',
        backgroundColor: 'surfaceAlt',
        borderRadius: 'medium',
        marginX: ['2rem', '2rem', '0rem'],
      }}>

      <Flex>
        <Grid
          id="fellowContainer"
          sx={{
            gridColumnGap: ['2rem', '4rem'],
            gridRowGap: ['2.5rem', '3rem'],
            paddingBottom: ['0rem', '0rem'],
            overflowX: ['scroll', 'hidden', 'hidden'],
            overflowY: 'hidden',
            height: ['428px', '392px'],
            paddingX: '2rem',
            paddingTop: '2rem',
            gridTemplateRows: ['auto auto auto', 'auto'],
            gridAutoFlow: 'column',
            borderRadius: '0.5rem',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            webkitScrollbarWidth: 'none',
            alignContent: 'center'
          }}>

          {originalArray.fellows.map((fellow, index) => (
            <Flex
              key={index}
              sx={{
                flexDirection: 'column',
                minWidth: [60, 180],
                maxWidth: [60, 180],
                // minHeight: [60, 140],
                // maxHeight: [60, 140],
                height: '100%',
                justifyContent: 'space-between'
              }}>
                <Image
                  src={fellow.image}
                  sx={{
                    borderRadius: '10%',
                    marginX: 'auto',
                    marginBottom: '0.5rem',
                  }}
                />
                <Flex sx={{flexDirection: 'column', height: '100%'}}>
                  <Flex sx={{flexDirection: 'row', alignItems: 'center', rowGap: '4px', justifyContent: 'space-between'}}>
                    <Text variant='h4'>
                      {fellow.name}
                    </Text>
                    <Text sx={{ ':hover': {cursor: 'pointer'} }} onClick={() => {window.open(fellow.url, '_blank')}}>
                      <Icon size={3} name="xicon" />
                    </Text>
                  </Flex>
                  <Subtitle>
                  {fellow.association || "Fellow"}
                  </Subtitle>
                </Flex>
            </Flex>
          ))}
        </Grid>
      </Flex>
      <Flex
        sx={{
          marginX: 'auto',
          marginBottom: ['-1rem', '1rem'],
          marginTop: ['0rem', '1rem'],
          textColor: 'callout',
          visibility: ['hidden', 'visible'],
        }}>
        <Button
          variant="outlineSmall"
          onClick={() => {
            document.getElementById('fellowContainer').scrollLeft -= 600
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            height={24}
            width={24}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Button>
        <Button
          variant="outlineSmall"
          onClick={() => {
            document.getElementById('fellowContainer').scrollLeft += 600
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            height={24}
            width={24}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Button>
      </Flex>
    </Flex>
  )
}

export default Fellows
