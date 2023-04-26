import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import { Link,useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import './logInForm.css'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const navigate = useNavigate()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event, buttonEvent) => {
    buttonEvent.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("data is",event);
    console.log({
      email: event.email,
      password: event.password,
    });
    // setEmailId(data.get('email'))
    // setPassword(data.get('password'))

    const url = process.env.REACT_APP_LOGIN_API
    console.log("inside submit");
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({ username: event.email, password: event.password, app: 'DSA' }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
        .then(response => {
            console.log("response is", response);
            if(response.success==='true'){
            localStorage.setItem('login',true)
            navigate('home')
            }
            else{
              alert('Invalid credentials')
            }
        })
        .catch(error => {
            console.log(error)
            alert('Server Error')
        })

  };

  const Error = ({ message }) => {
    return (
        <div className='error-text'>
            <p className='p-text'>{message}</p>
        </div>
    )
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              {
              ...register('email', {
                required: 'Email address is required',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Enter valid email id' }
              })
              }
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Error message={errors?.email?.message} />
            <TextField
            {...register("password", {
              required: 'Password is required',
              minLength: {value:8,message:'Password must be of atleast 8 characters'},
              pattern: {value:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,message:'Password must be comprised of atleast one character,number and letter'}
            })}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Error message={errors?.password?.message} />
           
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor:'purple'}}
            >
              Sign In
            </Button>
            
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2"> */}
                <Link to='/resetLogin' style={{ cursor: "pointer", textDecoration: 'none', fontFamily: 'cursive' }}>
                  Forgot password?
                {/* </Link> */}
                </Link>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
