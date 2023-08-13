import LoginForm from "./screens/LoginForm";
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
import About from "./screens/About";
import Contact from "./screens/Contact";
import Practice from "./components/Practice";
import CustomHook from "./components/CustomHook";
import Test from "./components/Test";
import Promise1 from "./components/Promise1";
import PromiseAll from "./components/PromiseAll";
import Comment from "./components/Comment";
import CommonComment from "./components/CommonComment";
import Shimmer from "./components/Shimmer";

const App = () => {

  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' Component={MainHeader} >
          <Route index element={<LoginForm/>} />
          <Route path='home' element={<Protected Component={Home} />}  />
          <Route path='about' element={<Protected Component={About} />}  />
        </Route>
     
        <Route path='/resetLogin' Component={ResetLogin} />
        <Route path='/todo' Component={ToDoCard} />
        <Route path='/axios' Component={AxiosPractice} />
        <Route path='/lazyloading' Component={LazyLoading} />
        <Route path='/styled' Component={Styled} />
        <Route path='/contact' Component={Contact} />
        <Route path='/practice' Component={Practice} />
        <Route path='/customHook' Component={CustomHook} />
        <Route path='/test' Component={Test} />
        <Route path='/promise' Component={Promise1} />
        <Route path='/promiseAll' Component={PromiseAll} />
        <Route path='/comment' Component={Comment} />
        <Route path='/commoncomment' Component={CommonComment} />
        <Route path='/shimmer' Component={Shimmer} />
        <Route path="*" Component={Error} />
      </Routes>
    </>
  );
}

export default App;
