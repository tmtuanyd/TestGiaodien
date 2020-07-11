import React, {Component, Suspense} from 'react';
import '../App.css';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from '@material-ui/styles';
import Url from "./Router/DieuhuongURL";
import {
    BrowserRouter as Router,
} from "react-router-dom";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Montserrat', 'sans-serif'
        ].join(','),
    }
});

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>

                    <div className="App">
                        <Router>
                            <Url/>
                        </Router>
                    </div>

            </ThemeProvider>

        );
    }
}
export default App;

