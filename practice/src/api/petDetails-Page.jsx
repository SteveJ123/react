import * as React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppNavBar from "../components/top-navbar";
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
import Cooper from "../images/Cooper.jpg";
import "../css/images.css";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00C1EB",
    },
    secondary: {
      main: "#00C1EB",
      contrastText: "#00C1EB",
      dark: "#000000",
    },
    background: {
      default: "#ffffff",
    },
    divider: "rgba(0,0,0,0.12)",
    info: {
      main: "#f44336",
    },
  },
});

export default function MediaCard() {
  return (
    <ThemeProvider theme={theme}>
      <AppNavBar />

      <Typography
        variant="h4"
        textAlign="left"
        sx={{ marginLeft: 5, marginTop: 7, fontWeight: "bold" }}
      >
        Lost Pet ID: XXXX
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          paddingTop: "75px",
          paddingLeft: "150px",
        }}
      >
        <Container maxWidth="sm" sx={{ position: "relative" }}>
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              height: "49vh",
              width: "50vh",
              maxHeight: "50vh",
              maxWidth: "50vh",
              borderRadius: 10,
              position: "absolute",
              left: "2%",
              top: "5%",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              backgroundImage: `url(${Cooper})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              bgcolor: "#cfe8fc",
              height: "50vh",
              width: "50vh",
              maxHeight: "50vh",
              maxWidth: "50vh",
              borderRadius: 10,
              position: "absolute",
              zIndex: 1,
            }}
          />
        </Container>

        <Container maxHeight="md">
          <Box sx={{ float: "left", textAlign: "left" }}>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              sx={{ color: "red", textDecoration: "underline" }}
            >
              Lost Pet
            </Typography>
          </Box>

          <Box
            sx={{
              float: "left",
              textAlign: "left",
              paddingTop: "30px",
              marginRight: 20,
            }}
          >
            <Typography variant="h6" fontWeight={"bold"}>
              Description
            </Typography>

            <Typography variant="body1" sx={{ marginTop: 1 }} gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat
              deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quos blanditiis tenetur unde
              suscipit, quam beatae rerum inventore consectetur, neque
              doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
              Eum quasi quidem quibusdam.
            </Typography>

            <Box sx={{ display: "flex", marginTop: 3 }}>
              <Box sx={{ display: "inline-block" }}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Found By:
                </Typography>

                <Typography variant="body1" gutterBottom>
                  John Johns John II
                </Typography>

                <Typography variant="h6" fontWeight={"bold"}>
                  Breed:
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <a href="url">XXXXXXXXX</a>
                </Typography>

                <Typography variant="h6" fontWeight={"bold"}>
                  Contact Number:
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <a href="phone">XXXXXXXXX</a>
                </Typography>
              </Box>

              <Box sx={{ display: "inline-block", paddingLeft: "100px" }}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Location Found:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  In the town of <a href="mailto: abc@example.com">XXXX</a>
                </Typography>

                <Typography variant="h6" fontWeight={"bold"}>
                  Found On:
                </Typography>

                <Typography variant="body1" gutterBottom>
                  XXXX-XX-XX
                </Typography>
              </Box>
            </Box>

            <Box sx={{ float: "right", paddingRight: "50px" }}>
              <Button variant="contained">Contact Owner</Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
