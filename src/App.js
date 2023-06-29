import {
  BrowserRouter,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { HeaderPartial } from './partials/HeaderPartial';
import { MinhasPastasPage } from "./pages/MinhasPastasPages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-pastas" element={<MinhasPastasPage />} />
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
      </>
    </div>
  );
}


