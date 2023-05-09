import React from "react";
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';


// function IconSVGWrapper(props:SvgIconProps) {
//     return (
//       <SvgIcon >
//         {props.children}
//       </SvgIcon>
//     );
//   }

function IconSVGWrapper({pathIcon}) {
      return (
        <SvgIcon >
          <path d={pathIcon} /> 
        </SvgIcon>
      );
    }

export default IconSVGWrapper;