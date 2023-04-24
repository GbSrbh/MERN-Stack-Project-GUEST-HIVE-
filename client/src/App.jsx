import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from './Layout';
import IndexPage from "./pages/IndexPage.jsx";
import Register from './pages/RegisterPage'
import Login from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import BookingsPage from "./pages/BookingsPage";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacePage from './pages/PlacePage';

import axios from "axios";
import { UserContextProvider } from './UserContext';
import BookingPage from './pages/BookingPage';
import Home from './components/Home';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <div>
      <UserContextProvider >
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<IndexPage />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/account'} element={<ProfilePage />} />
            <Route path={'/account/places'} element={<PlacesPage />} />
            <Route path={'/account/places/new'} element={<PlacesFormPage />} />
            <Route path={'/account/places/:id'} element={<PlacesFormPage />} />
            <Route path={'/place/:id'} element={<PlacePage />}></Route>
            <Route path={'/account/bookings'} element={<BookingsPage />} />
            <Route path={'/account/bookings/:id'} element={<BookingPage />} />
            <Route path={'/home'} element={<Home />}></Route>
          </Route>
        </Routes>
      </UserContextProvider>

    </div>

  )
}

export default App
