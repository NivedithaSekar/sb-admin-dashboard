import React from "react";
import {Routes, Route} from 'react-router-dom'
import { ThemeProvider } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import Topbar from "./Pages/Global/Topbar";
import AppSidebar from './Pages/Global/AppSidebar';
import Dashboard from "./Pages/Dashboard/index";
import Form from "./Pages/Dashboard/Form";
import ErrorPage from "./Pages/Dashboard/ErrorPage";

import { ProSidebarProvider } from 'react-pro-sidebar';



function App() {
  const [theme, colorMode] = useMode();
  //console.log(theme,colorMode);
  return (
    <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
          <CssBaseline/>
            <ProSidebarProvider>
            <div className="app">
            <AppSidebar/>
            <div className='contents'>
            <Topbar/>
              <main> 
                <Routes>
                  <Route path="/" element={<Dashboard/>}/>
                  <Route path="/form" element={<Form/>}/>
                  <Route path="/page-not-found" element={<ErrorPage/>}/>
                </Routes>
              </main>
              <footer style={{padding:'1rem', textAlign:'center'}}>Copyright © Your Website 2021</footer>
              </div>
            </div>
            </ProSidebarProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
