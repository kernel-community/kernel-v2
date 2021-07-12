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
      onClick={() => window.open(url, '_new')}
      sx={{
        width: ['100%', '400px'],
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
        padding: '24px',
        ':hover': {
          boxShadow:
            'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
          borderRadius: '0.2%',
          cursor: 'pointer'
        }
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
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          pb: '12px'
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
              width: ['76px', '86px']
            }}
          />
        </Box>
      </Box>
    </Flex>
  );
};
export default Card;
