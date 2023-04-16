import React from "react";
import {HEADER_HEIGHT} from "@config/constants";
import { safeMarginTop } from "@styles";
import {css, useTheme} from "@emotion/react";

export interface MainBodyProps {
  children? : React.ReactNode,
}

const MainBody = ({children}:MainBodyProps)=>{
  const theme = useTheme();
  console.log(theme);

  return <div css={css`${safeMarginTop(HEADER_HEIGHT)}`}>
    {children}
  </div>

};

export default MainBody;