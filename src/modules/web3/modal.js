import React, {useEffect, useState} from 'react';
import {useAccount, useProvider, useSigner} from 'wagmi';
import {Flex, Text, Box, Button} from 'theme-ui';
import {add, getUnixTime} from 'date-fns';
import {useSignPermitTransaction} from '../../hooks';
import {getDaiNonce, permitAndRegister} from '../../course/course';
import {isRegistered} from '../../course/course';

//@todo @Malayvasa make modal dismissable

const Web3 = () => {
  // @todo setting `true` is a workaround to display modal correctly. need a better solution
  const provider = useProvider();
  const [{data: accountData}] = useAccount();
  const [{data: signer}] = useSigner();
  const signTransaction = useSignPermitTransaction({
    provider,
    address: accountData?.address
  });

  const [isUserRegistered, setIsUserRegistered] = useState(true);

  useEffect(() => {
    async function get() {
      setIsUserRegistered(await isRegistered(accountData.address, provider));
    }
    if (accountData?.address && provider) {
      get();
    }
  }, [accountData?.address, provider]);

  const handleOnClickRegister = async () => {
    const expirationTime = add(new Date(), {minutes: 30});
    const expiry = getUnixTime(expirationTime);
    const nonce = await getDaiNonce(accountData?.address, provider);

    const {v, r, s} = await signTransaction({
      nonce,
      expiry
    });

    await permitAndRegister(signer, nonce, expiry, v, r, s);
  };

  return (
    <div>
      {!isUserRegistered && accountData && (
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
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              marginY: 'auto',
              paddingTop: '250px',
              gap: 0
            }}
          >
            <Flex
              sx={{
                width: '471px',
                height: '361px',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
                backgroundColor: '#212144',
                marginX: 'auto',
                flexDirection: 'column'
              }}
            >
              <Text
                sx={{
                  color: '#fff',
                  textAlign: 'center',
                  margin: 'auto',
                  fontWeight: 'bold'
                }}
              >
                To reveal the answer, you need to <br /> register for our
                course.
              </Text>
              <Flex sx={{flexDirection: 'column'}}>
                <Text
                  sx={{
                    color: '#fff',
                    textAlign: 'center',
                    margin: 'auto',
                    fontWeight: 'bold'
                  }}
                >
                  You can do this by staking
                </Text>
                <Text
                  sx={{
                    margin: 'auto',
                    color: '#8C65F7',
                    fontSize: '48px',
                    fontWeight: 'medium'
                  }}
                >
                  100 DAI
                </Text>
              </Flex>
              <Text
                sx={{
                  width: '310px',
                  color: '#fff',
                  textAlign: 'center',
                  margin: 'auto'
                }}
              >
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
              }}
            >
              <Text
                sx={{
                  color: '#fff',
                  textDecoration: 'underline',
                  justifySelf: 'end'
                }}
              >
                Learn More.
              </Text>
              <Button
                onClick={handleOnClickRegister}
                sx={{borderRadius: '4px', fontWeight: 'bold'}}
              >
                Register
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}
    </div>
  );
};

export default Web3;
