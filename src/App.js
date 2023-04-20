import LoginForm from "./screens/LoginForm";
import NavBar from "./components/NavBar/NavBar";
import ResetLogin from "./components/ResetLogin/ResetLogin";
import ToDoCard from "./components/ToDoScreen/ToDoCard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' Component={LoginForm} />
        <Route path='/resetLogin' Component={ResetLogin} />
        <Route path='/todo' Component={ToDoCard} />
      </Routes>
    </>
  );
}

export default App;
