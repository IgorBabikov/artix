import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { buildOptions } from './config/build/buildOptions';
import { BuildEnv, BuildPaths } from './config/build/types';

export default (env: BuildEnv) => {
  const mode =  env.mode || 'development'

  const paths: BuildPaths =  {
      entry:  path.resolve(__dirname, 'src', 'index.tsx'),
      output:  path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html')
    }

  const isDev = mode === 'development'
  
  const PORT = 3000


  const config: webpack.Configuration = buildOptions({
    mode,
    path: paths,
    isDev,
    port: env.port || PORT
})

  return config
};