// import babel from 'rollup-plugin-babel';
// import babelrc from 'babelrc-rollup';
// import scss from 'rollup-plugin-scss';

// export default {
// 	entry: 'src/lib/index.js',
// 	dest: 'server_production.js',
// 	plugins: [
// 		babel(babelrc({ addModuleOptions: false })),
// 		scss({
// 			output: 'bundle.css'
// 		})
// 	]
// };

// rollup.config.js
// import resolve from 'rollup-plugin-node-resolve';
// import babel from 'rollup-plugin-babel';
// // Convert CJS modules to ES6, so they can be included in a bundle
// import commonjs from 'rollup-plugin-commonjs';
// import postcss from 'rollup-plugin-postcss';
// import postcssModules from 'postcss-modules';
// const cssExportMap = {};
// export default {
// 	input: 'src/lib/index.js',
// 	output: {
// 		file: 'dist/bundle.js',
// 		format: 'cjs'
// 	},
// 	external: ['react', 'react-proptypes'],
// 	plugins: [
// 		resolve(),
// 		postcss({
// 			plugins: [
// 				postcssModules({
// 					getJSON(id, exportTokens) {
// 						cssExportMap[id] = exportTokens;
// 					}
// 				})
// 			],
// 			getExportNamed: false,
// 			getExport(id) {
// 				return cssExportMap[id];
// 			},
// 			extract: 'dist/styles.css'
// 		}),
// 		commonjs(),
// 		babel({
// 			exclude: 'node_modules/**'
// 		})
// 	]
// };

import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
// import visualizer from 'rollup-plugin-visualizer';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';

import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
const cssExportMap = {};

export default {
	input: 'src/lib/index.js',
	output: [
		{
			file: 'dist/index.js',
			format: 'umd',
			sourcemap: 'inline',
			name: 'bundle'
		}
	],
	plugins: [
		postcss({
			plugins: [
				postcssModules({
					getJSON(id, exportTokens) {
						cssExportMap[id] = exportTokens;
					}
				})
			],
			getExportNamed: false,
			getExport(id) {
				return cssExportMap[id];
			},
			extract: 'dist/styles.css'
		}),
		progress(),
		nodeResolve({
			browser: true
		}),
		json(),
		commonjs({
			include: ['node_modules/**'],
			exclude: ['node_modules/process-es6/**'],
			namedExports: {
				'node_modules/react/index.js': [
					'Children',
					'Component',
					'PropTypes',
					'createElement',
					'PureComponent',
					'Fragment'
				],
				'node_modules/react-dom/index.js': ['render']
			}
		}),
		babel({
			babelrc: false,
			presets: [['es2015', { modules: false }], 'stage-1', 'react'],
			plugins: ['external-helpers']
		}),
		// visualizer(),
		filesize(),
		replace({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
};
