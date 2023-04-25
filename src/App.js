import LoginForm from "./screens/LoginForm";
import NavBar from "./screens/NavBar";
import ResetLogin from "./screens/ResetLogin";
import ToDoCard from "./screens/ToDoScreen";
import AxiosPractice from "./screens/AxiosPractice";
import LazyLoading from "./screens/LazyLoading";
import Styled from "./screens/Styled";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import MainHeader from "./screens/MainHeader";
import Error from "./screens/Error";
import Protected from "./screens/Protected";

const App = () => {

  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' Component={MainHeader} >
          <Route index element={<LoginForm/>} />
          <Route path='home' element={<Protected Component={Home} />}  />
        </Route>
     
        <Route path='/resetLogin' Component={ResetLogin} />
        <Route path='/todo' Component={ToDoCard} />
        <Route path='/axios' Component={AxiosPractice} />
        <Route path='/lazyloading' Component={LazyLoading} />
        <Route path='/styled' Component={Styled} />
        <Route path="*" Component={Error} />
      </Routes>
    </>
  );
}

export default App;
