import {useTheme, css, Theme} from "@emotion/react";
import {flexRow, zIndex} from "@styles";
import {HEADER_HEIGHT} from "@config/constants";
import {NavLink} from "react-router-dom";

const headerWrap = css`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zIndex.header};
`;

const headerContainerStyle = (theme:Theme) => css`
  background-color: ${theme.color.backgroundNav};
  color:${theme.color.textNav};
  height:${HEADER_HEIGHT};
`;

const Header = ()=>{

  const theme = useTheme();

  return(<header css={headerWrap}>
    <nav>
      <div css={headerContainerStyle(theme)}>
        <ul css={css`
              ${flexRow}
              & {
                li {padding:10px;}
              }
            `}>
          <li><NavLink to={'/tags/foo'}>foo</NavLink></li>
          <li><NavLink to={'/tags/bar'}>bar</NavLink></li>
        </ul>
      </div>
    </nav>
  </header>);
};

export default Header;