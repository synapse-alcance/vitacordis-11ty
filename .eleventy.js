module.exports = (config) => {
// diretorios a serem copiados no destino
config.addPassthroughCopy("src/css");
config.addPassthroughCopy("src/font");
config.addPassthroughCopy("src/img");
config.addPassthroughCopy("src/js");
config.addPassthroughCopy("src/swiper");
config.addPassthroughCopy({ "src/root" : "/" });
	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};