import { css } from "@emotion/react";
import { flexRow, flexRowBetween, zIndex } from "@styles";
import {HEADER_HEIGHT} from "@config/constants";
import {NavLink} from "react-router-dom";
import {FaDocker} from "react-icons/fa";
import {useThemedStyle} from "@hooks/useThemedStyle";

const headerWrap = css`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zIndex.header};
`;


const Header = ()=>{

  const headerContainerStyle = useThemedStyle(theme => css`
    background-color: ${theme.color.backgroundNav};
    color:${theme.color.textNav};
    height:${HEADER_HEIGHT};
    & div{
      height:100%;
    }
  `);

  return(<header css={headerWrap}>
    <nav>
      <div css={headerContainerStyle}>
        <div css={flexRow}>

          <NavLink to={'/'} css={[flexRowBetween, css`margin:5px;`]}>
            <FaDocker size={40}/>
          </NavLink>

        </div>
      </div>
    </nav>
  </header>);
};

export default Header;