import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Nav/Nav';
import Home from './components/Home/home';
import Shop from './views/Shop';
import Product from './views/Product';
import CounterContainer from './views/CounterContainer';
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
    </Routes>
    </BrowserRouter> 
    );
}

export default App;