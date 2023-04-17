import React from "react";
import {HEADER_HEIGHT} from "@config/constants";
import { safeMarginTop } from "@styles";
import {css} from "@emotion/react";

export interface MainBodyProps {
  children? : React.ReactNode,
}

const MainBody = ({children}:MainBodyProps)=>{

  return <div css={css`${safeMarginTop(HEADER_HEIGHT)}`}>
    {children}
  </div>

};

export default MainBody;