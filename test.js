'use strict';
var test = require('tape');
var paragraphs = require('./');
var content1 = 'Lorem ipsum\ntest me';
var content2 = 'Lorem ipsum\n\nTesting more content';
var content3 = 'Lorem ipsum\r\n\r\nTesting carriage return content\r\nyeah';

test('Check if content returns as paragraph tags', function (t) {
  t.plan(3);
  t.equal(paragraphs(content1), '<p>Lorem ipsum<br />test me</p>');
  t.equal(paragraphs(content2), '<p>Lorem ipsum</p><p>Testing more content</p>');
  t.equal(paragraphs(content3), '<p>Lorem ipsum</p><p>Testing carriage return content<br />yeah</p>');
  t.end();
});
