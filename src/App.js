import React from "react"
import Header from "./Components/Header"
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core"
import Progression from "./Components/Progression"
import Main from "./Components/Main"
import { GlobalContext } from "./Components/Context"
import { Fade } from "react-reveal"
import "./assets/App.css"
import styled from 'styled-components'

const App = () => {
    const theme = createMuiTheme({
        palette: {
            type: "dark",
        },
        typography: {
            fontFamily: "'Montserrat', 'Fira Sans', sans-serif",
            h1: {
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "3rem",
                "@media (max-width:1277px)": {
                    fontSize: "2rem",
                },
            },
            h2: {
                fontFamily: "Fira Sans",
                fontWeight: "bold",
                fontSize: "8rem",
                "@media (max-width:650px)": {
                    fontSize: "4rem",
                },
            },
            body1: {
                fontFamily: "Montserrat",
            },
        },
    });

    const ContainerDiv = styled.div`
        border: 2px solid rgba(255,255,255, 0.9);
        min-height: 100%;
        min-width: 100%;
        display: flex;
        flex-direction: column;
        padding: 3em 0;
        margin: auto;
        @media (max-width: 480px) {
            border: none;
            padding-top: 0;
        }
        @media (min-width: 1490px) {
            min-width: 1490px;
        }
    `;

    const AppContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        @media (max-width: 480px) {
            align-items: flex-start;
        }
    `

    return (
        <AppContainer>
            <Fade duration={6000}>
                <ContainerDiv>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <GlobalContext>
                            <Fade up duration={2000}>
                                <Header />
                            </Fade>
                            <Fade delay={1000} duration={2000}>
                                <Main />
                            </Fade>
                            <Fade delay={2000} duration={2000}>
                                <Progression />
                            </Fade>
                        </GlobalContext>
                    </ThemeProvider>
                </ContainerDiv>
            </Fade>
        </AppContainer>
    )
}

export default App
