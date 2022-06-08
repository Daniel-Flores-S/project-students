

import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';

const Login = () => {
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
            <Box
              sx={{
                pb: 1,
                pt: 2
              }}
            >
              
            </Box>
            <TextField              
              fullWidth              
              label="Email Address"
              margin="normal"
              name="email"           
              type="email"              
              variant="outlined"
            />
            <TextField              
              fullWidth
              label="Password"
              margin="normal"
              name="password"
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
        </Container>
      </Box>
    </>
  );
};

export default Login;
