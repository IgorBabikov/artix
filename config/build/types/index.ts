export type BuildMode = 'production' | 'development'

export interface BuildPaths {
	entry: string
	output: string
	html: string
}

export interface BuildEnv {
	mode: BuildMode
	port: number
}

export interface BuildOptions {
	mode: BuildMode
	path: BuildPaths
	isDev: boolean
	port: number
}