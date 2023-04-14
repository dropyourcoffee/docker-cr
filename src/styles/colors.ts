import { adjustHue, darken, desaturate, lighten } from "polished";
import { compose } from "ramda";

export interface ThemeColors {
  primary: string;
  secondary?: string;
  tertiary?: string;

  accent1: string;
  accent2: string;

  backgroundPrimary: string;
  backgroundSecondary?: string;
  backgroundTertiary?: string;
  backgroundAccent?: string;
  backgroundError?: string;
  backgroundNav?: string;

  buttonPrimary: string;
  buttonSecondary?: string;
  buttonTextPrimary: string;
  buttonTextSecondary?: string;

  buttonDisabled: string;
  buttonDisabledText: string;

  textPrimary: string;
  textNav?: string;

  disabled: string;
  error: string;

  borderPrimary?: string;
  divider?: string;
}

const toPrimaryDark = compose(adjustHue(10), desaturate(0.31), lighten(0.05));
const toPrimaryLight = compose(adjustHue(0), desaturate(0.72), lighten(0.28));

const extraColors = {
  // selectBoxBorder: "#9DA6AD",
  // pass: "#43AC54",
  // buttonSubmit: "#2F3B43",
  //
  // filterTagContainerBg: "#525F68",
  // filtersText: "#B9C1C7",
  // selectCategoryAmountBg: "#2F3B43",
  // sliderTrackBg: "#DBDADA",
  // rangePercentText: "#546A7B",
  // rangeTitleText: "#919191",
  // searchbarBorder: "#C3CCD2",
  // checkboxContainer: "#4F4F4F",

  // semanticGraph1: "#0A79C1",
  // semanticGraph2: "#CEE4F2",
  // semanticGraph3: "#063C62",


};

const makeColor = () : ThemeColors => {
  return {
    ...extraColors,
    primary: "#0069ff",
    secondary: "#2e7f74",
    tertiary: "#7d2eff",


    accent1: "#07080A",
    accent2: "#2E3B43",

    backgroundPrimary: "#fefffe",
    backgroundAccent: "#2E3B43",
    backgroundError: "#FFE6E6",
    backgroundNav: "#082775",

    buttonPrimary: "#2E3B43",
    buttonSecondary: "#546A78",

    buttonTextPrimary: "#FFFFFF",
    buttonTextSecondary: "#FFFFFF",

    buttonDisabled: "#ECECEC",
    buttonDisabledText: "#B6B6B6",

    borderPrimary: "#CED9E1",

    divider: "#CED9E1",
    error: "#D47878",
    disabled: "#B6B6B6",

    textPrimary: "#4d5b7c",
    textNav: "#d6dcea",

  };
};

export const defaultColor = makeColor();

export default { ...defaultColor };
