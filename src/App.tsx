import React from "react";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { borderBottomStyle } from "@styles";
import {flexRow} from "@styles";

function App() {
  const theme = useTheme();

  return (
    <div className="App">
      <nav>
        <div css={css`
          background-color: ${theme.color.backgroundNav};
          color:${theme.color.textNav};
         `}>
          <ul css={css`
            ${flexRow}
            & {
              li {padding:10px;}
            }
          `}>
            <li><a href={'#'}>menu 1</a></li>
            <li><a href={'#'}>menu 2</a></li>
          </ul>
        </div>
      </nav>
      <div>
        <button css={css` background-color: ${theme.color.buttonPrimary}; color: ${theme.color.buttonTextPrimary}; `}>
          ad
        </button>
        <button disabled={true} css={css` background-color: ${theme.color.buttonDisabled}; color: ${theme.color.disabled}; `}>
          disabled
        </button>
        <button css={css` background-color: ${theme.color.buttonSecondary}; color: ${theme.color.buttonTextSecondary}; `}>
          ad
        </button>
        <button disabled={true} css={css` background-color: ${theme.color.buttonDisabled}; color: ${theme.color.disabled}; `}>
          disabled
        </button>
      </div>

      <div css={css`${flexRow} margin:10px;`}>
        <div css={css`padding: 5px; border-radius: 0.25rem; background-color: ${theme.color.backgroundError}; color: ${theme.color.error}`}>
          error
        </div>
      </div>

      <div css={css`${flexRow} margin:10px; border: 1px solid ${theme.color.borderPrimary}`}>
          error
      </div>

    </div>
  );
}

export default App;
