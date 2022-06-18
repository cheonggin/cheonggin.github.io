/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin.js')

const mdStylePlugin = plugin(
  ({ addComponents, addBase, addUtilities, config }) => {
    const buttons = {
      '.btn': {
        padding: '.5rem 1rem',
        borderRadius: '.25rem',
        fontWeight: '600'
      },
      '.btn-blue': {
        backgroundColor: '#3490dc',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#2779bd'
        }
      },
      '.btn-red': {
        backgroundColor: '#e3342f',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#cc1f1a'
        }
      },
      '.bg-reco': {
        backgroundColor: config('theme.colors.white'),
        '@media (prefers-color-scheme: dark)': {
          backgroundColor: config('theme.colors.gray.900')
        }
      }
    }

    addComponents(buttons)

    const newUtilities = {
      '.hhhhh': {
        height: '60vh'
      }
    }

    addUtilities(newUtilities)

    addBase({
      body: {
        backgroundColor: 'white',
        color: 'black',
        '@media (prefers-color-scheme: dark)': {
          backgroundColor: 'black',
          color: 'white'
        }
      },
      h1: {
        fontSize: config('theme.fontSize.2xl')
      }
    })
  }
)

// 品牌色
const brand = {
  DEFAULT: '#4954e6',
  light: '#616ae5'
}

// 背景色
const bg = {
  light: {
    DEFAULT: '#ffffff',
    light: '#f3f4f5',
    lighter: '#eeeeee'
  },
  dark: {
    DEFAULT: '#22272e',
    light: '#2b313a',
    lighter: '#262c34'
  },
  code: {
    DEFAULT: '#F9FAFB',
    dark: '#363b46'
  }
}

// 文本色
const text = {
  accent: brand.DEFAULT,
  quote: '#999999',
  light: {
    DEFAULT: '#2c3e50',
    light: '#3a5169',
    lighter: '#4e6e8e',
    lightest: '#6a8bad'
  },
  dark: {
    DEFAULT: '#adbac7',
    light: '#96a7b7',
    lighter: '#8b9eb0',
    lightest: '#8094a8'
  }
}

// 边框
const border = {
  light: {
    DEFAULT: '#eaecef',
    darker: '#dfe2e5'
  },
  dark: {
    DEFAULT: '#3e4c5a',
    darker: '#34404c'
  }
}

// 自定义容器
const container = {
  info: {
    border: 'rgb(97, 106, 229)',
    bg: 'rgba(97, 106, 229, 0.1)'
  },
  warning: {
    border: 'rgb(251, 155, 95)',
    bg: 'rgba(251, 155, 95, 0.1)'
  },
  danger: {
    border: 'rgb(242, 109, 109)',
    bg: 'rgba(242, 109, 109, 0.1)'
  }
}

const colors = {
  brand,
  bg,
  text,
  border,
  container
}

module.exports = {
  content: ['./src/.vuepress/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundOpacity: {
        98: '.98'
      },
      borderRadius: {
        '1/2': '50%'
      },
      borderWidth: {
        6: '6px'
      },
      // boxShadow 不支持嵌套
      boxShadow: {
        light: '0 1px 8px 0 rgba(0, 0, 0, 0.1)',
        'light-heavier': '0 2px 16px 0 rgba(0, 0, 0, 0.2)',
        dark: '0 1px 8px 0 rgba(0, 0, 0, .6)',
        'dark-heavier': '0 2px 16px 0 rgba(0, 0, 0, .7)'
      },
      colors,
      height: () => ({ 'screen-3/5': '60vh' }),
      zIndex: {
        'negative-10': -10
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['dark'],
      borderWidth: ['dark'],
      boxShadow: ['dark']
    }
  },
  plugins: [mdStylePlugin]
}
