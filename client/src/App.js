// import logo from './logo.svg';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import MyRoutes from './MyRoutes';
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'



function App() {

  const dispatch = useDispatch()


  useEffect( () => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])



  return (
    <Router>
      <Navbar/>
      <MyRoutes/>
    </Router>
  );
}

export default App;
