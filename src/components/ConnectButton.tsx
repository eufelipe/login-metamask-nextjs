import { useAddress, useMetamask } from "@thirdweb-dev/react";

import { Button } from "@chakra-ui/react";

function ConnectButton() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  return (
    <>
      {address ? (
        <h4>Connected as {address}</h4>
      ) : (
        <Button onClick={connectWithMetamask}>Connect to your wallet</Button>
      )}
    </>
  );
}

export { ConnectButton };
