import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'

export default ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
