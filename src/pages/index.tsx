import { Flex } from "@chakra-ui/react";
import { ConnectButton } from "@components/ConnectButton";

export default function Main() {
  return (
    <Flex justify="center" alignItems="center" bg="white" p="10">
      <ConnectButton />
    </Flex>
  );
}
