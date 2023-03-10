import React, {useState, useEffect} from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppNavBar from "../components/top-navbar";
import backgroundImage from "../images/dog-cover.png";
import Milo from "../images/Milo.jpg";
import Cooper from "../images/Cooper.jpg";
import Hunter from "../images/Hunter.jpg";
import Bella from "../images/Bella.jpg";
import Beck from "../images/Beck.jpg";
import Daisy from "../images/Daisy.jpg";

// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

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
  const [dogList, setDogList] = useState([{
    image: "Beck",
    name: "Beck",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
    semper arcu, vitae facilisis ante. Maecenas volutpat
    condimentum eros, ac vehicula quam rhoncus a. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Ut et semper
    arcu, vitae facilisis ante. Maecenas volutpat condimentum
    eros, ac vehicula quam rhoncus a.`,
    foundBy: "John Johns John II",
    locationFound: "In the town of",
    breed: "XXXXXXXXX",
    foundOn: "XXXX-XX-XX",
    contactNumber: "XXXXXXXXX"
  },
  {
    image: "Hunter",
    name: "Hunter",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
    semper arcu, vitae facilisis ante. Maecenas volutpat
    condimentum eros, ac vehicula quam rhoncus a. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Ut et semper
    arcu, vitae facilisis ante. Maecenas volutpat condimentum
    eros, ac vehicula quam rhoncus a.`,
    foundBy: "John Johns John II",
    locationFound: "In the town of",
    breed: "XXXXXXXXX",
    foundOn: "XXXX-XX-XX",
    contactNumber: "XXXXXXXXX"
  },
  {
    image: "Bella",
    name: "Bella",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
    semper arcu, vitae facilisis ante. Maecenas volutpat
    condimentum eros, ac vehicula quam rhoncus a. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Ut et semper
    arcu, vitae facilisis ante. Maecenas volutpat condimentum
    eros, ac vehicula quam rhoncus a.`,
    foundBy: "John Johns John II",
    locationFound: "In the town of",
    breed: "XXXXXXXXX",
    foundOn: "XXXX-XX-XX",
    contactNumber: "XXXXXXXXX"
  },
  {
    image: "Cooper",
    name: "Cooper",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
    semper arcu, vitae facilisis ante. Maecenas volutpat
    condimentum eros, ac vehicula quam rhoncus a. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Ut et semper
    arcu, vitae facilisis ante. Maecenas volutpat condimentum
    eros, ac vehicula quam rhoncus a.`,
    foundBy: "John Johns John II",
    locationFound: "In the town of",
    breed: "XXXXXXXXX",
    foundOn: "XXXX-XX-XX",
    contactNumber: "XXXXXXXXX"
  },
  {
    image: "Daisy",
    name: "Daisy",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
    semper arcu, vitae facilisis ante. Maecenas volutpat
    condimentum eros, ac vehicula quam rhoncus a. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Ut et semper
    arcu, vitae facilisis ante. Maecenas volutpat condimentum
    eros, ac vehicula quam rhoncus a.`,
    foundBy: "John Johns John II",
    locationFound: "In the town of",
    breed: "XXXXXXXXX",
    foundOn: "XXXX-XX-XX",
    contactNumber: "XXXXXXXXX"
  },
  {
    image: "Milo",
    name: "Milo",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
    semper arcu, vitae facilisis ante. Maecenas volutpat
    condimentum eros, ac vehicula quam rhoncus a. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Ut et semper
    arcu, vitae facilisis ante. Maecenas volutpat condimentum
    eros, ac vehicula quam rhoncus a.`,
    foundBy: "John Johns John II",
    locationFound: "In the town of",
    breed: "XXXXXXXXX",
    foundOn: "XXXX-XX-XX",
    contactNumber: "XXXXXXXXX"
  }])

  useEffect(() => {
    let dogDetails = JSON.parse(localStorage.getItem("dogInfo"))
    console.log(dogDetails)
    let addToPetList = [...dogList]
    addToPetList.push(dogDetails)
     setDogList(addToPetList)
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <AppNavBar />

      <Container maxWidth="10%">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "20vh",
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            opacity: 0.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            textAlign="center"
            sx={{ color: "rgba(0, 0, 0, 0.7)" }}
          >
            Dogs
          </Typography>
        </Box>
      </Container>

      <Box sx={{ flexGrow: 1, paddingTop: "65px" }}>
        <Grid container spacing={2} minHeight={160}>
          {dogList.map((item, index)=>
            <Grid key={index} xs display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10, marginTop: 5 }}>
              <CardMedia
                sx={{ height: 200, width: 400 }}
                image={require("../images/"+ item.image+".jpg")}
                title="Beck head shot"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" component={Link} to="/petdetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Contact Owner</Button>
              </CardActions>
            </Card>
          </Grid>
          
          )}
        

          {/* <Grid display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={Hunter}
                title="Hunter head shot"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hunter
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  semper arcu, vitae facilisis ante. Maecenas volutpat
                  condimentum eros, ac vehicula quam rhoncus a. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Ut et semper
                  arcu, vitae facilisis ante. Maecenas volutpat condimentum
                  eros, ac vehicula quam rhoncus a.
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" component={Link} to="/petdetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Contact Owner</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={Bella}
                title="Bella head shot"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bella
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  semper arcu, vitae facilisis ante. Maecenas volutpat
                  condimentum eros, ac vehicula quam rhoncus a. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Ut et semper
                  arcu, vitae facilisis ante. Maecenas volutpat condimentum
                  eros, ac vehicula quam rhoncus a.
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" component={Link} to="/petdetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Contact Owner</Button>
              </CardActions>
            </Card>
          </Grid> */}
        </Grid>
      </Box>

      {/* <Box sx={{ flexGrow: 1, paddingTop: "50px" }}>
        <Grid container spacing={2} minHeight={160}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={Cooper}
                title="Cooper head shot"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cooper
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  semper arcu, vitae facilisis ante. Maecenas volutpat
                  condimentum eros, ac vehicula quam rhoncus a. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Ut et semper
                  arcu, vitae facilisis ante. Maecenas volutpat condimentum
                  eros, ac vehicula quam rhoncus a.
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" component={Link} to="/petdetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Contact Owner</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={Daisy}
                title="Daisy head shot"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Daisy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  semper arcu, vitae facilisis ante. Maecenas volutpat
                  condimentum eros, ac vehicula quam rhoncus a. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Ut et semper
                  arcu, vitae facilisis ante. Maecenas volutpat condimentum
                  eros, ac vehicula quam rhoncus a.
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" component={Link} to="/petdetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Contact Owner</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: 200, minheight: 300 }}
                image={Milo}
                title="Milo head shot"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Milo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  semper arcu, vitae facilisis ante. Maecenas volutpat
                  condimentum eros, ac vehicula quam rhoncus a. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Ut et semper
                  arcu, vitae facilisis ante. Maecenas volutpat condimentum
                  eros, ac vehicula quam rhoncus a.
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" component={Link} to="/petdetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Contact Owner</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box> */}
    </ThemeProvider>
  );
}
