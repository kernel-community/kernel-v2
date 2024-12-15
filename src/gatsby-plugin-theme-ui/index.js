import React from 'react'
import { icons as themeIcons } from '@makerdao/dai-ui-icons'
import { icons as brandingIcons } from '@makerdao/dai-ui-icons-branding'
import maker from '@makerdao/dai-ui-theme-maker'

const prismPreset = {
  color: 'codeText',
  backgroundColor: 'codeBG',
  '.selector, .attr-name, .string, .char, .builtin, .inserted': {
    color: 'primaryEmphasis',
  },
  // comments and characters like <, =>, (), etc
  '.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
    color: 'codeText',
  },
  '.comment': {
    fontStyle: 'italic',
    color: 'primaryMuted',
  },
  // class names, functions and numbers
  '.property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .maybe-class-name, .regex, .important, .variable':
    {
      color: 'secondary',
    },

  // keywords like const, return
  '.atrule, .attr-value, .keyword': {
    color: 'primaryEmphasis',
  },

  fontSize: 3,
  fontWeight: '400',
  fontFamily: 'monospace',
  overflow: 'auto',
  p: 3,
  mt: 0,
  borderRadius: '4px',
}

export default {
  ...maker, //<- Your default theme.
  useCustomProperties: true,
  useColorSchemeMediaQuery: true, //TODO(Rejon): useBodyStyles could be the culprit for the flashing we're seeing. Will explore.
  breakpoints: ['640px', '1228px', 'infinity'],
  icons: {
    ...themeIcons,
    ...brandingIcons,
    lightbulb: {
      path: (
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 12V11.0004C14.2144 10.0882 15 8.63582 15 7C15 4.23858 12.7614 2 10 2C7.23858 2 5 4.23858 5 7C5 8.63582 5.78555 10.0882 7 11.0004V12C7 12.5523 7.44772 13 8 13H12C12.5523 13 13 12.5523 13 12ZM7 15C7 14.4477 7.44772 14 8 14H10H12C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16C7.44772 16 7 15.5523 7 15Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 20 20',
    },
    kernel_icon: {
      path: (
        <g>
          <path
            d="M106,38.91A16.46,16.46,0,1,0,89.37,22.46,16.55,16.55,0,0,0,106,38.91Zm38.27,91.65c0,22.49-17.13,40.71-38.27,40.71s-38.27-18.22-38.27-40.71c0-14.89,16.79-42.65,28.12-59.7a12,12,0,0,1,20.29,0C127.48,87.91,144.27,115.67,144.27,130.56ZM206,107c0,54.58-44.86,99-100,99S6,161.61,6,107A98.51,98.51,0,0,1,60.55,18.86a8.35,8.35,0,0,1,11.2,3.6,8.17,8.17,0,0,1-3.63,11.08A82.11,82.11,0,0,0,22.67,107a81.2,81.2,0,0,0,9.63,38.41A73.37,73.37,0,0,1,47.46,85.38a8.38,8.38,0,0,1,11.71-1.27A8.19,8.19,0,0,1,60.46,95.7a56.64,56.64,0,0,0-12.79,36.07c0,30.84,24.55,56.11,55.33,57.65,1,0,2,.08,3,.08s2,0,3-.08c30.78-1.54,55.33-26.81,55.33-57.65a57.35,57.35,0,0,0-14.58-38.18A8.18,8.18,0,0,1,150.49,82a8.38,8.38,0,0,1,11.76.72,73.53,73.53,0,0,1,17.46,62.76A81.31,81.31,0,0,0,189.33,107a82.12,82.12,0,0,0-45.45-73.49,8.18,8.18,0,0,1-3.63-11.08,8.36,8.36,0,0,1,11.2-3.6A98.52,98.52,0,0,1,206,107Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 212 212',
    },
    kernel_icon_color: {
      path: (
        <g>
          <path
            fill="#FFD500"
            d="M106,37.91A16.46,16.46,0,1,0,89.37,21.46,16.55,16.55,0,0,0,106,37.91Z"
          />
          <path
            fill="#FFD500"
            d="M144.27,129.56c0,22.49-17.13,40.71-38.27,40.71s-38.27-18.22-38.27-40.71c0-14.89,16.79-42.65,28.12-59.7a12,12,0,0,1,20.29,0C127.48,86.91,144.27,114.67,144.27,129.56Z"
          />
          <path
            fill="#00EC9F"
            d="M151.45,17.86a8.36,8.36,0,0,0-11.2,3.6,8.18,8.18,0,0,0,3.63,11.08A82.12,82.12,0,0,1,189.33,106a81.31,81.31,0,0,1-9.62,38.41,73.53,73.53,0,0,0-17.46-62.76A8.38,8.38,0,0,0,150.49,81a8.18,8.18,0,0,0-.74,11.63,57.35,57.35,0,0,1,14.58,38.18c0,30.84-24.55,56.11-55.33,57.65-1,0-2,.08-3,.08s-2,0-3-.08c-30.78-1.54-55.33-26.81-55.33-57.65A56.64,56.64,0,0,1,60.46,94.7a8.19,8.19,0,0,0-1.29-11.59,8.38,8.38,0,0,0-11.71,1.27A73.37,73.37,0,0,0,32.3,144.44,81.2,81.2,0,0,1,22.67,106,82.11,82.11,0,0,1,68.12,32.54a8.17,8.17,0,0,0,3.63-11.08,8.35,8.35,0,0,0-11.2-3.6A98.51,98.51,0,0,0,6,106c0,54.58,44.86,99,100,99s100-44.39,100-99A98.52,98.52,0,0,0,151.45,17.86Z"
          />
        </g>
      ),
      viewBox: '0 0 212 210',
    },
    kernel_logo: {
      path: (
        <g>
          <path
            d="M45.4,2.6c3.9,0,7.1,3.2,7.1,7.1c0,3.9-3.2,7-7.1,7c-3.9,0-7.1-3.2-7.1-7.1C38.3,5.7,41.5,2.5,45.4,2.6z
	 M49.7,30.3c-2.1-3.2-6.5-3.2-8.7,0c-4.9,7.3-12.1,19.1-12.1,25.5c0,9.6,7.3,17.4,16.3,17.4c9,0,16.4-7.7,16.4-17.3
	C61.6,49.4,54.5,37.6,49.7,30.3z"
            fill="#FFCC00"
          />
          <path
            d="M64.8,8.1c-1.8-0.9-3.9-0.2-4.8,1.5c-0.9,1.7-0.2,3.9,1.5,4.7c11.9,6.1,19.3,18.2,19.3,31.5
	c0,5.9-1.5,11.5-4.2,16.4c0.4-1.9,0.6-3.8,0.6-5.8c0-7.7-2.8-15.2-7.9-21c-1.3-1.5-3.5-1.6-5-0.3c-1.5,1.3-1.6,3.5-0.3,5
	c4,4.5,6.2,10.3,6.2,16.3c-0.1,13.2-10.6,23.9-23.7,24.5c-0.4,0-0.9,0-1.3,0c-0.4,0-0.9,0-1.3,0c-13.1-0.7-23.6-11.5-23.5-24.7
	c0-5.7,1.9-11,5.5-15.4c1.2-1.5,1-3.7-0.5-5c-1.5-1.2-3.8-1-5,0.5C15.7,42,13.2,49,13.2,56.2c0,2,0.2,4,0.5,5.9
	c-2.6-4.9-4.1-10.5-4.1-16.4c0.1-13.3,7.5-25.3,19.5-31.3c1.8-0.9,2.5-3,1.6-4.7c-0.9-1.7-3-2.4-4.8-1.6
	C11.6,15.2,2.6,29.6,2.6,45.6C2.5,68.3,20.7,87,43.5,87.9c0.5,0,1.1,0,1.6,0.1C68.7,88.1,87.9,69.2,88,45.9
	C88,29.9,79.2,15.5,64.8,8.1z"
            fill="#25E899"
          />
          <path
            d="M113.9,44.9l11.8-12.1h6.1l-13.7,13.7l13.8,16.6h-6.1l-10.9-13.5l-0.9,0.9v12.5h-4.6V32.8h4.6V44.9z
	 M154.6,37.1h-12.1v7.3h11.8v4.3h-11.8v10.1h12.1v4.3h-16.7V32.8h16.7V37.1z M172.9,50.2l9.4,12.9h-5.6l-8.7-12.4h-0.8v12.4h-4.6
	V32.8h5.4c4,0,6.9,0.8,8.7,2.3c2,1.7,2.9,3.9,2.9,6.6c0,2.1-0.6,4-1.8,5.5C176.6,48.7,174.9,49.7,172.9,50.2z M167.2,46.7h1.5
	c4.3,0,6.5-1.7,6.5-5c0-3.1-2.1-4.7-6.3-4.7h-1.6V46.7z M188.9,63.1V30.7L211,53.8V32.8h4.6v32.1l-22.1-23.1v21.2L188.9,63.1
	L188.9,63.1z M241.5,37.1h-12.1v7.3h11.8v4.3h-11.8v10.1h12.1v4.3h-16.7V32.8h16.7V37.1z M254.1,32.8v26h8.9v4.3h-13.5V32.8H254.1z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 266.9 90.6',
    },
    minus: {
      path: (
        <g>
          <path
            d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 20 20',
    },
    moon: {
      path: (
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.28169 13.032C5.28246 14.5482 9.03909 14.0528 11.5459 11.546C14.0528 9.03911 14.5481 5.28247 13.032 2.28171C13.771 2.65508 14.4641 3.15043 15.0815 3.76778C18.2057 6.89197 18.2057 11.9573 15.0815 15.0815C11.9573 18.2057 6.89196 18.2057 3.76777 15.0815C3.15042 14.4641 2.65506 13.771 2.28169 13.032Z"
          />
        </g>
      ),
      viewBox: '0 0 20 20',
    },
    sun: {
      path: (
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 3C11 2.44772 10.5523 2 10 2C9.44772 2 9 2.44772 9 3V4C9 4.55228 9.44772 5 10 5C10.5523 5 11 4.55228 11 4V3ZM5.70712 4.70712C5.3166 4.3166 4.68343 4.3166 4.29291 4.70712C3.90239 5.09765 3.90239 5.73081 4.29291 6.12134L5.00002 6.82844C5.39054 7.21897 6.02371 7.21897 6.41423 6.82844C6.80476 6.43792 6.80476 5.80476 6.41423 5.41423L5.70712 4.70712ZM15.1213 6.82844L15.8284 6.12134C16.219 5.73081 16.219 5.09765 15.8284 4.70712C15.4379 4.3166 14.8047 4.3166 14.4142 4.70712L13.7071 5.41423C13.3166 5.80476 13.3166 6.43792 13.7071 6.82844C14.0976 7.21897 14.7308 7.21897 15.1213 6.82844ZM3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H4C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9H3ZM16 9C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H16ZM5.70711 15.4142L6.41421 14.7071C6.80474 14.3166 6.80474 13.6834 6.41421 13.2929C6.02369 12.9024 5.39052 12.9024 5 13.2929L4.29289 14C3.90237 14.3905 3.90237 15.0237 4.29289 15.4142C4.68342 15.8047 5.31658 15.8047 5.70711 15.4142ZM14.7071 13.7071C14.3166 13.3166 13.6834 13.3166 13.2929 13.7071C12.9024 14.0976 12.9024 14.7308 13.2929 15.1213L14 15.8284C14.3905 16.219 15.0237 16.219 15.4142 15.8284C15.8047 15.4379 15.8047 14.8047 15.4142 14.4142L14.7071 13.7071ZM11 16C11 15.4477 10.5523 15 10 15C9.44772 15 9 15.4477 9 16V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V16ZM10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 20 20',
    },
    github: {
      path: (
        <g transform="matrix(4.16667,0,0,4.16667,67.8667,132.933)">
          <path
            d="M0,-31.904C-8.995,-31.904 -16.288,-24.611 -16.288,-15.614C-16.288,-8.417 -11.621,-2.312 -5.148,-0.157C-4.333,-0.008 -4.036,-0.511 -4.036,-0.943C-4.036,-1.329 -4.05,-2.354 -4.058,-3.713C-8.589,-2.729 -9.545,-5.897 -9.545,-5.897C-10.286,-7.778 -11.354,-8.279 -11.354,-8.279C-12.833,-9.29 -11.242,-9.27 -11.242,-9.27C-9.607,-9.154 -8.747,-7.591 -8.747,-7.591C-7.294,-5.102 -4.934,-5.821 -4.006,-6.237C-3.858,-7.29 -3.438,-8.008 -2.972,-8.415C-6.589,-8.826 -10.392,-10.224 -10.392,-16.466C-10.392,-18.244 -9.757,-19.698 -8.715,-20.837C-8.883,-21.249 -9.442,-22.905 -8.556,-25.148C-8.556,-25.148 -7.188,-25.586 -4.076,-23.478C-2.777,-23.839 -1.383,-24.02 0.002,-24.026C1.385,-24.02 2.779,-23.839 4.08,-23.478C7.19,-25.586 8.555,-25.148 8.555,-25.148C9.444,-22.905 8.885,-21.249 8.717,-20.837C9.761,-19.698 10.392,-18.244 10.392,-16.466C10.392,-10.208 6.583,-8.831 2.954,-8.428C3.539,-7.925 4.06,-6.931 4.06,-5.411C4.06,-3.234 4.04,-1.477 4.04,-0.943C4.04,-0.507 4.333,0 5.16,-0.159C11.628,-2.318 16.291,-8.419 16.291,-15.614C16.291,-24.611 8.997,-31.904 0,-31.904"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 136 133',
    },
    clipboard: {
      path: (
        <g>
          <path
            d="M38 4H29.64C28.8 1.68 26.6 0 24 0C21.4 0 19.2 1.68 18.36 4H10C7.8 4 6 5.8 6 8V40C6 42.2 7.8 44 10 44H38C40.2 44 42 42.2 42 40V8C42 5.8 40.2 4 38 4ZM24 4C25.1 4 26 4.9 26 6C26 7.1 25.1 8 24 8C22.9 8 22 7.1 22 6C22 4.9 22.9 4 24 4ZM36 40H12C10.9 40 10 39.1 10 38V10C10 8.9 10.9 8 12 8H14V10C14 12.2 15.8 14 18 14H30C32.2 14 34 12.2 34 10V8H36C37.1 8 38 8.9 38 10V38C38 39.1 37.1 40 36 40Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 48 48',
    },
    folder: {
      path: (
        <g>
          <path
            d="M21.18 9.18C20.42 8.42 19.4 8 18.34 8H8C5.8 8 4.02 9.8 4.02 12L4 36C4 38.2 5.8 40 8 40H40C42.2 40 44 38.2 44 36V16C44 13.8 42.2 12 40 12H24L21.18 9.18Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 48 48',
    },
    forum: {
      path: (
        <g>
          <path
            d="M40 12H38V28C38 29.1 37.1 30 36 30H12V32C12 34.2 13.8 36 16 36H36L44 44V16C44 13.8 42.2 12 40 12ZM34 22V8C34 5.8 32.2 4 30 4H8C5.8 4 4 5.8 4 8V34L12 26H30C32.2 26 34 24.2 34 22Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 48 48',
    },
    globe: {
      path: (
        <g>
          <path
            d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM22 39.86C14.1 38.88 8 32.16 8 24C8 22.76 8.16 21.58 8.42 20.42L18 30V32C18 34.2 19.8 36 22 36V39.86ZM35.8 34.78C35.28 33.16 33.8 32 32 32H30V26C30 24.9 29.1 24 28 24H16V20H20C21.1 20 22 19.1 22 18V14H26C28.2 14 30 12.2 30 10V9.18C35.86 11.56 40 17.3 40 24C40 28.16 38.4 31.94 35.8 34.78Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 48 48',
    },
    laptop: {
      path: (
        <g>
          <path
            d="M40 36C42.2 36 43.98 34.2 43.98 32L44 12C44 9.8 42.2 8 40 8H8C5.8 8 4 9.8 4 12V32C4 34.2 5.8 36 8 36H2C0.9 36 0 36.9 0 38C0 39.1 0.9 40 2 40H46C47.1 40 48 39.1 48 38C48 36.9 47.1 36 46 36H40ZM10 12H38C39.1 12 40 12.9 40 14V30C40 31.1 39.1 32 38 32H10C8.9 32 8 31.1 8 30V14C8 12.9 8.9 12 10 12Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 48 48',
    },
    pencil: {
      path: (
        <g>
          <path
            d="M6 34.92V41C6 41.56 6.44 42 7 42H13.08C13.34 42 13.6 41.9 13.78 41.7L35.62 19.88L28.12 12.38L6.3 34.2C6.1 34.4 6 34.64 6 34.92ZM41.42 14.08C42.2 13.3 42.2 12.04 41.42 11.26L36.74 6.58C35.96 5.8 34.7 5.8 33.92 6.58L30.26 10.24L37.76 17.74L41.42 14.08V14.08Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 48 48',
    },
    people: {
      path: (
        <g>
          <path
            d="M32 22C35.32 22 37.98 19.32 37.98 16C37.98 12.68 35.32 10 32 10C28.68 10 26 12.68 26 16C26 19.32 28.68 22 32 22ZM16 22C19.32 22 21.98 19.32 21.98 16C21.98 12.68 19.32 10 16 10C12.68 10 10 12.68 10 16C10 19.32 12.68 22 16 22ZM16 26C11.34 26 2 28.34 2 33V36C2 37.1 2.9 38 4 38H28C29.1 38 30 37.1 30 36V33C30 28.34 20.66 26 16 26ZM32 26C31.42 26 30.76 26.04 30.06 26.1C30.1 26.12 30.12 26.16 30.14 26.18C32.42 27.84 34 30.06 34 33V36C34 36.7 33.86 37.38 33.64 38H44C45.1 38 46 37.1 46 36V33C46 28.34 36.66 26 32 26Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 48 48',
    },
    wrench: {
      path: (
        <g>
          <path
            d="M24.18 5.81991C20.16 1.79991 14.14 0.979909 9.30001 3.33991L16.56 10.5999C17.34 11.3799 17.34 12.6399 16.56 13.4199L13.38 16.5999C12.6 17.3999 11.34 17.3999 10.56 16.5999L3.30001 9.33991C0.960007 14.1999 1.78001 20.1799 5.80001 24.1999C9.52001 27.9199 14.96 28.8999 19.58 27.1599L35.5 43.0799C37.56 45.1399 40.88 45.1399 42.92 43.0799C44.98 41.0199 44.98 37.6999 42.92 35.6599L27.08 19.7999C28.92 15.1199 27.96 9.59991 24.18 5.81991Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: '0 0 48 48',
    },
  }, //<- Icon package
  colors: {
    ...maker.colors, //<- Deconstruct maker.colors so default colors aren't lost.
    primary: '#4B5B33',
    primaryEmphasis: '#3A4729',
    primaryAlt: '#1AAA9B',
    primaryMuted: '#A0AE84',
    secondary: '#76845D',
    secondaryEmphasis: '#e09f00',
    secondaryAlt: '#FBA615',
    secondaryMuted: '#FFF3DD',
    background: '#fafafa',
    backgroundAlt: '#4B5B33',
    surface: '#E7FCFA',
    surfaceAlt: '#fafafa',
    surfaceDark: '#4B5B33',
    muted: '#D0D3D7',
    link: '#4B5B33',
    linkAlt: '#FFF',
    mutedAlt: '#90969C',
    // mutedAlt: '',
    mutedDark: '#757087',
    kernelPurple: '#9090F1',
    kernelGreen: '#25E899',
    error: '#EE565B',
    success: '#46B17B',
    successAlt: '#68FEE3',
    notice: '#FF78F2',
    noticeAlt: '#F2B9FF',
    warning: '#FFBA44',
    warningAlt: '#FFBA44',
    text: '#000',
    onBackgroundAlt: '#fafafa',
    textMuted: '#484857',
    strawberry: '#FF78F2',
    bubblegum: '#F2B9FF',
    grape: '#9B9FFF',
    onPrimary: '#fafafa',
    onSecondary: '#3A4729',
    lemon: '#F3FF64',
    flashCard: '#212145',
    flashText: '#fff',
    flashCorrectBG: '#00EC9F',
    flashWarningBG: '#FFBA44',
    flashCardAnswerBG: '#817e92',
    testimonialCardSlack: '#fafafa',
    testimonialCardSlackText: '#757087',
    testimonialCardTwitter: '#212144',
    testimonialCardTwitterText: '#ffffff',
    modes: {
      dark: {
        testimonialCardSlack: '#fafafa',
        testimonialCardSlackText: '#3F3F3F',
        testimonialCardTwitter: '#474791',
        testimonialCardTwitterText: '#ffffff',
        primary: '#9090F1',
        primaryEmphasis: '#4545bf',
        primaryMuted: '#5454b0',
        secondary: '#79F1B5',
        secondaryEmphasis: '#09cb6a',
        backgroundAlt: '#4D4968',
        secondaryMuted: '#94008E',
        text: '#fafafa',
        onBackgroundAlt: '#fafafa',
        textMuted: '#b7b7e8',
        muted: '#E1DFEC',
        mutedAlt: '#4D4968',
        background: '#212144',
        surface: '#4D4968',
        surfaceAlt: '#4D4968',
        warning: '#FFBA44',
        link: '#79F1B5',
        linkAlt: '#E9DAAC',
        warningAlt: '#FBA615',
        notice: '#9B98F8',
        noticeAlt: '#514E9F',
        success: '#46B17B',
        successAlt: '#FFB400',
        statusBG: '#291A42',
        statusColor: '#fafafa',
        codeBG: '#00585E',
        codeText: '#fafafa',
        onPrimary: '#291A42',
        flashCard: '#212145',
        flashCardAnswerBG: '2e2949',
        flashText: '#fff',
        flashCorrectBG: '#00EC9F',
        flashWarningBG: '#FFBA44',
      },
    },

    statusBG: '#291A42',
    statusColor: '#FFFFFF',

    callout: '#f4f4f7',
    calloutSecondary: '#fdefd9',
    calloutSecondaryBorder: '#F5B13D',

    codeBG: '#4D4968',
    codeText: '#FFFFFF',
  },
  text: {
    text: {
      ...maker.text.text,
      color: 'text',
      marginBottom: '24px',
    },
    heading: {
      ...maker.text.heading,
      color: 'text',
    },
    h1: {
      fontSize: ['48px', '48px', '48px'],
      letterSpacing: '0.3px',
      fontWeight: '500',
      fontFamily: 'heading',
      color: 'text',
      marginTop: '48px',
      marginBottom: '32px',
    },
    h2: {
      fontSize: '32px',
      fontWeight: '500',
      letterSpacing: '0.3px',
      fontFamily: 'heading',
      color: 'text',
      marginTop: '48px',
      marginBottom: '24px',
    },
    h3: {
      fontSize: '24px',
      fontWeight: '500',
      letterSpacing: '0.3px',
      fontFamily: 'heading',
      color: 'text',
      marginTop: '16px',
      marginBottom: '16px',
    },
    h4: {
      fontSize: '20px',
      fontWeight: '500',
      letterSpacing: '0.3px',
      fontFamily: 'heading',
      color: 'text',
      marginTop: '8px',
      marginBottom: '8px',
    },
    largeText: {
      fontSize: '18px',
      fontWeight: 'normal',
      letterSpacing: '0.3px',
      fontFamily: 'heading',
    },
    smallText: {
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.3px',
    },
  },
  shadows: {
    high: '0px 2px 17px rgba(35, 21, 54, 0.46)',
    raised: '0px 2px 15px rgba(35, 21, 54, 0.15)',
    float: '0px 2px 10px rgba(35, 21, 54, 0.05)',
  },
  radii: {
    ...maker.radii,
    round: '32px',
  },
  fonts: {
    serif: 'Miriam Libre',
    sanserif: 'Libre Franklin',
    body: 'Libre Franklin, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, sans-serif',
    heading:
      'Miriam Libre, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, sans-serif',
  },
  styles: {
    ...maker.styles,
    root: {
      ...maker.styles.root,
      color: 'textMuted',
    },
    a: {
      color: 'link',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all .1s ease',
      '&.active': {
        textDecoration: 'underline',
      },
      '&:hover': {
        textDecoration: 'underline',
      },
      '&:hover > svg': {
        color: 'linkAlt',
      },
    },
    Link: {
      color: 'link',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all .1s ease',
      '&.active': {
        textDecoration: 'underline',
        fontWeight: 'bold',
      },
      '&:hover': {
        textDecoration: 'underline',
      },
      '&:hover > svg': {
        color: 'linkAlt',
      },
    },
    pre: {
      ...prismPreset,
    },
    code: {
      ...prismPreset,
      background: 'none',
    },
  },

  buttons: {
    primary: {
      cursor: 'pointer',
      outline: 'none',
      fontFamily: 'body',
      borderRadius: '32px',
      py: '15px',
      px: 4,
      color: 'onPrimary',
      fontWeight: '500',
      fontSize: '18px',
      letterSpacing: '0.03px',
      lineHeight: '19px',
      margin: '8px 24px 8px 0',
      bg: 'primary',
      '&:hover': {
        bg: 'primaryEmphasis',
        textDecoration: 'none',
        color: 'onPrimary',
        transition: '.1s ease',
      },
      '&:active': {
        color: 'onPrimary',
        textDecoration: 'none',
        boxShadow: 'raised',
        bg: 'primaryEmphasis',
        transition: '.1s ease',
      },
      '&:disabled': {
        bg: 'primaryMuted',
        color: 'textMuted',
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'onSecondary',
      bg: 'secondary',
      '&:hover': {
        textDecoration: 'none',
        bg: 'secondaryEmphasis',
        transition: '.1s ease',
      },
      '&:active': {
        color: 'onPrimary',
        textDecoration: 'none',
        boxShadow: 'raised',
        transition: '.1s ease',
      },
      '&:disabled': {
        bg: 'secondaryMuted',
        color: 'muted',
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
    },
    outline: {
      variant: 'buttons.primary',
      bg: 'transparent',
      color: 'textMuted',
      border: '1px solid',
      borderColor: 'text',
      '&:hover': {
        color: 'textMuted',
        textDecoration: 'none',
        bg: 'primaryMuted',
        transition: '.1s ease',
      },
      '&:active': {
        color: 'textMuted',
        textDecoration: 'none',
        bg: 'primaryMuted',
        boxShadow: 'raised',
        transition: '.1s ease',
      },
      '&:disabled': {
        borderColor: 'muted',
        color: 'muted',
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
    },
    primarySmall: {
      variant: 'buttons.primary',
      py: 2,
      px: '24px',
      fontSize: '10px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      lineHeight: '12px',
    },
    outlineSmall: {
      variant: 'buttons.outline',
      py: 2,
      px: '24px',
      fontSize: '10px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      lineHeight: '12px',
    },
    icon_primary: {
      variant: 'buttons.primary',
    },
    icon_secondary: {
      variant: 'buttons.secondary',
    },
    icon_outline: {
      variant: 'buttons.outline',
    },
    icon_outlineSmall: {
      variant: 'buttons.outlineSmall',
    },
    text: {
      variant: 'buttons.primary',
      fontSize: 3,
      bg: 'transparent',
      color: 'link',
      '&:hover': {
        color: 'primaryEmphasis',
        textDecoration: 'none',
        transition: '.1s ease',
      },
      '&:active': {
        color: 'primary',
        textDecoration: 'none',
        transition: '.1s ease',
      },
      '&:disabled': {
        color: 'mutedAlt',
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
    },
    textSmall: {
      variant: 'buttons.text',
    },
    icon_text: {
      variant: 'buttons.text',
    },
  },
}
