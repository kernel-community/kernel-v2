import React from 'react';
import {Flex, Text, Image, Grid, Button} from 'theme-ui';

const originalArray = require('../../../content/fellows.json');

const Fellows = () => {
  return (
    <Flex
      sx={{
        marginTop: ['-2rem', '-4rem'],
        marginBottom: ['4rem', '4rem'],
        flexDirection: 'column',
        backgroundColor: 'surfaceAlt',
        borderRadius: 'medium',
        marginX: ['2rem', '2rem', '0rem']
      }}>
      <Grid
        id="fellowContainer"
        gap={0}
        columns={2}
        sx={{
          gridColumnGap: ['2rem', '4rem'],
          gridRowGap: ['2.5rem', '4rem'],
          paddingBottom: ['0rem', '0rem'],
          overflowX: 'scroll',
          paddingX: '2rem',
          paddingTop: '2rem',
          gridTemplateRows: ['auto auto auto', 'auto auto'],
          gridAutoFlow: 'column',
          borderRadius: '0.5rem',
          scrollBehavior: 'smooth'
        }}>
        {originalArray.fellows.map((fellow, index) => (
          <Flex
            key={index}
            sx={{
              flexDirection: 'column',
              ':hover': {
                cursor: 'pointer',
                color: 'primary'
              },

              minWidth: [100, 100]
            }}
            onClick={() => {
              window.open(fellow.url, '_blank');
            }}>
            <Image
              src={fellow.image}
              sx={{
                minWidth: [60, 100],
                maxWidth: [60, 100],
                minHeight: [60, 100],
                maxHeight: [60, 100],
                borderRadius: '100%',
                marginX: 'auto',
                marginBottom: '0.5rem'
              }}
            />

            <Text
              sx={{
                textAlign: 'center',
                fontSize: ['0.8rem', '1rem']
              }}>
              {fellow.name}
            </Text>
          </Flex>
        ))}
      </Grid>
      <Flex
        sx={{
          marginX: 'auto',
          marginBottom: ['0rem', '2rem'],
          textColor: 'callout',
          visibility: ['hidden', 'visible']
        }}>
        <Button
          variant="outlineSmall"
          onClick={() => {
            document.getElementById('fellowContainer').scrollLeft -= 600;
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
            document.getElementById('fellowContainer').scrollLeft += 600;
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
  );
};

export default Fellows;
