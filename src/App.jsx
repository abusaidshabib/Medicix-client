import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router/router';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { setUser } from './features/auth/authSlice';

function App() {

  const dispatch = useDispatch();

  // console.log(import.meta.env.VITE_REACT_APP_apiKey);

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      if(user){
        dispatch(setUser(JSON.parse(JSON.stringify(user)))); //non serializable value to serializable value
      }
    } )
  }, [])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
