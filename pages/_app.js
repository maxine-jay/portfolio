import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@components/Layout";
import '@fontsource/raleway/200.css'
import '@fontsource/raleway/400.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import theme from "styles"

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
