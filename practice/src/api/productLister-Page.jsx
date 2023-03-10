import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import backgroundImage from "../images/dog-products.jpg";
import AppNavBar from "../components/top-navbar";
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
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
            Products
          </Typography>
        </Box>
      </Container>

      <Box sx={{ flexGrow: 1, paddingTop: "65px" }}>
        <Grid container spacing={2} minHeight={160}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="https://www.petvalu.ca/ccstore/v1/images/?source=/file/v4797936305836304445/products/FCM00669CA.1.jpg"
                title="dog food"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Performatrin Ultra Grain-Free Original Recipe Dog Food, $19
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
                <Button size="small" component={Link} to="/proddetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="https://i5.walmartimages.ca/images/Large/705/420/6000203705420.jpg"
                title="cat food"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Whiskas Meaty Selections Chicken, $12
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
                <Button size="small" component={Link} to="/proddetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: 200, minheight: 300 }}
                image="https://m.media-amazon.com/images/I/91r25Ji8cZL._AC_SY679_.jpg"
                title="rabbit food"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  5lbs Rabbit Pellets, $29
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
                <Button size="small" component={Link} to="/proddetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, paddingTop: "50px" }}>
        <Grid container spacing={2} minHeight={160}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="https://image.chewy.com/is/image/catalog/97680_MAIN._AC_SL600_V1595270464_.jpg"
                title="dog food"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Zilla Reptile Munchies Omnivore Mix Lizard Food, $19
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
                <Button size="small" component={Link} to="/proddetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="https://assets.shop.loblaws.ca/products/21304726/b2/en/front/21304726_front_a06_@2.png"
                title="cat food"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Presidents Choice Nutrition First Dog Food, $20
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
                <Button size="small" component={Link} to="/proddetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: 200, minheight: 300 }}
                image="https://www.hillspet.ca/content/dam/pim/hills/en_ca/sd/dry/sd-canine-adult-dry-productShot_zoom.jpg"
                title="rabbit food"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hills Science Diet Adult Chicken & Barley Recipe Dog food, $29
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
                <Button size="small" component={Link} to="/proddetails">
                  Learn More
                </Button>
                <Box mx={1} />
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}