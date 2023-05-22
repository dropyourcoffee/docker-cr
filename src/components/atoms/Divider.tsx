import { borderBottomStyle } from "@styles";
import { css } from "@emotion/react";

const Divider = ()=>
  <div css={[borderBottomStyle, css`height:1px;`]}></div>;


export default Divider;