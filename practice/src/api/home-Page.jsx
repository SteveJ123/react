import * as React from "react";
import '../css/home.css';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppNavBar from "../components/top-navbar";
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';
import PetVector from "../images/petdogwhite.png";
import PetVectorBlue from "../images/petvectorblue.png";
import ProductVector from "../images/productvector.png";
import Tooltip from '@mui/material/Tooltip';
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";



export default function homePage() {

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

  return (
    <div display="auto">
      <AppNavBar/>
      <FullCalendar plugins={[daygridPlugin]} />
      <Box xs={12}
            sx={{
              height: "30vh",
              
              backgroundPositionY: "32px",
              backgroundImage: "url(https://source.unsplash.com/random/?animal)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
          }}>

      <Grid sx={{backgroundPosition: "center", padding: "8vh", fontWeight: 'bold'}}>
          <Typography variant="h1" fontWeight={"bold"} sx={{ color: "#00C1EB" }} gutterBottom>
             ANIMALAID P.S
                 <Typography variant="h6" fontWeight={"bold"} sx={{ color: "#FFFFFF" }} paddingBottom="10px" gutterBottom>
                    Your All-In-One Pet Service
                 </Typography>  
          </Typography>  
      </Grid>

      </Box> 

      <Grid sx={{float: "left", paddingTop: "5vh", paddingLeft: "5vh", fontWeight: 'bold'}}>
          <Typography variant="h3" fontWeight={"bold"} sx={{ color: "#00C1EB" }} gutterBottom>
             Find your new best friend...
          </Typography>  
      </Grid>

      <Grid sx={{backgroundPosition: "center", padding: "5vh"}}>
            <TextField 
                      margin="normal"
                      required
                      fullWidth
                      id="search"
                      label="Search by Pet"
                      placeholder="Enter Dog, Cat, Rabbit, Lizard, etc"
                      name="search"
                      autoComplete="search"
                      focused
                    />
      </Grid>

      <Grid sx={{paddingTop: "0vh"}}>
          <Typography variant="h4" fontWeight={"bolder"} sx={{ color: "#000000" }} gutterBottom>
             Straight To Our Selections
          </Typography>  
      </Grid>

      <Grid sx={{paddingTop: "1vh", fontWeight: 'bold', display: "flex", flexDirection:"row", gap: "30px", justifyContent:"center"}}>
      <Card sx={{ ':hover': {boxShadow: 20, background: "#00C1EB", backgroundSize: 1 } }}>
          <CardActionArea sx={{height: "30vh", width: "30vh"}} component={Link} to="/addpets">
          <Tooltip title="Pets" placement="left">
            <CardContent>
             {/* <CardMedia
                     sx={{ height: 250 }}
                     image={PetVector}
              /> */}
               <Typography variant="h4"  fontWeight={"bolder"} sx={{ color: "#000000", paddingTop: 10 }} gutterBottom>
             Add Pet
          </Typography>
               </CardContent>
              </Tooltip>
           </CardActionArea>
        </Card>
      <Card sx={{ ':hover': {boxShadow: 20, background: "#00C1EB", backgroundSize: 1 } }}>
          <CardActionArea sx={{height: "30vh", width: "30vh"}} component={Link} to="/pets">
          <Tooltip title="Pets" placement="left">
            <CardContent>
             <CardMedia
                     sx={{ height: 250 }}
                     image={PetVector}
              />
               </CardContent>
              </Tooltip>
           </CardActionArea>
        </Card>

        <Card sx={{ ':hover': {boxShadow: 20, background: "#00C1EB", backgroundSize: 1 } }}>
          <CardActionArea sx={{height: "30vh", width: "30vh"}} component={Link} to="/products">
          <Tooltip title="Products" placement="right">
             <CardContent>
             <CardMedia
                     sx={{ height: 250 }}
                     image={ProductVector}
              />
                <Typography></Typography>
             </CardContent>
             </Tooltip>
           </CardActionArea>
        </Card>
      </Grid>
  </div>
  );
}
