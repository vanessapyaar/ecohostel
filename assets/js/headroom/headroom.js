!function(t,n){"use strict";function i(t){this.callback=t,this.ticking=!1}function e(n){return n&&"undefined"!=typeof t&&(n===t||n.nodeType)}function s(t){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var n,i,o=t||{};for(i=1;i<arguments.length;i++){var r=arguments[i]||{};for(n in r)o[n]="object"!=typeof o[n]||e(o[n])?o[n]||r[n]:s(o[n],r[n])}return o}function o(t){return t===Object(t)?t:{down:t,up:t}}function r(t,n){n=s(n,r.options),this.lastKnownScrollY=0,this.elem=t,this.debouncer=new i(this.update.bind(this)),this.tolerance=o(n.tolerance),this.classes=n.classes,this.offset=n.offset,this.scroller=n.scroller,this.initialised=!1,this.onPin=n.onPin,this.onUnpin=n.onUnpin,this.onTop=n.onTop,this.onNotTop=n.onNotTop}var l={bind:!!function(){}.bind,classList:"classList"in n.documentElement,rAF:!!(t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame)};t.requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame,i.prototype={constructor:i,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},r.prototype={constructor:r,init:function(){return r.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var t=this.classes;this.initialised=!1,this.elem.classList.remove(t.unpinned,t.pinned,t.top,t.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var t=this.elem.classList,n=this.classes;(t.contains(n.pinned)||!t.contains(n.unpinned))&&(t.add(n.unpinned),t.remove(n.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var t=this.elem.classList,n=this.classes;t.contains(n.unpinned)&&(t.remove(n.unpinned),t.add(n.pinned),this.onPin&&this.onPin.call(this))},top:function(){var t=this.elem.classList,n=this.classes;t.contains(n.top)||(t.add(n.top),t.remove(n.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var t=this.elem.classList,n=this.classes;t.contains(n.notTop)||(t.add(n.notTop),t.remove(n.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(n.documentElement||n.body.parentNode||n.body).scrollTop},getViewportHeight:function(){return t.innerHeight||n.documentElement.clientHeight||n.body.clientHeight},getDocumentHeight:function(){var t=n.body,i=n.documentElement;return Math.max(t.scrollHeight,i.scrollHeight,t.offsetHeight,i.offsetHeight,t.clientHeight,i.clientHeight)},getElementHeight:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},getScrollerHeight:function(){return this.scroller===t||this.scroller===n.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(t){var n=0>t,i=t+this.getViewportHeight()>this.getScrollerHeight();return n||i},toleranceExceeded:function(t,n){return Math.abs(t-this.lastKnownScrollY)>=this.tolerance[n]},shouldUnpin:function(t,n){var i=t>this.lastKnownScrollY,e=t>=this.offset;return i&&e&&n},shouldPin:function(t,n){var i=t<this.lastKnownScrollY,e=t<=this.offset;return i&&n||e},update:function(){var t=this.getScrollY(),n=t>this.lastKnownScrollY?"down":"up",i=this.toleranceExceeded(t,n);this.isOutOfBounds(t)||(t<=this.offset?this.top():this.notTop(),this.shouldUnpin(t,i)?this.unpin():this.shouldPin(t,i)&&this.pin(),this.lastKnownScrollY=t)}},r.options={tolerance:{up:0,down:0},offset:0,scroller:t,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},r.cutsTheMustard="undefined"!=typeof l&&l.rAF&&l.bind&&l.classList,t.Headroom=r}(window,document);