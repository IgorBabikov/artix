import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = ({path, isDev}: BuildOptions): webpack.WebpackPluginInstance[] => {
	return [
		new MiniCssExtractPlugin({
			filename: isDev ? "[name].css" : "[name].[contenthash].css",
			chunkFilename: isDev ? "[id].css" : "[id].[contenthash].css",
		}),
		new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({template:  path.html}),
	]
}