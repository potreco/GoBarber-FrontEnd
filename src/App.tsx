import React from 'react';

// Pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    {/* <SignUp /> */}
    <GlobalStyle />
  </>
);

export default App;
