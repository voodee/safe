var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  stylus: {
    src: src + "/stylus/*.styl",
    dest: dest + "/css"
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  markup: {
    src: src + "/htdocs/**",
    cssDest: dest + '/css',
    jsDest: dest + '/js',
    cssSrc: src + '/css',
    jsSrc: src + '/javascript',
    dest: dest,
    srcOther: src
  },
  script: {
    src: src + "/javascript",
    dest: dest + "/js"
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/main.coffee',
      dest: dest + "/js",
      outputName: 'main.js',
      // Additional file extentions to make optional
      extensions: ['.coffee', '.hbs'],
      // list of modules to make require-able externally
      require: ['jquery', 'underscore']
      // See https://github.com/greypants/gulp-starter/issues/87 for note about
      // why this is 'backbone/node_modules/underscore' and not 'underscore'
    }]
  },
  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    dest: dest
  }
};
