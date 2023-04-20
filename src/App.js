import LoginForm from "./screens/LoginForm";
import NavBar from "./components/NavBar/NavBar";
import ResetLogin from "./components/ResetLogin/ResetLogin";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' Component={LoginForm} />
        <Route path='/ResetLogin' Component={ResetLogin} />
      </Routes>
    </>
  );
}

export default App;
