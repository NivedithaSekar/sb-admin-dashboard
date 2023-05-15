import React from "react";
import SvgIcon from '@mui/material/SvgIcon';


function IconSVGWrapper({pathIcon, iconSize}) {
      return (
        <SvgIcon sx={{ fontSize: iconSize }}>
          <path d={pathIcon} /> 
        </SvgIcon>
      );
    }

export default IconSVGWrapper;