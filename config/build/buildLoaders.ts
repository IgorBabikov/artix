import webpack from 'webpack';
import { BuildOptions } from './types';
import  MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {
	const typeScriptLoader = {
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
		}

	const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			 {
			loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						 localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
					}
				}

			 },
		    "sass-loader",
        ],
	}

	return [typeScriptLoader, scssLoader]
}

