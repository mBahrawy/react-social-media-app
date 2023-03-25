import AppReduxProvider from "../AppReduxProvider/AppReduxProvider.component";
import Loader from "../Loader/Loader.component";
import Container from "./AppSettingsHOC.style";

type AppSettingsHocProps = {
  children: JSX.Element;
};

function AppSettingsHoc({ children }: AppSettingsHocProps): JSX.Element {
  return (
    <Container>
      <AppReduxProvider>
        <Loader id="app-loader" />
        {children}
      </AppReduxProvider>
    </Container>
  );
}

export default AppSettingsHoc;
