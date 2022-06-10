import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Backdrop,
  Box,
  Button,
  Container,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { initialValues, Schema } from "./schema";
import { Required } from "../../components/Required";
import { registerStudent } from "../../store/api/student";


const Signup = () => {
  const navigate = useNavigate();
  //const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(Schema),
    defaultValues: initialValues,

  });

  const onSubmit = async (value) => {
    const body = {
      name: value?.name,
      age: parseInt(value?.age),
      course: value?.course,
      school: value?.school
    }
    const response = await registerStudent(body);
    console.log(response.statusText);
    if (response.statusText === "Created") {
      navigate("/home");
    }

  };

  return (
    <>
      <Backdrop
        sx={{ color: '#1100ff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}>
        <Container maxWidth="sm">
          <Box component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: "flex",
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            <Box >
              <Typography
                color="textPrimary"
                variant="h4"
                align="center"
              >
                Cadastro
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: '20px'
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                }}
              >
                <TextField
                  fullWidth
                  // Nome + <Required />
                  label={<Required text={'Nome'} />}
                  type="text"
                  error={errors.name}
                  helperText={errors.name && errors.name.message}
                  {...register('name')}
                />
                {/* {Boolean(error) && (
                  <FormHelperText error>{error}</FormHelperText>
                )} */}
              </Box>
              <TextField
                label={<Required text={'Age'} />}
                type="number"
                error={errors.age}
                helperText={errors.age && errors.age.message}
                {...register('age')}
              />

            </Box>
            <TextField
              type="text"
              label={<Required text={'Course'} />}
              error={errors.course}
              helperText={errors.course && errors.course.message}
              {...register('course')}
            />
            <TextField
              type="text"
              label={<Required text={'School'} />}
              error={errors.school}
              helperText={errors.school?.message}
              {...register('school')}
            />
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              disabled={isSubmitting}

            >
              Cadastrar
            </Button>
          </Box>

        </Container>

      </Box>
    </>

  );
};

export default Signup;
