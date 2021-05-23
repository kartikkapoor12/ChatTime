import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ChatInput from './ChatInput';
import {selectRoomId} from "../features/counter/appSlice"
import {useCollection, useDocument} from 'react-firebase-hooks/firestore'
import { useSelector } from 'react-redux';
import {db, firebaseApp} from '../firebase'
import Message from './Message'
function Chat() {
 
    
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection("rooms")
        .doc(roomId)
    );
    const [roomMessages, loading ] = useCollection(
        roomId && 
        db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp","asc")
    );
    const chatRef=useRef(null);
    useEffect (()=>{
        chatRef?.current?.scrollIntoView({behavior:"smooth",
    });
    },[roomId, loading]);
 

    return (
    
    <ChatContainer>
        {roomDetails && roomMessages &&(
     <>
  <Header>      
       <HeaderLeft>
        <h4><strong>#{roomDetails?.data().name}</strong></h4>
        <StarBorderOutlinedIcon/>
        </HeaderLeft>

       <HeaderRight>
          <p>
             <InfoOutlinedIcon /> Details
          </p>
      </HeaderRight>
   </Header>
   <ChatMessages>
 
{roomMessages?.docs.map((doc)=>{
    const{message, timestamp, user, userImage}=doc.data();
 
    return(
      <Message 
        key={doc.id}
        message={message}
        timestamp={timestamp}
        user={user}
        userImage={userImage}
        />);
   


        
})}



  


<ChatBottom ref ={chatRef}/>

   </ChatMessages>

   <ChatInput
   
       chatRef = {chatRef}
       channelName={roomDetails?.data().name}
       channelId={roomId} />
   </> 
   )}
    </ChatContainer>
    );
}
export default Chat

const Header = styled.div`
display:flex;
justify-content: space-between;
margin-top:3rem;
padding:20px;
color:white;
border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
display:flex;
align-items:center;

> h4{
    display:flex;
    text-transform:lowercase;
    margin-right:10px;
}

> h4 > .MuiSvgIcon-root{
    margin-left:10px;
    font-size:10px;
}
`;
const HeaderRight = styled.div`
> p{
    display:flex;
align-items:center;
font-size:14px;

}
>p > .MuiSvgIcon-root{
margin-right: 5px !important;
font-size: 16px;

}
`;
const ChatMessages = styled.div``

const ChatContainer = styled.div`
flex:0.7;
flex-grow:1;
overflow-y:scroll;
::-webkit-scrollbar {
  width: 20px;}

background:url("https://wallpaperaccess.com/full/1155017.jpg");
background-repeat:no-repeat;
background-size:120%;
background-position:50%;


    
`
const ChatBottom = styled.div`
padding-bottom:200px;
`
