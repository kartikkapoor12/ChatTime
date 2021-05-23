import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase';
import { useDispatch } from 'react-redux'
import { useCollection } from 'react-firebase-hooks/firestore';
import { enterRoom } from '../features/counter/appSlice';



function SidebarOption({Icon, title, addChannelOption, id }) {
 
    const dispatch = useDispatch(); 


    const addChannel=()=>{  
      const channelName= prompt('Please enter the the channel name');
         if(channelName)
         {
           db.collection('rooms').add({
                                           // add a room in the database that is the channel name.
            name:channelName,
            });   
         }

 }
 const selectChannel=()=>{
if(id){
    dispatch(enterRoom({
        roomId:id
         }))
     
   }
 };

    return( <SidebarOptionContainer                                                        // If addChannel Prompt is passed use -> addChannel() else -> selectChannel()
     onClick={addChannelOption ? addChannel : selectChannel}
    >

    {Icon && <Icon fontSize ='small' style={{padding:10}}/>}
     {Icon ? (     //Ternary Operator
         <h3> {title}</h3>
     
         ):(
             <SidebarOptionChannel>
                 <span>#</span>{title}
             </SidebarOptionChannel>
         )}
</SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
display:flex;
font-size:12px;
align-items:center;
padding-left:2px;
cursor:pointer;

:hover{
    opacity:0.9;
    background-color: #340e36;
}
>h3{
    font-weight:400;
    font-size:10px;
}
> h3 > span{
padding:15px;

}
`
const SidebarOptionChannel=styled.h3`
padding:10px 0;
font-weight:300;
font-size:10px;

`