import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Backdrop,
  Box,
  Button,
  Container,
  CircularProgress,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { initialValues, Schema } from "./schema";
import { getStudentById, updatedStudentById } from "../../store/user";
import { Course, School } from "./utils.js";
import { registerStudent } from "../../store/user";

const Signup = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, } = useForm({
    mode: 'all',
    shouldUnregister: false,
    reValidateMode: 'onSubmit',
    resolver: yupResolver(Schema),
    defaultValues: initialValues,

  });
  useEffect(() => {
    (async () => {
      const studentNew = await getStudentById(id);
      if (studentNew?.statusText === "OK") {
        const { data } = studentNew;
        setValue("name", data?.name);
        setValue("age", data?.age);
        setValue("course", data?.course);
        setValue("school", data?.school);
      }
    })();
  }, [id]);

  const onSubmit = (body) => {
    { id ? updateStudent(id, body) : createStudent(body) }
  };

  const createStudent = async (body) => {
    const response = await registerStudent(body);
    console.log(response);
    if (response.statusText === "Created") {
      navigate("/home");
    }
  }

  const updateStudent = async (body) => {
    const response = await updatedStudentById(id, body);
    console.log(response);
    if (response.statusText === "OK") {
      navigate("/home");
    }
  }

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
                {id ? `Editar` : "Cadastrar "}
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
                  placeholder="Nome"
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
                placeholder={'Age'}
                type="number"
                error={errors.age}
                helperText={errors.age && errors.age.message}
                {...register('age')}
              />

            </Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Course</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Course"
                id="demo-simple-select"
                {...register('course')}
                error={errors.course}
                helperText={errors.course && errors.course.message}
              >
                {
                  Course?.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                  ))
                }
              </Select>
              {errors.course &&
                <FormHelperText color="red" sx={{ color: 'red' }}>
                  {errors.course.message}
                </FormHelperText>
              }
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">School</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="School"
                id="demo-simple-select"
                {...register('school')}
                error={errors.school}
                helperText={errors.school?.message}
              >
                {
                  School?.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                  ))
                }
              </Select>
              {errors.school &&
                <FormHelperText color="red" sx={{ color: 'red' }}>
                  {errors.school.message}
                </FormHelperText>
              }
            </FormControl>
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
