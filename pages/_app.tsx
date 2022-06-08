// pages/_app.js
import theme from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default appWithTranslation(MyApp)
