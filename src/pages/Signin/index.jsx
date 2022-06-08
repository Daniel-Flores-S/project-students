

import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { initialValues, Schema } from './schema';
import { yupResolver } from "@hookform/resolvers/yup";


const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting, touchedFields }, watch }  = useForm({
    resolver: yupResolver(Schema),
    defaultValues: initialValues,
  });

  const handleLogin = (value) => {
    console.log("navigate? ",value)
    signin(value)
    //navigate("/home");
  };


  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit(handleLogin)}>
            <Box sx={{ my: 3, pt: 15 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Sign in
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Sign in on the internal platform
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Nome de usuário"
              margin="normal"
              error={errors.name}
              helperText={errors.name?.message}
              {...register('name')}
              type="text"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Senha"
              margin="normal"
              {...register('password')}
              error={errors.password}
              helperText={errors.password?.message}
              type="password"
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
          </form>
          <Box sx={{ my: 2 }}>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              Don't have an account? {' '}
              <Link to="/signup">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
