const theme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "./content/**/*.{html,js,md}",
    "./layouts/**/*.{html,js}",
    "./themes/**/layouts/**/*.{html,js}",
    "./assets/**/*.{html,js}",
  ],
  safelist: [
    'pagination',
    'page-item',
    'active',
    'chevron',
    'accordion',
    'panel',
    'metadata-panel',
    'prose',
    'prose-invert',
    'dark',
    'darker',
    'darkest'
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        darkest: theme(`colors.stone.900`),
        darker: theme(`colors.stone.800`),
        dark: theme(`colors.stone.700`),
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": false,
            "code::after": false,
            maxWidth: 'none',
            a: {
              color: theme(`colors.blue.600`),
              textDecoration: "none",
              "&:hover": {
                color: theme(`colors.blue.800`),
                textDecoration: "underline",
              },
            },
            pre: {
              backgroundColor: theme(`colors.stone.200`),
              color: theme(`colors.gray.700`),
            },
            code: { color: theme(`colors.gray.700`) },
            h1: {
              marginBottom: theme('spacing.4'),
            },
            h2: {
              marginTop: '0',
              marginBottom: '0',
            },
            '.accordion': {
              margin: '0',
              padding: theme('spacing.2'),
            },
            '.metadata': {
              margin: '0',
              padding: theme('spacing.2'),
            }
          },
        },
        invert: {
          css: {
            color: theme(`colors.gray.200`),
            a: {
              color: theme(`colors.yellow.300`),
              "&:hover": { color: theme(`colors.yellow.500`) },
            },
            h1: { color: theme(`colors.gray.200`) },
            h2: { color: theme(`colors.gray.200`) },
            h3: { color: theme(`colors.gray.200`) },
            h4: { color: theme(`colors.gray.200`) },
            h5: { color: theme(`colors.gray.200`) },
            h6: { color: theme(`colors.gray.200`) },
            strong: { color: theme(`colors.gray.200`) },
            td: { color: theme(`colors.gray.200`) },
            blockquote: { color: theme(`colors.gray.200`) },
            pre: {
              backgroundColor: theme(`colors.stone.700`),
            },
            code: { color: theme(`colors.gray.200`) },
          },
        },
      }),
    },
  },
  variants: { 
    typography: ["dark", "invert"],
    extend: {
      backgroundColor: ['dark', 'hover', 'group-hover'],
      textColor: ['dark', 'hover', 'group-hover'],
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
