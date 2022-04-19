/*!
 * xaskify
 * Copyright(c) 2022 Shinkeon Kim
 * MIT Licensed
 */

module.exports = xakify;

const DEFAULT_MASKING_REGEX = /[a-zA-Z0-9ㄱ-힣]/g;
const DEFAULT_MASKING_TEXT = 'X';

const maskifyContent = (element, maskingText = DEFAULT_MASKING_TEXT, maskifyRegex = DEFAULT_MASKING_REGEX) => {
  if(element.tagName === 'SCRIPT' || element.tagName == 'NOSCRIPT') return;

  if(element.hasChildNodes()) {
    element.childNodes.forEach((child) => {
      maskifyContent(child);
    })
  }

  if(element.nodeName === '#text') {
    element.data = element.data && element.data.replaceAll(maskifyRegex, maskingText);
  }
}

const xakify = (element, maskingText, maskifyRegex) => {
  maskifyContent(element, maskingText, maskifyRegex);
}
