module.exports = function (grunt) {
	grunt.initConfig({
		meta: {
			banner: '/* This is my minified app, built <%= grunt.template.today() %> */'
		},
		min: {
			dist: {
				src: ['<banner>', 'calculator/*.js'],
				dest: 'calculator.min.js'
			},
			addsub: {
				src: ['calculator/add.js', 'calculator/subtract.js'],
				dest: 'addsub.js'
			}
		},
		watch: {
			files: ['calculator/*.js'],
			tasks: ['min:dist']
		}
	});

	grunt.registerTask('default', [
		'min'
	]);
};