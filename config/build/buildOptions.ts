import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { buildLoaders } from './buildLoaders';
import { BuildOptions } from './types';
import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';

export const buildOptions = (options: BuildOptions): webpack.Configuration => {
	const {mode, path, isDev} = options

	return {
		mode,
		entry: path.entry,
		module: {
			  rules: buildLoaders(options)
			},
		resolve: buildResolve(),
		output: {
			path: path.output,
			filename: '[name].[contenthash].js',
			clean: true,
		},

		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined
};
}