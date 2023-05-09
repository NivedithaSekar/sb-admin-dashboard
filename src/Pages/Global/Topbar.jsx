import React from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <nav>
        <Box display='flex' justifyContent='space-between' p={1} backgroundColor={colors.primary[400]}>
            <Box display='flex'  borderRadius="3px" backgroundColor={colors.primary[500]}>
                <InputBase sx={{ml:2}}placeholder="Search for..."/>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
            </Box>
            <Box display='flex'>
                <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode == 'dark'? <LightModeOutlinedIcon/>:<DarkModeOutlinedIcon/>}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
        </nav>
    );
}

export default Topbar;