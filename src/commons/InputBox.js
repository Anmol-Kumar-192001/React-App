const InputBox = ({ name,type }) => {
    return (
        <form className='form-box'>
            <input type={type} placeholder={name} className='input-box' />
        </form>
    )
}

export default InputBox