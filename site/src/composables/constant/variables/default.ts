import { PREVIEW_SELECTOR } from "./render";
import type { ResumeStyles } from "../../stores/style";

export const DEFAULT_STYLES = {
  marginV: 50,
  marginH: 45,
  lineHeight: 1.3,
  paragraphSpace: 5,
  themeColor: "#377bb5",
  fontCJK: {
    name: "华康宋体",
    fontFamily: "HKST"
  },
  fontEN: {
    name: "Minion Pro"
  },
  fontSize: 15,
  paper: "A4"
} as ResumeStyles;

import DEFAULT_RESUME from "~/assets/defaults/DEFAULT_RESUME.md?raw";
export const DEFAULT_MD_CONTENT = DEFAULT_RESUME;

import DEFAULT_CSS from "~/assets/defaults/DEFAULT_STYLE.css?raw";

// Function to process the raw CSS and replace placeholders
const processCss = (css: string, variables: { [key: string]: string }): string => {
  return css.replace(/__PREVIEW_SELECTOR__/g, variables.PREVIEW_SELECTOR);
};

export const DEFAULT_CSS_CONTENT = processCss(DEFAULT_CSS, { PREVIEW_SELECTOR });
