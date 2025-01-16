import react from '@vitejs/plugin-react';
import path from 'path';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./vitest-setup.ts'],
		coverage: {
			exclude: [
				...coverageConfigDefaults.exclude,
				'src/app/*',
				'src/components/Menu/index.tsx',
				'src/components/SVGs',
				'src/type',
				'tailwind.config.ts',
				'postcss.config.js',
				'next.config.mjs'
			]
		}
	}
});
