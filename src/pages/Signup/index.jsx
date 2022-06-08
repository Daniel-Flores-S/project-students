import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { initialValues, Schema } from "./schema";


const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { signup } = useAuth();

  const { register, handleSubmit, formState: { errors, isSubmitting, touchedFields }, watch } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(Schema),
    defaultValues: initialValues,

  });

  const onSubmit = (value) => {
    const res = signup(value);   
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
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: 'column', gap: '30px' }}>
          <Box sx={{ my: 3, pt: 8, textAlign: 'center' }}>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              SISTEMA DE LOGIN
            </Typography>
          </Box>
          <TextField
            label="Nome"
            type="text"
            error={errors.name}
            helperText={errors.name && errors.name.message}
            {...register('name')}
          />
          <TextField
            type="text"
            label="Senha"
            error={errors.password}
            helperText={errors.password && errors.password.message}
            {...register('password')}
          />
          <TextField
            type="password"
            label="Confirmar Senha"
            error={errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            {...register('confirmPassword')}
          />
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
            disabled={isSubmitting}

          >
            Inscrever-se
          </Button>
        </form>

      </Container>

    </Box>
  );
};

export default Signup;
