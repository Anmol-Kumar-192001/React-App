import './resetLogin.css'
import InputBox from '../../commons/InputBox'

const ResetLogin = () => {
    return (
        <div className='main-card'>
            <div className="card2">
                <h5 className='text'>Log in to Capri</h5>
                <InputBox name='Email address or phone number' type='text'/> 
                <button className='login-btn'>Submit</button>
            </div>
        </div>
    )
}

export default ResetLogin