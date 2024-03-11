import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
	theme: {
		colors: {
			white: 'white',
			red: 'red',
			black: 'black',
			purple: '#612a87',
			gray: 'gray'
		},
		fontFamily: {
			source_sans_3: ['var(--font-source-sans-3)']
		},
		screens: {
			desktop: '1281px',
			tabletLarge: {
				min: '963px',
				max: '1280px'
			},
			tablet: {
				min: '600px',
				max: '962px'
			},
			mobile: {
				max: '599px'
			}
		}
	}
};
export default config;
