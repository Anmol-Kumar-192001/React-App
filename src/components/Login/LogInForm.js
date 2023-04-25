import './logInForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useState } from 'react';

const LoginForm = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        const url = process.env.REACT_APP_LOGIN_API
        console.log("inside submit");
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ username: emailId, password: password, app: 'DSA' }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then(response => {
                console.log("response is", response.success);
                navigate('/Home')
            })
            .catch(error => {
                console.log(error)
            })
    }

    // console.log("login api is", process.env.REACT_APP_LOGIN_API);

    const Error = ({ message }) => {
        return (
            <div className='error-text'>
                <p className='p-text'>{message}</p>
            </div>
        )
    }
    console.log('asasd', errors);

    const handleEmailChange = (e) => {
        setEmailId(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='main-card'>
            <div className="card">
                <h5 className='text'>Log in to Capri</h5>
                <form className='form-box' onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-div'>
                        <input {...register("email", {
                            required: 'Email address is required',
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Enter valid email id' }
                        })} placeholder='Email address' type='text' className='text-input' onChange={handleEmailChange} />
                        <Error message={errors?.email?.message} />
                    </div>
                    <div className='input-div'>
                        <input {...register("password", {
                            required: 'Password is required',
                            minLength: 'Password must be of atleast 8 characters',
                            pattern: {value:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,message:'Password must be comprised of atleast one character,number and letter'}
                        })} placeholder='Password' type='password' className='text-input' onChange={handlePasswordChange} />
                        <Error message={errors?.password?.message} />
                    </div>
                    <input type="submit" className='login-btn' />
                </form>

                <Link to='/ResetLogin' style={{ textDecoration: 'none', fontFamily: 'cursive' }}>Forgot Password?</Link>
            </div>
        </div>
    )
}

export default LoginForm