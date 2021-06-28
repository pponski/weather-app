import { ColorModeScript } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../styles/theme"
import '../styles/global.css'


function App({ Component, pageProps }) {


  return (
    <ChakraProvider>
       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App