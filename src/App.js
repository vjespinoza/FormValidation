import Form from "./components/Form/Form";
import GlobalStyles from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <div>
                    <Form />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
