
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Chat from './component/Chat';
import Login from './component/Login'
import { useAuthState } from "react-firebase-hooks/auth"
import {auth} from './firebase'
import Spinner from 'react-spinkit'

function App() {
  
  const [user,loading] = useAuthState(auth);


  if(loading){
    return(
      <AppLoading><AppLoadingContent>
         <img src =" https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
    alt =""/>


<Spinner
name = "ball-spin-fade-loader"
color= "purple"
fadeIn="none" 
></Spinner>

        </AppLoadingContent></AppLoading>
    )
  }
  return (  
    <div className="App">
      <Router>
        {!user ?( 
          <Login/>
        ) :(
      <>
      <Header/>
      <AppBody>
      <Sidebar/>
        <Switch>
          <Route path="/" exact>
          <Chat/>
          </Route>
        </Switch>
        </AppBody>
      </>
      ) }
    </Router>
    </div>
  );
}

export default App;
const AppBody=styled.div`
display:flex;
height:100vh;
`
const AppLoadingContent= styled.div`

text-align: center;
padding-bottom:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

>img{
  height: 100px;
  padding: 20px;
  margin-bottom:40px;
}`
const AppLoading = styled.div`
display:grid;
place-items:center;
height:100vh;
width: 100%;
`