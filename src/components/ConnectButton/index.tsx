import Image from "next/image";
import { HStack, Stack, Button, Text } from "@chakra-ui/react";
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";

function ConnectButton() {
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();

  const address = useAddress();
  const isConnected = !!address;

  const truncateAddress = () => {
    if (address) {
      return (
        address.substring(0, 6) + "..." + address.substring(address.length - 4)
      );
    }
  };

  return (
    <Stack>
      {isConnected ? (
        <HStack
          p="5"
          border="1px"
          borderColor="gray.700"
          borderRadius="md"
          justify="space-between"
          mt="5"
        >
          <Image src="/images/metamask_fox.svg" width="48" height="48" />
          <Text>Connected as {truncateAddress()}</Text>

          <Button
            colorScheme="teal"
            variant="outline"
            alignSelf="right"
            onClick={disconnect}
          >
            Disconnect
          </Button>
        </HStack>
      ) : (
        <Stack direction="row" align="center">
          <Button
            onClick={connectWithMetamask}
            colorScheme="black"
            bg="white"
            mt="5"
            _hover={{ bg: "gray.300" }}
          >
            <Image src="/images/metamask_fox.svg" width="32" height="32" />
            <Text color="gray.800"> Connect to your wallet</Text>
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

export { ConnectButton };
