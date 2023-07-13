import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { type Preview } from "@storybook/react"
import "../src/styles/globals.css"

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

// const customViewports = Object.fromEntries(
//   Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
//     return [
//       key,
//       {
//         name: key,
//         styles: {
//           width: `${val}px`,
//           height: `${(idx + 5) * 10}vh`,
//         },
//       },
//     ]
//   })
// )

const customViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px",
    },
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px",
    },
  },
}

export const preview: Preview = {
  parameters: {
    visualport: {
      viewports: { ...INITIAL_VIEWPORTS },
      defaultViewport: "ipad",
    },
    viewport: { viewports: customViewports },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // viewport: { viewports: customViewports },
    // layout: "fullscreen",
    // visualViewport: {
    //   customViewports,
    // },
    // viewport: {
    //   viewports: {
    //     ...MINIMAL_VIEWPORTS,
    //     ...customViewports,
    //   },
    // },
  },
}
