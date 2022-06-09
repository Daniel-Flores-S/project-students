import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Grid,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export const Seach = (props) => (
  <Box >
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item md={10} xs={12}>
              <TextField
                //fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="find by name"
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  ml: 3,
                  right: 0,
                  top: 0,
                  height: "100%",
                }}
              >
                Search
              </Button>
            </Grid>
            <Grid item md={2} xs={12} alignItems={"end"}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                color="primary"
              >
                New Student
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
