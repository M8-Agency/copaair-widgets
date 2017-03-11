import Booking from './widgets/Booking';
import Signup from './widgets/Signup';
import Autocomplete from './lib/Autocomplete';
import FormHelper from './lib/FormHelper';

(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
  'use strict';

  /**
   * Bind widgets to jQuery object prototype.
   *
   * @param  {Object} options Options passed to override defaults.
   * @return {Object}         Current object instance
   */
  $.fn.copaairBooking = function copaairBooking(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_copaairBooking')) {
        $.data(this, 'plugin_copaairBooking', new Booking(this, options));
      }
    });
  };

  $.fn.copaairSignup = function copaairSignup(options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_copaairSignup')) {
        $.data(this, 'plugin_copaairSignup', new Signup(this, options));
      }
    });
  };

  $.fn.serializeObject = function () {
    const o = {};
    const a = this.serializeArray();

    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });

    return o;
  };
  
  window.CopaairWidget = {
    Autocomplete: Autocomplete,
    FormHelper: FormHelper
  }  
}));
