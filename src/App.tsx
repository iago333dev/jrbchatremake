import React from 'react';


import SigninPage from './pages/signin';
import Chat from './pages/chat'
import GlobalStyle from './styles/globals';

const App: React.FC = (props) => {
  const [modalChat, setModalChat] = React.useState(true)

  return (
      <Chat isOpen={modalChat} close={() => setModalChat(false)} />         
  )
}

export default App;