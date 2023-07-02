import {
  BrowserRouter,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import { AppContext } from "./storage/AppContext";
import { HomePage } from './pages/HomePage';
import { HeaderPartial } from './partials/HeaderPartial';
import { MinhasPastasPage } from "./pages/MinhasPastasPages";

const initialState = {
  folders: [],
  activePinId: null,
  mode: null, 
  type: null,
}

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
        <AppContext initialState={initialState}>
          <HeaderPartial />
          <Outlet />
        </AppContext>
      </>
    </div>
  );
}


