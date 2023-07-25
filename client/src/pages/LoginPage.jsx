import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext.jsx";
import Index from './IndexPage.jsx';

import { GoogleLogin } from 'react-google-login';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post('/login', { email, password });
      setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (e) {
      alert('Login failed');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (

    // <div>

    <div className="mt-4 grow flex items-center justify-around " >
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input type="email"
            placeholder="your@email.com"
            value={email}
            onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">Login</button>
          <div className="mt-6 mb-4 flex justify-center">
            <GoogleLogin
              clientId="123377236981-jqfgjot6f67f3k81ovm4giu6c5rdq1mb.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              // onSuccess={onGoogleSuccess}
              // onFailure={onGoogleFailure}
              cookiePolicy={'single_host_origin'}
              className=""
            />
          </div>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
          </div>
        </form>
      </div >
    </div >

    // </div>


  );
}