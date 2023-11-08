// ** Router Import
import Router from "./router/Router";
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        global.BASEURL =  'https://utecho.com/scaff_back/';},[])
  return (
    <>

      <Router />
    </>
  );
};

export default App;
