import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default App;
