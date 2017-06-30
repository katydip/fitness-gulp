# gulp-config-strip-debug
[![Build Status](https://travis-ci.org/luizdesign/gulp-config-strip-debug.svg?branch=master)](https://travis-ci.org/luizdesign/gulp-config-strip-debug)

> Strip `console`, `alert`, and `debugger` statements from JavaScript code with [config-strip-debug](https://github.com/luizdesign/config-strip-debug)


## Install

```sh
npm install --save-dev gulp-config-strip-debug
```


## Usage

```js
var gulp = require('gulp');
var stripDebug = require('gulp-config-strip-debug');

gulp.task('default', function () {
	return gulp.src('src/app.js')
		.pipe(stripDebug())
		.pipe(gulp.dest('dist'));
});
```


## Testing
For execute the unit tests:
```sh
npm test
```

### Coverage
For generate the code coverage this module use the [istambul](http://gotwarlost.github.io/istanbul/). The code coverage report is generate in **coverage/** folder.


## Contribute
For contribute with this project, create a fork in github https://github.com/luizdesign/gulp-config-strip-debug.
