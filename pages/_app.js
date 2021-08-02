import './styles.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#FFB300',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
