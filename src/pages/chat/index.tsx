import React, { useState, useRef, useEffect } from 'react'
import * as i from './styles'
import { FiMail, FiLock } from "react-icons/fi";
import Modal from './ChatModal'


import { People } from './styles';

interface Props {
  isOpen: boolean,
  close: () => void
}

function handleClose() {
    close()
}

{/* OBJETOS PARA TESTES */ }
const DefaultPeopleArr = [{
        chat_id: 0,
        imgLink: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
        name: "User 1 Name",
        user_uuid: "XLPK123456789",
        lastMsgTime: "3:06 PM",
        previewMsg: "Prévia de Mensagem..."
      },
      {
        chat_id: 1,
        imgLink: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg",
        name: "User 2 Name",
        user_uuid: "XLPK987654321",
        lastMsgTime: "3:06 PM",
        previewMsg: "Prévia de Mensagem..."
}]
    
const DefaultMsgArr = [{
        chat_id: 0,
        user_uuid: "XLPK123456789",
        msg: "Olá Mundo Mensagem 1"
      },
      {
        chat_id: 0,
        user_uuid: "XLPK987654321",
        msg: "Ola Mundo Mensagem 2"
      },
      {
        chat_id: 1,
        user_uuid: "XLPK987654321",
        msg: "Mensagem 2"
}]

  

    
const Chat: React.FC<Props> = ({
  isOpen,
  close
}) => {
  return ( 
    <Modal isOpen={isOpen} close={handleClose}>
      <i.Wrapper>
            <i.Container>
                <i.Left>
                    {/* TOP */}
                    <i.People>
                        {/* PEOPLE */}
                    </i.People>
                </i.Left>
                <i.Right>
                    <i.Span state="name">"Username"</i.Span>
                </i.Right>
            </i.Container>
        </i.Wrapper>
    </Modal>
        
  );
};



export default Chat;
