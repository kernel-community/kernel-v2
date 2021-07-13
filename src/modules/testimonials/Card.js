import React from 'react';
import {Box, Image, Flex} from 'theme-ui';
import processString from 'react-process-string';
import Twitter from '../../../static/images/wol/Twitter.svg';
import Slack from '../../../static/images/wol/Slack.svg';
import QuotationsPurple from '../../../static/images/wol/QuotationsPurple.svg';
import QuotationsYellow from '../../../static/images/wol/QuotationsYellow.svg';
import config from './helpers/parsingConfig';

const Card = ({id, source, url, author_name, text, author_image}) => {
  const parsed = processString(config)(text);
  return (
    <Flex
      sx={{
        height: '526px',
        bg:
          source === 'slack'
            ? 'testimonialCardSlack'
            : source === 'twitter'
            ? 'testimonialCardTwitter'
            : 'black',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 1,
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
        mb: 22,
        padding: '24px'
      }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          pb: '12px'
        }}>
        <Box
          sx={{
            flexGrow: '3'
          }}>
          <Image
            src={
              source === 'slack'
                ? QuotationsYellow
                : source === 'twitter'
                ? QuotationsPurple
                : QuotationsYellow
            }
            sx={{
              width: ['70px', '80px']
            }}
          />
        </Box>
        <Box
          sx={{
            margin: 'auto'
          }}>
          <Image
            src={
              source === 'slack' ? Slack : source === 'twitter' ? Twitter : ''
            }
            onClick={() => window.open(url, '_new')}
            sx={{
              transition: 'all 0.2s ease-in-out',
              ':hover': {
                cursor: 'pointer',
                transform: 'scale(1.2)'
              }
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: '100%',
          flex: '1 1 auto',
          mb: '28px',
          overflow: 'auto',
          ml: '10px',
          color:
            source === 'slack'
              ? 'testimonialCardSlackText'
              : source === 'twitter'
              ? 'testimonialCardTwitterText'
              : 'black',
          fontSize: '105%',
          fontFamily: 'sanserif',
          '& > .anchor-link': {
            opacity: 0,
            color: 'muted',
            fontSize: 5,
            position: 'relative',
            left: '10px',
            top: '-3px'
          },
          '&:hover > .anchor-link': {opacity: 1},
          '& > .anchor-link:hover': {opacity: 1, color: 'primary'}
        }}>
        {parsed}
      </Box>

      <Box
        onClick={() => window.open(url, '_new')}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          pb: '12px',
          transition: 'all 0.2s ease-in-out',
          ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.03)'
          }
        }}>
        <Box
          sx={{
            flexGrow: '3',
            fontFamily: 'serif',
            ml: '10px',
            fontWeight: 'bold',
            color:
              source === 'slack'
                ? 'testimonialCardSlackText'
                : source === 'twitter'
                ? 'testimonialCardTwitterText'
                : 'black',
            margin: 'auto'
          }}>
          {author_name}
        </Box>
        <Box
          sx={{
            margin: 'auto'
          }}>
          <Image
            src={author_image}
            sx={{
              borderRadius:
                source === 'slack'
                  ? '10%'
                  : source === 'twitter'
                  ? '50%'
                  : '50%',
              width: '66px',
              boxShadow:
                'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px'
            }}
          />
        </Box>
      </Box>
    </Flex>
  );
};
export default Card;
