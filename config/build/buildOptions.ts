import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { buildLoaders } from './buildLoaders';
import { BuildOptions } from './types';
import webpack from 'webpack';

export const buildOptions = (options: BuildOptions): webpack.Configuration => {
	const {mode, path} = options

	return {
		mode,
		entry: path.entry,
		module: {
			  rules: buildLoaders()
			},
		resolve: buildResolve(),
		output: {
			path: path.output,
			filename: '[name].[contenthash].js',
			clean: true,
		},

		plugins: buildPlugins(options)
};
}