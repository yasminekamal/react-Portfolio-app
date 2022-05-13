import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Nav/Nav';
import Home from './components/Home/home';
import Shop from './views/Shop';
import Product from './views/Product';
import ToDo from './views/ToDo';
import CounterContainer from './views/CounterContainer';
import Register from './views/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
    return ( 
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Shop/>}></Route>
        <Route path="/products/:id" element={<Product/>}></Route>
        <Route path="/counter" element={<CounterContainer/>}></Route>
        <Route path="/todo" element={<ToDo/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter> 
    );
}

export default App;