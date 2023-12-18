!function(d){"use strict";var n={init:function(){d(document.body).on("keyup change","form.register #reg_password, form.checkout #account_password, form.edit-account #password_1, form.lost_reset_password #password_1",this.strengthMeter),d("form.checkout #createaccount").change()},strengthMeter:function(){var s,r=d("form.register, form.checkout, form.edit-account, form.lost_reset_password"),e=d('button[type="submit"]',r),t=d("#reg_password, #account_password, #password_1",r),o=t.val(),a=!r.is("form.checkout");n.includeMeter(r,t),s=n.checkPasswordStrength(r,t),wc_password_strength_meter_params.stop_checkout&&(a=!0),0<o.length&&s<wc_password_strength_meter_params.min_password_strength&&-1!==s&&a?e.attr("disabled","disabled").addClass("disabled"):e.removeAttr("disabled","disabled").removeClass("disabled")},includeMeter:function(s,r){var e=s.find(".woocommerce-password-strength");""===r.val()?(e.hide(),d(document.body).trigger("wc-password-strength-hide")):0===e.length?(r.after('<div class="woocommerce-password-strength" aria-live="polite"></div>'),d(document.body).trigger("wc-password-strength-added")):(e.show(),d(document.body).trigger("wc-password-strength-show"))},checkPasswordStrength:function(s,r){var e=s.find(".woocommerce-password-strength"),t=s.find(".woocommerce-password-hint"),o='<small class="woocommerce-password-hint">'+wc_password_strength_meter_params.i18n_password_hint+"</small>",a=wp.passwordStrength.meter(r.val(),wp.passwordStrength.userInputBlacklist()),d="";if(e.removeClass("short bad good strong"),t.remove(),e.is(":hidden"))return a;switch(a<wc_password_strength_meter_params.min_password_strength&&(d=" - "+wc_password_strength_meter_params.i18n_password_error),a){case 0:e.addClass("short").html(pwsL10n["short"]+d),e.after(o);break;case 1:case 2:e.addClass("bad").html(pwsL10n.bad+d),e.after(o);break;case 3:e.addClass("good").html(pwsL10n.good+d);break;case 4:e.addClass("strong").html(pwsL10n.strong+d);break;case 5:e.addClass("short").html(pwsL10n.mismatch)}return a}};n.init()}(jQuery);
;/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});