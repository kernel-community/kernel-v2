/** @jsx jsx */
import {useState} from 'react';
import {jsx, Flex} from 'theme-ui';
import {Icon} from '@makerdao/dai-ui-icons';
import {motion} from 'framer-motion';

const Flash = ({children}) => {
  return (
    <Flex
      sx={{
        borderRadius: '20px',
        minHeight: '400px',
        mb: 4,
        p: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow:
          'inset 0 0px 30px rgba(0,0,0,0.30), inset 0 0px 4px rgba(0,0,0,0.22)'
      }}>
      <div>
        <div sx={{mb: 4, position: 'relative'}}>
          <Flex
            sx={{
              width: '343px',
              height: '439px',
              borderRadius: 7,
              bg: 'backgroundAlt',
              color: 'onBackgroundAlt',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1,
              boxShadow:
                '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
            }}>
            <Flex
              sx={{
                p: 3,
                fontSize: 5,
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                flex: '1 1 auto'
              }}>
              What kinds of conversations do we build together in Kernel?
            </Flex>
            <Flex
              sx={{
                height: '32%',
                bg: 'primaryMuted',
                borderTop: '1px solid',
                borderColor: 'background',
                position: 'relative',
                color: 'text',
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexDirection: 'column'
              }}>
              <div
                sx={{
                  position: 'absolute',
                  boxShadow: '0px 0 10px rgba(0,0,0,0.3)',
                  top: '-13px',
                  height: '13px',
                  width: '100%',
                  cursor: 'pointer'
                }}></div>
              <div sx={{fontSize: 4, fontWeight: 'bold', mb: 2}}>
                Reveal the Answer
              </div>
              <div sx={{filter: 'blur(5px)'}}>Horizontal</div>
            </Flex>
          </Flex>
          <Flex
            sx={{
              width: 'calc(343px - 4%)',
              height: '439px',
              borderRadius: 7,
              bg: 'backgroundAlt',
              border: '1px solid',
              borderColor: 'backgroundAlt',
              color: 'onBackgroundAlt',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '10px',
              zIndex: 0,
              opacity: '72%',
              boxShadow:
                '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
            }}></Flex>
          <Flex
            sx={{
              width: 'calc(343px - 8%)',
              height: '439px',
              borderRadius: 7,
              bg: 'backgroundAlt',
              color: 'onBackgroundAlt',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '20px',
              zIndex: -1,
              opacity: '32%',

              boxShadow:
                '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
            }}></Flex>
        </div>

        <Flex sx={{color: 'flashText', fontWeight: '600'}}>
          <Flex
            sx={{
              flex: 1,
              borderRadius: 6,
              p: '8px',
              bg: 'primary',
              mr: 3,
              cursor: 'pointer',
              alignItems: 'center',
              fontSize: '14px',
              justifyContent: 'space-around'
            }}>
            <Icon size={'28px'} name="refresh" /> Didn't remember
          </Flex>
          <Flex
            sx={{
              flex: 1,
              borderRadius: 6,
              p: '8px',
              bg: 'primary',
              cursor: 'pointer',
              alignItems: 'center',
              fontSize: '14px',
              justifyContent: 'space-around'
            }}>
            <Icon size={'22px'} name="checkmark" />
            Remembered
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default Flash;
