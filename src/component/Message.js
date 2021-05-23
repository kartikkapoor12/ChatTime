import React from 'react'
import styled from 'styled-components'
function Message({message, timestamp, user, userImage}) {
    return <MessageContainer>
 <img src ={userImage} alt=""/>
 <MessageInfo>
    <h4>
        {user}{' '}
        <span>
            {new Date(timestamp?.toDate()).toUTCString()}

        </span>
    </h4>
<p>{message}</p>
 </MessageInfo>

    </MessageContainer>
}

export default Message
const MessageContainer = styled.div`
display : flex;
align-items:center;
padding : 20px;

> img {
    height: 40px;
    border-radius:10px;
}
`;
const MessageInfo = styled.div`
padding-left:10px;

> h4{
color:white;
font-weight:300;
margin-left:4px;
font-size:10px;
}
>p{
    
    padding: 5px;
          background: white;
          max-width: 80%;
          display: inline-block;
          text-align: left;
          word-wrap: break-word;
          border-radius: 5px;
          text-indent: length;
          white-space: pre-wrap;
}
`;
