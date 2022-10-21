import React, {useEffect} from 'react';
import './App.scss';
import Display from "./components/Display/Display";
import Dashboard from "./components/Dashboard/Dashboard";
import {useAppDispatch} from "./hooks/hooks";
import {fetchProducts} from "./redux/slices/productsSlice";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="app">
      <Display/>
      <Dashboard/>
    </div>
  );
}

export default App;
