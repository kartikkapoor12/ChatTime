import { Button } from '@material-ui/core'
import React, {useRef,useState} from 'react'
import styled from 'styled-components'
import { auth, db } from '../firebase'
import firebase from 'firebase'
import { SettingsOutlined } from '@material-ui/icons'
import { useAuthState } from "react-firebase-hooks/auth";
import Picker from "emoji-picker-react";
function ChatInput({channelName, channelId, chatRef}) {
    const [input, setInput] = useState("");
    const [user]= useAuthState(auth);

    const sendMessage = (e) =>{
     e.preventDefault();    //prevents refreshing 

        if (!channelId){
            return  false;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message:input,  
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user :user.displayName,
            userImage:user.photoURL,
        
        });
        chatRef.current.scrollIntoView({
            behavior: "smooth",
          });

        setInput(""); 
   
    };

   


    return (
    <ChatInputContainer>
 
        <form>
          <input 
          value ={input} 
          onChange= {(e)=> setInput(e.target.value)}
          placeholder = {`Message #${channelName}`} 
          />

         

           <Button hidden type ='submit' onClick={sendMessage}>
                   SEND
            </Button>
        </form>
        
    </ChatInputContainer>
        )
}

export default ChatInput
const ChatInputContainer = styled.div`
border-radius:20px;
> form{
    justify-content: center;
    display :flex;
    position :relative;
}
> form > input{
    position:fixed;
    bottom: 30px;
    width : 60%;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 20px;
    outline:none;

} 
> form >button {
display :none !important;
}
`;