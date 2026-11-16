import { type ThemeConfig,extendTheme } from "@chakra-ui/react";

import { SEASON_COLORS } from "./component/seasons";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    ink: "#0F2E2D",
    paper: "#F4F6F5",
    muted: "#4D6664",
    line: "#DCE3E1",
    lineStrong: "#B9C6C3",
    // Light tints of the trip colours, behind the photo links of the stories.
    highlight: {
      bike: "#EEF9A8",
      train: "#F4D9F0",
    },
    season: {
      winter: SEASON_COLORS.winter.bg,
      spring: SEASON_COLORS.spring.bg,
      summer: SEASON_COLORS.summer.bg,
      autumn: SEASON_COLORS.autumn.bg,
    },
  },
  fonts: {
    heading: "var(--font-display), system-ui, sans-serif",
    body: "var(--font-body), system-ui, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "paper",
        color: "ink",
        lineHeight: 1.5,
      },
      "a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible":
        {
          outline: "3px solid #0F2E2D",
          outlineOffset: "3px",
        },
    },
  },
  components: {
    Heading: {
      baseStyle: { letterSpacing: "-0.02em" },
    },
  },
});

export default theme;
