import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack';
import { BuildOptions } from './types';

export const buildPlugins = ({path}: BuildOptions): webpack.WebpackPluginInstance[] => {
	return [
		new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({template:  path.html}),
	]
}