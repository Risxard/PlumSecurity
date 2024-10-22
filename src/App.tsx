import React, { Suspense } from 'react';
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main";

const Footer = React.lazy(() => import('./Components/Footer/Footer'));
import './i18n';
import { ModalProvider } from './context/ModalContext';
import Modal from './Components/Modal/Modal';



function App() {
  return (
    <ModalProvider>
      <Modal />
      <Header />
      <Main />
      <Suspense>
        <Footer />
      </Suspense>
    </ModalProvider>
  )
}

export default App
