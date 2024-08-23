import React, {lazy, Suspense, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { getStaticProps } from "wpc/pages/nav";

// import createFederatedCatchAll from "./shared";


const Model = lazy(() => import("wpc/index"))
const Model2 = lazy(() => import("wpc/pages/nav"))



function App() {
    useEffect(() => {
        console.log(getStaticProps);
    }, []);
    return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <Suspense fallback={<div>Loading....</div>}> <Model2 /></Suspense>
    </div>
  );
}

export default App;
