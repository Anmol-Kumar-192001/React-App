import LoginForm from "./screens/LoginForm";
import NavBar from "./screens/NavBar";
import ResetLogin from "./screens/ResetLogin";
import ToDoCard from "./screens/ToDoScreen";
import AxiosPractice from "./screens/AxiosPractice";
import LazyLoading from "./screens/LazyLoading";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' Component={LoginForm} />
        <Route path='/resetLogin' Component={ResetLogin} />
        <Route path='/todo' Component={ToDoCard} />
        <Route path='/axios' Component={AxiosPractice} />
        <Route path='/lazyloading' Component={LazyLoading} />
      </Routes>
    </>
  );
}

export default App;
