import React from "react";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { borderBottomStyle } from "@styles";

function App() {
  const theme = useTheme();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div
        css={[
          borderBottomStyle(theme),
          css`
            height: 150px;
            overflow-y: scroll;
          `,
        ]}
      >
        <p
          css={css`
            color: red;
          `}
        >
          ads
        </p>
        <div
          css={css`
            height: 300px;
            background-color: gray;
          `}
        ></div>
      </div>
    </div>
  );
}

export default App;
