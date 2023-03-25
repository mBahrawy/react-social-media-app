import AppReduxProvider from '../AppReduxProvider/AppReduxProvider.component'
import Header from '../Header/Header.component'
import Loader from '../Loader/Loader.component'
import Container from './AppSettingsHOC.style'

function AppSettingsHoc({ children }): JSX.Element {
  return (
    <Container>
      <AppReduxProvider>
        <Loader id='app-loader' />
        <Header />
        {children}
      </AppReduxProvider>
    </Container>
  )
}

export default AppSettingsHoc
