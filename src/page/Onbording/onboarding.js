import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainImg from '../../assest/images/D&DhomeMain.png';
import GoogleButton from 'react-google-button';
import "../../assest/styles/onboarding.scss";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import {appIn} from "../../firebase/fiebase";
import {useState} from "react";


//state



//create auth for firabase
const auth = getAuth(appIn);
const googleProvider = new GoogleAuthProvider();

function Copyright(props) {
    return (
       <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {/*{'Copyright © '}*/}
          {/*<Link color="inherit" href="https://mui.com/">*/}
          {/*   Your Website*/}
          {/*</Link>{' '}*/}
          {/*{new Date().getFullYear()}*/}
          {/*{'.'}*/}
       </Typography>
   );
}

const theme = createTheme();

export default function Onboarding() {

    const [user,setUser] = useState("");

    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider).finally( () =>{
                setUser(res?.user)
            });
            const user = res?.user;
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };


   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
         email: data.get('email'),
         password: data.get('password'),
      });
   };

   return (
       <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '100vh',overflow : 'hidden' }}>
             <CssBaseline />
             <Grid
                 item
                 xs={false}
                 sm={4}
                 md={7}
                 sx={{
                    // backgroundImage: 'url(https://source.unsplash.com/random)',
                    // backgroundRepeat: 'no-repeat',
                    // backgroundColor: (t) =>
                    //     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                 }}
             >
                 <Grid container spacing={3}>
                     <Grid item xs={12} sx={{
                          height : '45vh',
                          marginTop : '6vh'
                     }}>
                         <div className = "txt-area">
                             <div className="txt-area-inner">
                               <h1>Welcome To D&D</h1>
                                 <span>Best Video Conferencing and Chatting Experience For Everyone <br/>  With Everyone.</span>
                             </div>
                             <div className="btn-area">
                                 <GoogleButton
                                     type="light"
                                     onClick={signInWithGoogle}
                                 />
                             </div>
                         </div>


                     </Grid>
                     <Grid item xs={12}
                      sx={{
                          height : '50vh',
                          backgroundImage: `url(${MainImg})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundColor: (t) =>
                              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                      }}
                     >
                     </Grid>
                 </Grid>

             </Grid>
             <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                       my: 8,
                       mx: 4,
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
                   <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                      <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                      />
                      <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                      />
                      <FormControlLabel
                          control={<Checkbox value="remember" color="primary" />}
                          label="Remember me"
                      />
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                      >
                         Sign In
                      </Button>
                      <Grid container>
                         <Grid item xs>
                            <Link href="#" variant="body2">
                               Forgot password?
                            </Link>
                         </Grid>
                         <Grid item>
                            <Link href="#" variant="body2">
                               {"Don't have an account? Sign Up"}
                            </Link>
                         </Grid>
                      </Grid>
                      <Copyright sx={{ mt: 5 }} />
                   </Box>
                </Box>
             </Grid>
          </Grid>
       </ThemeProvider>
   );
}