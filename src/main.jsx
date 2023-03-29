import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider } from "@mui/material/styles";

//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/righteous/400.css';

//import index.css y CssBaseline
import "../src/assets/styles/index.css"
import { CssBaseline } from "@mui/material";

// cambiar theme de app
const theme = createTheme({
  palette: {
    primary: {
      main: "#5DC5EA",
    },
    secondary: {
      main: "#f50057",
    },
  },
});


import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
