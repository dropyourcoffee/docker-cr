import { useMemo } from "react";
import { Theme, useTheme, SerializedStyles } from "@emotion/react";

export type ThemedStyleFn = (theme:Theme) => SerializedStyles;

export const useThemedStyle = (fn: ThemedStyleFn) =>{

  const theme = useTheme();
  return useMemo(() => fn,[theme]);

};
