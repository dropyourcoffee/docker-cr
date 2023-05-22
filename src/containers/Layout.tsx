import React from "react";
import {css} from "@emotion/react";

export interface LayoutProps {
  children?: React.ReactNode
}

const LayoutStyle = css`
  max-width: 100%;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
`;

const Layout = ({children}: LayoutProps)=>{

  return (<div css={LayoutStyle}>
      {children}
    </div>
  );
};

export default Layout;