import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { buildOptions } from './config/build/buildOptions';

const config: webpack.Configuration = buildOptions({
  mode: 'development',
  path: {
    entry:  path.resolve(__dirname, 'src', 'index.ts'),
    output:  path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
})

export default config;