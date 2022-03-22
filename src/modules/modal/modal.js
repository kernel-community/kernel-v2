import React, {Children} from 'react';
import {jsx, Flex, Text, Box, Button} from 'theme-ui';

const Modal = ({isModalVisible, setModalVisible}) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#47556990',
          backgroundOpacity: 0.5,
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10,
          backdropFilter: 'blur(10px)',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Flex
          sx={{
            flexDirection: 'column',
            marginY: 'auto',
            paddingTop: '250px',
            gap: 0
          }}>
          <Flex
            sx={{
              width: '471px',
              height: '361px',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              backgroundColor: '#212144',
              marginX: 'auto',
              flexDirection: 'column'
            }}>
            <Text
              sx={{
                color: '#fff',
                textAlign: 'center',
                margin: 'auto',
                fontWeight: 'bold'
              }}>
              To reveal the answer, you need to <br /> register for our course.
            </Text>
            <Flex sx={{flexDirection: 'column'}}>
              <Text
                sx={{
                  color: '#fff',
                  textAlign: 'center',
                  margin: 'auto',
                  fontWeight: 'bold'
                }}>
                You can do this by staking
              </Text>
              <Text
                sx={{
                  margin: 'auto',
                  color: '#8C65F7',
                  fontSize: '48px',
                  fontWeight: 'medium'
                }}>
                100 DAI
              </Text>
            </Flex>
            <Text
              sx={{
                width: '310px',
                color: '#fff',
                textAlign: 'center',
                margin: 'auto'
              }}>
              You can claim this DAI back after{' '}
              <Text sx={{fontWeight: 'bold'}}>two months</Text>. You{' '}
              <Text sx={{fontWeight: 'bold'}}>learn for free</Text> and we use
              the yield to keep the lights on.
            </Text>
          </Flex>
          <Flex
            sx={{
              width: '471px',
              height: '100px',
              borderBottomRightRadius: '12px',
              borderBottomLeftRadius: '12px',
              backgroundColor: '#343457',
              marginX: 'auto',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingX: '20px'
            }}>
            <Text
              sx={{
                color: '#fff',
                textDecoration: 'underline',
                justifySelf: 'end'
              }}>
              Learn More.
            </Text>
            <Button sx={{borderRadius: '4px', fontWeight: 'bold'}}>
              Register
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Modal;
