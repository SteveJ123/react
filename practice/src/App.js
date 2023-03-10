import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../src/api/home-Page";
import SignInSide from "../src/api/signIn-Side";
import SignUpSide from "../src/api/signUp-Side";
import Products from "../src/api/productLister-Page";
import ProductDetails from "../src/api/prodDetails-Page"
import Pets from "../src/api/petLister-Page" 
import PetDetails from "../src/api/petDetails-Page" 
import Test from "../src/components/test-Page";
import AddPets from "../src/api/addPets"
import "./css/app.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/addpets" element={<AddPets />}></Route>
            <Route path="/signin" element={<SignInSide />}></Route>
            <Route path="/signup" element={<SignUpSide />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/proddetails" element={<ProductDetails />}></Route>
            <Route path="/pets" element={<Pets />}></Route>
            <Route path="/petdetails" element={<PetDetails />}></Route>
            <Route path="test" element={<Test />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
