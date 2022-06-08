

import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
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
          <form >
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
              name="email"
              type="text"
              variant="outlined"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <TextField
              fullWidth
              label="Senha"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={handleLogin}
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
