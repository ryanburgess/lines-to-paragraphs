'use strict';
var test = require('tape');
var paragraphs = require('./');
var content1 = 'Lorem ipsum\ntest me';
var content2 = 'Lorem ipsum\n\nTesting more content';

test('Check if content returns as paragraph tags', function (t) {
  t.plan(2);
  t.assert(paragraphs(content1) === '<p>Lorem ipsum<br />test me</p>');
  t.assert(paragraphs(content2) === '<p>Lorem ipsum</p><p>Testing more content</p>');
  t.end();
});