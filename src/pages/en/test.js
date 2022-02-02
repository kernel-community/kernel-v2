import React from 'react';
import {useAccount, useConnect} from 'wagmi';
import {Button} from '@modules/ui';

const Page = () => {
  const [
    {data: accountData, error: accountError, loading},
    disconnect
  ] = useAccount({
    fetchEns: false
  });

  const [{data, error}, connect] = useConnect();

  return (
    <div>
      {data.connectors.map((x) => (
        <Button disabled={!x.ready} key={x.id} onClick={() => connect(x)}>
          {x.name}
          {!x.ready && ' (unsupported)'}
        </Button>
      ))}

      {error && <div>{error?.message ?? 'Failed to connect'}</div>}
    </div>
  );
};

export default Page;
