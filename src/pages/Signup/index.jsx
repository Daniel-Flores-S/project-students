import React, { useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <Box component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%'
      }}>
      <Container maxWidth="sm">
        <form>
          <Box sx={{ my: 3, pt: 15 }}>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              SISTEMA DE LOGIN
            </Typography>
          </Box>
          <TextField
            type="email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          >
            Digite seu E-mail
          </TextField>
          <TextField
            type="email"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
          >
            Confirme seu E-mail
          </TextField>
          <TextField
            type="password"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          >
            Digite sua Senha
          </TextField>
          <C.labelError>{error}</C.labelError>
          <Box sx={{ my: 2 }}>
            <Typography color="textSecondary" variant="body1">
              Já tem uma conta? <Link to="/">&nbsp;Entre</Link>
            </Typography>
          </Box>
          <Button
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={handleSignup}
          >
            Inscrever-se
          </Button>
        </form>

      </Container>

    </Box>
  );
};

export default Signup;
