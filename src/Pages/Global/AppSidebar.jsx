import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import {Box, Typography, IconButton, useTheme, Divider} from '@mui/material';
import {Link } from 'react-router-dom';
import { tokens } from "../../theme";

import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const list = [{component:"Dashboard", path:'', children: '', icon:<DashboardIcon />},
    {component:"Components", path:'', children:[{component:"Buttons", path:'',children: ''},{component:"Cards", path:'',children: ''}], icon:<SettingsIcon />},
    {component:"Utilities", path:'', children:[{component:"Colors", path:'',children: ''},{component:"Borders", path:'',children: ''},{component:"Animations", path:'',children: ''},{component:"Others", path:'',children: ''}], icon: <BuildIcon />},
    {component:"Pages", path:'', children:[{component:"Login", path:'',children: ''},{component:"Register", path:'',children: ''},{component:"404 Page", path:'',children: ''}], icon: <FolderIcon />},  
    {component:"Charts", path:'', icon: <InsertChartIcon />,children: ''},
    {component:"Tables", path:'', icon: <TableChartIcon />,children: ''}
]

const AppSidebar = () => {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
     //const [isCollapsed, setIsCollapsed] = useState(false);
     //const [selected, setSelected] = useState("Dashboard")
     const { collapseSidebar, collapsed } = useProSidebar();
    return (
          <Sidebar 
            width='185px' 
            collapsedWidth="70px" 
            backgroundColor={colors.primary[400]} 
            rootStyles={{border: 'none'}}>
            <Menu menuItemStyles={{
                button: ({ active, disabled }) => {
                    return {
                        backgroundColor: active ?colors.primary[300] : colors.primary[400],
                        '&:hover': {
                            backgroundColor: colors.primary[300],
                          }
                    };
      },
    }}>
            <MenuItem icon = {<EmojiEmotionsIcon />} rootStyles={{
                        fontWeight:  "bolder",
                        fontSize: "larger",
                       }}>SB Admin</MenuItem>
            
            {list.map((item) => {
                    return (
                        <>
                        {item.children !== '' ? 
                        <SubMenu icon={item.icon}  label={item.component}>
                        { item.children.map((child) => <MenuItem>{child.component}</MenuItem>)}
                       </SubMenu>
                       :
                       <MenuItem icon={item.icon}>
                            {item.component}
                        </MenuItem>}
                        </>
                    );
                })}
            </Menu>
            <Divider/>
            <Box sx={{textAlign:'center', pt:'10px'}}><IconButton onClick={()=>{collapseSidebar()}}>
                {collapsed ?  <ArrowForwardIosIcon/> : <ArrowBackIosIcon/>}
            </IconButton></Box>
          </Sidebar>
    );
}

export default AppSidebar;