import Form from "./components/Form/Form";
import GlobalStyles, { AppStyle } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <AppStyle>
                    <Form />
                </AppStyle>
            </ThemeProvider>
        </>
    );
}

export default App;
