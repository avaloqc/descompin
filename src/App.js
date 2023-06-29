import {
  BrowserRouter,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { HeaderPartial } from './partials/HeaderPartial';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-pastas" element={<h1>hola</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div className="App">
      <>
        <HeaderPartial />
        <Outlet />
        <footer>Descompin©️ me 2023</footer>
      </>
    </div>
  );
}


