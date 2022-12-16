import React from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure,Text} from '@chakra-ui/react';
import { AiOutlineUser } from "react-icons/ai";
import MultistepForm from './MultistepForm';
import { Navigate, useNavigate } from 'react-router-dom';
function Login() {
const{isOpen,onOpen,onClose} = useDisclosure();
const navigate =  useNavigate();
const handleclose = ()=>{
  onclose();
  return;
}
  return (
   <>
   <Button colorScheme='#161821' onClick={onOpen}><AiOutlineUser color="#fff"/></Button>
   <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent bg="black" border="1px solid #fff" >

          <ModalCloseButton color={"#fff"}/>
          <ModalBody>
            {/* this is from component */}
          <MultistepForm />
          </ModalBody>
        </ModalContent>
      </Modal>
   </>
  )
}

export default Login;




     
  

