import { useEffect } from "react"
import LoginForm from "../components/Login/LogInForm"
import { useNavigate } from "react-router-dom"

export default function Login() {

const navigate=useNavigate();

useEffect(()=>{
  let login=localStorage.getItem('login')
  if(login){
      navigate('home')
  }

},[])

  return (
    <LoginForm />
  )
}