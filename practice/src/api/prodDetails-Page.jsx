import * as React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppNavBar from "../components/top-navbar";
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
import DogFood from "../images/dog-food.png";
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

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          paddingTop: "75px",
          paddingLeft: "150px",
          marginTop: 10,
        }}
      >
        <Container maxWidth="sm" sx={{ position: "relative" }}>
          <Box
            sx={{
              bgcolor: "red",
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
              backgroundImage: `url(${DogFood})`,
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
              Performatrin Ultra Grain-Free Original Recipe Dog Food
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

            <Box sx={{ display: "flex", marginTop: 5 }}>
              <Box sx={{ display: "inline-block" }}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Product Price
                </Typography>

                <Typography variant="body1" gutterBottom>
                  $ 19
                </Typography>

                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{ marginTop: 2 }}
                >
                  Product Website
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <a href="url">
                    Performatrin Ultra Grain-Free <br /> Original Recipe Dog
                    Food
                  </a>
                </Typography>
              </Box>

              <Box sx={{ display: "inline-block", paddingLeft: "100px" }}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Suitable Pet Species
                </Typography>
                <Typography variant="body1" fontWeight={"bold"} gutterBottom>
                  • Dog
                </Typography>

                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{ marginTop: 2 }}
                >
                  Posted By
                </Typography>

                <Typography variant="body1" fontWeight={"bold"} gutterBottom>
                  John Doe: <a href="mailto: abc@example.com">Contact</a>
                </Typography>
              </Box>
            </Box>

            <Box sx={{ float: "right", paddingRight: "50px" }}>
              <Button variant="contained">Add To Cart</Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
