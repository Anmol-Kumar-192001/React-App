import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {

const {Component}=props
const navigate=useNavigate()

// console.log("component is",props);

useEffect(()=>{
    let login=localStorage.getItem('login')
    if(!login){
        navigate('/')
    }

},[])

  return (
    <div><Component /></div>
  )
}

export default Protected