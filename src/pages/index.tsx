import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { ConnectButton } from "@components/ConnectButton";

export default function Main() {
  return (
    <Flex h="100vh" alignItems="stretch">
      <Flex
        maxWidth="600"
        width="100%"
        direction="column"
        placeContent="center"
        p="10"
      >
        <Heading as="h1" size="4xl" noOfLines={1}>
          Hi there 👋
        </Heading>
        <Text as="h2" fontSize="2xl">
          Welcome to web 3.0
        </Text>
        <ConnectButton />
      </Flex>
      <Box
        flex="1"
        bgSize="cover"
        bgImage={"url(/images/main-background.png)"}
      />
    </Flex>
  );
}
