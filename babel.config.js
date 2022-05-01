module.exports = function (api) {
	api.cache(true)

	const presets = [
		// [
		// 	// "@babel/preset-env",
		// 	// {
		// 	// 	targets: {
		// 	// 		node: "current",
		// 	// 		edge: "17",
		// 	// 		firefox: "58",
		// 	// 		chrome: "64",
		// 	// 		safari: "11.1",
		// 	// 		ie: "11.0.46",
		// 	// 	},
		// 	// 	useBuiltIns: "usage",
		// 	// },
		// ],
		// "@babel/preset-flow",
		"@babel/preset-env",
		"@babel/preset-react",
	]

	const plugins = [
		"@babel/plugin-proposal-async-generator-functions",
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-proposal-object-rest-spread",
		// "babel-plugin-styled-components",
	]

	return {
		presets,
		plugins,
	}
}
