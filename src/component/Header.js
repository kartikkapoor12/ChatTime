import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase';

function Header() {
const [user]= useAuthState(auth);

    return (
    <HeaderContainer>
   <HeaderLeft>
    <HeaderAvatar
    onClick= {()=>auth.signOut()}  
       alt= {user?.displayName}
       src = { user?.photoURL}
       />
   <AccessTimeIcon  />
   </HeaderLeft>
<HeaderSearch>
    <SearchIcon/>
    <input placeholder ="Search over here...."/>
</HeaderSearch>
<HeaderRight>
    <HelpOutlineIcon/>
</HeaderRight>
   </HeaderContainer>
    );
}

export default Header


const HeaderContainer = styled.div`
display:flex;
position:fixed;
width:100%;
justify-content:space-between;
padding: 0 10px;
background-color:var(--slack-color); //Declared the Variable as a color 
color: white;
height:60px;

` 
const HeaderLeft=styled.div`
flex:0.3;
display:flex;

align-items:center;
margin-left:20px;
> .MuiSvgIcon-root {
    margin-left:auto;
    margin-right:60px;
}
`
const HeaderSearch=styled.div`
flex:0.4;
display:flex;
opacity:1;
border-radius:6px;
background-color:#421f44;
text-align:center;
color:gray;
padding: 0  50px;
margin:auto;
border: 1px gray solid;
> input{
background-color:transparent;
border: none;
text-align:center;
min-width: 30vw;
outline:none;
color: white;
}

`
const HeaderRight=styled.div`
color:white;
flex:0.3;
display:flex;
align-items:flex-end;
padding:15px;
> .MuiSvgIcon-root{
    margin-left:auto;
    margin-right:60px;
}
`

const HeaderAvatar = styled(Avatar)`
cursor:pointer;
 
:hover{
  opacity : 0.8;
}

`




