!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Thinitor=t():e.Thinitor=t()}(self,(function(){return(()=>{"use strict";var e={768:function(e,t,n){var r=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],l=0,s=i.length;l<s;l++,o++)r[o]=i[l];return r};Object.defineProperty(t,"__esModule",{value:!0});var o=n(116),i=n(555),l=n(903),s=n(55),a=function(){function e(e){this.classes=[];var t=document.getElementById(e);if(t){this.rootElement=t,this.element=t;var n=new s.default(i.generateRandomString());this.element.appendChild(n.getElement()),this.classes=r(this.classes,[n]),o.listenEnterKeyInTheRoot(this),o.listenBackspaceKeyInTheRoot(this),o.listenArrowKeyInTheRoot(this)}else l.logError("Can't find the element has \""+e+'" id.')}return e.prototype.addNewChild=function(e){var t,n=document.activeElement;if(this.classes.forEach((function(e,r){e.getElementId()===n.id&&(t=r)})),t+1===this.classes.length)return this.element.appendChild(e.getElement()),this.classes=r(this.classes,[e]),void document.getElementById(e.getElementId()).focus();i.insertAfter(this.element,e.getElement(),n),this.classes.splice(t,0,e),document.getElementById(e.getElementId()).focus()},e.prototype.removeChild=function(e){var t;this.classes.forEach((function(n,r){n.getElementId()===e.id&&(t=r)})),document.getElementById(e.previousElementSibling.id).focus(),this.classes.splice(t,1),e.remove()},e.prototype.getRootElement=function(){return this.rootElement},e.prototype.getClasses=function(){return this.classes},e.prototype.getHtml=function(){return this.element.innerHTML},e.prototype.getElement=function(){return this.element},e}();t.default=a},55:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(790),o=n(903),i=function(){function e(e){e?(this.id=e,this.element=r.createElement(e,"p")):o.logError("Fail to create element, id is missing.")}return e.prototype.getElement=function(){return this.element},e.prototype.getElementId=function(){return this.id},e}();t.default=i},601:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default={ERROR_PREFIX:"Thinitor Error | "}},607:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(768);t.default=r.default},790:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=void 0;var r=n(903);t.createElement=function(e,t){e&&t||r.logUndefinedParameter("createElement");var n=document.createElement(t);return n.contentEditable="true",n.id=e,n}},116:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.listenArrowKeyInTheRoot=t.listenBackspaceKeyInTheRoot=t.listenEnterKeyInTheRoot=void 0;var r=n(555),o=n(55);t.listenEnterKeyInTheRoot=function(e){e.getElement().addEventListener("keydown",(function(t){if("Enter"===t.key&&r.checkIsChildElement(document.activeElement)){t.preventDefault();var n=r.generateRandomString(),i=new o.default(n);e.addNewChild(i)}}))},t.listenBackspaceKeyInTheRoot=function(e){e.getElement().addEventListener("keydown",(function(t){if("Backspace"===t.key){var n=document.activeElement;r.checkIsChildElement(n)&&n.innerHTML.length<1&&n.previousElementSibling&&(t.preventDefault(),e.removeChild(n))}}))},t.listenArrowKeyInTheRoot=function(e){e.getElement().addEventListener("keydown",(function(e){if("ArrowUp"===e.key){var t=document.activeElement.previousElementSibling;if(console.log(t),t){var n=document.createRange(),r=t.childNodes[t.childNodes.length-1];n.setStart(r,r.nodeValue.length),n.collapse(!0),(o=document.getSelection()).removeAllRanges(),o.addRange(n)}}if("ArrowDown"===e.key){var o,i=document.activeElement.nextElementSibling;if(i)n=document.createRange(),r=i.childNodes[i.childNodes.length-1],n.setStart(r,r.nodeValue.length),n.collapse(!0),(o=document.getSelection()).removeAllRanges(),o.addRange(n)}}))}},555:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.checkIsChildElement=t.getElementIndex=t.insertAfter=t.generateRandomString=void 0,t.generateRandomString=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<15;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return"thinitor_element_"+e},t.insertAfter=function(e,t,n){e.insertBefore(t,n.nextSibling)},t.getElementIndex=function(e,t){for(var n,r=e.parentElement.children,o=0;o<r.length;o++)if(r[o].id===t){n=o;break}return n},t.checkIsChildElement=function(e){return e.id.includes("thinitor_element_")}},903:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.logUndefinedParameter=t.logError=void 0;var r=n(601);t.logError=function(e){console.error(""+r.default.ERROR_PREFIX+e)},t.logUndefinedParameter=function(e){console.error(r.default.ERROR_PREFIX+"Missing parameter. function: "+e)}}},t={};return function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(607)})()}));
//# sourceMappingURL=app.js.map