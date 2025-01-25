import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'
import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
            <h1>MyContacts</h1>
        </Container>
    </ThemeProvider>
  );
}

export default App;
