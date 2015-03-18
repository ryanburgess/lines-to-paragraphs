Lines to Paragraphs [![npm version](https://badge.fury.io/js/lines-to-paragraphs.svg)](http://badge.fury.io/js/lines-to-paragraphs) [![Build Status](https://travis-ci.org/ryanburgess/lines-to-paragraphs.svg)](https://travis-ci.org/ryanburgess/lines-to-paragraphs)
=============
A JavaScript module that converts new lines to paragraph tags.

## Install
```js
npm install lines-to-paragraphs --save-dev
```
## Use
```js
var paragraphs = require('lines-to-paragraphs');
var content = 'Lorem ipsum\n\nTesting more content';

paragraphs(content);
```
## Release History
* 1.0.3: Update documentation.
* 1.0.2: Add tests.
* 1.0.0: Initial release.
 
## Contributing
1. Fork it
2. Run `npm install`
3. Run Grunt watch `grunt watch`
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Commit your changes (`git commit -am "Add some feature"`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request## License
MIT © [Ryan Burgess](http://github.com/ryanburgess)