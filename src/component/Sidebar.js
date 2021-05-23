import  FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import styled from 'styled-components'
import React from 'react'
import  InsertCommentIcon from '@material-ui/icons/InsertComment';
import  InboxIcon  from '@material-ui/icons/Inbox';
import  DraftsIcon  from '@material-ui/icons/Drafts';
import  BookmarkBorderIcon  from '@material-ui/icons/BookmarkBorder';
import  PeopleAltIcon  from '@material-ui/icons/PeopleAlt';
import  AppsIcon  from '@material-ui/icons/Apps';
import  FileCopyIcon  from '@material-ui/icons/FileCopy';
import  ExpandLessIcon  from '@material-ui/icons/ExpandLess';
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import  AddIcon  from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase';

function Sidebar() {
    const [channels,loading, error]= useCollection(db.collection("rooms"));
   
    const [user]= useAuthState(auth);

    return (
       <SidebarContainer>
        <SidebarHeader>
         <SidebarInfo>
         <h2>CHAT TIME</h2>
         <h3><FiberManualRecordIcon/>
         {user.displayName}
         </h3>
         </SidebarInfo>
         <CreateIcon/>
        </SidebarHeader>
       {/*For Sidebar options We are having 3 cases 
            a) Normal Icons
            b) Chanel Names
            c) Add new Channel -> we use addChannelOption  
       */ }  
       
       
        
        
        
        <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
      <hr />

      {/*For Add Channel We are making use of new prompt */ }  
      <SidebarOption Icon={AddIcon} addChannelOption  title="Channels"/>
  
  
  {/*For rendering the data from the db to application*/}
       {channels?.docs.map(doc => (                            
    <SidebarOption 
       key= {doc.id}                 
       id = {doc.id}       // the one which let me to search for 2 days
       title={doc.data().name}
       />
   
  

       ))}  
       
      
      
       </SidebarContainer>
    );

}

export default Sidebar

const SidebarContainer=styled.div`
background-color:var(--slack-color);
color:white;
flex:0.3;
margin-top:60px;
max-width:260px;
border-top: 1px solid #49274b;
overflow-y:scroll;
::-webkit-scrollbar {
  width: 10px;
}


>hr{
    margin-top:10px;
    margin-bottom:10px;
 
    border: 1px solid #49274b;
}
`

;

const SidebarHeader=styled.div`
display :flex;
padding:13px;
padding-bottom:0;
border-bottom: 1px solid #49274b;

> .MuiSvgIcon-root{
    padding:8px;
    color: #49274b;
    font-size:18px;
    background-color:white;
    border-radius:999px;

}

`
const SidebarInfo=styled.div`
flex:1;


> h2{
    font-size:15px;
    font-weight:900;
    margin-bottom:5px;
    margin-left: 10px;
}
> h3{
    display:flex;
    font-size:13px;
    font-weight:400;
    align-items:center;}
> h3 > .MuiSvgIcon-root{
    font-size:14px;
    margin-top:1px;
    margin-right:2px;
    color:green;
}    
`
