import './logInForm.css'
import { Link } from 'react-router-dom'
import InputBox from '../../commons/InputBox'

const LoginForm = () => {
    return (
        <div className='main-card'>
            <div className="card">
                <h5 className='text'>Log in to Capri</h5>
                <form className='form-box'>
                    <InputBox name='Email address or phone number' type='text' />
                    <InputBox name='Password' type='password' />
                </form>
                <button className='login-btn'>Log in</button>
                <Link to='/ResetLogin' style={{ textDecoration: 'none', fontFamily: 'cursive' }}>Forgot Password?</Link>
            </div>
        </div>
    )
}

export default LoginForm