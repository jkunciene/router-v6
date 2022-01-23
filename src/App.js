import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import ProductsList from "./components/ProductsList";
import Cart from './components/Cart';
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <Container>
    <Router>
       <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link ><Link to="/">Product List </Link></Nav.Link>
         <Nav.Link ><Link to="/cart"> Cart </Link></Nav.Link>          
        </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<ProductsList/>} />
        <Route path="/cart"  element={<Cart/>} />    
        <Route path="*" element={<ErrorPage/>} />      
      </Routes>
    </Router>   
    </Container>     
  );
}

export default App;
