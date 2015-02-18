module.exports = function paragraphTags(content){
  'use strict';
  var updatedContent = '<p>' + content.replace(/\n([ \t]*\n)+/g, '</p><p>').replace(/\n/g, '<br />') + '</p>';

  return updatedContent;
};