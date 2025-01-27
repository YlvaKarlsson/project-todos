import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Header />
        <ToDoList />
        <Footer />
      </PersistGate>
    </Provider>
  );
};
