(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
"use strict";

/* Copyright (c) 2010-2013 Marcus Westin */
(function (e) {
  function o() {
    try {
      return r in e && e[r];
    } catch (t) {
      return !1;
    }
  }var t = {},
      n = e.document,
      r = "localStorage",
      i = "script",
      s;t.disabled = !1, t.version = "1.3.17", t.set = function (e, t) {}, t.get = function (e, t) {}, t.has = function (e) {
    return t.get(e) !== undefined;
  }, t.remove = function (e) {}, t.clear = function () {}, t.transact = function (e, n, r) {
    r == null && (r = n, n = null), n == null && (n = {});var i = t.get(e, n);r(i), t.set(e, i);
  }, t.getAll = function () {}, t.forEach = function () {}, t.serialize = function (e) {
    return JSON.stringify(e);
  }, t.deserialize = function (e) {
    if (typeof e != "string") return undefined;try {
      return JSON.parse(e);
    } catch (t) {
      return e || undefined;
    }
  };if (o()) s = e[r], t.set = function (e, n) {
    return n === undefined ? t.remove(e) : (s.setItem(e, t.serialize(n)), n);
  }, t.get = function (e, n) {
    var r = t.deserialize(s.getItem(e));return r === undefined ? n : r;
  }, t.remove = function (e) {
    s.removeItem(e);
  }, t.clear = function () {
    s.clear();
  }, t.getAll = function () {
    var e = {};return t.forEach(function (t, n) {
      e[t] = n;
    }), e;
  }, t.forEach = function (e) {
    for (var n = 0; n < s.length; n++) {
      var r = s.key(n);e(r, t.get(r));
    }
  };else if (n.documentElement.addBehavior) {
    var u, a;
    var l, c;

    (function () {
      var h = function h(e) {
        return e.replace(/^d/, "___$&").replace(c, "___");
      };

      try {
        a = new ActiveXObject("htmlfile"), a.open(), a.write("<" + i + ">document.w=window</" + i + '><iframe src="/favicon.ico"></iframe>'), a.close(), u = a.w.frames[0].document, s = u.createElement("div");
      } catch (f) {
        s = n.createElement("div"), u = n.body;
      }
      l = function l(e) {
        return function () {
          var n = Array.prototype.slice.call(arguments, 0);n.unshift(s), u.appendChild(s), s.addBehavior("#default#userData"), s.load(r);var i = e.apply(t, n);return u.removeChild(s), i;
        };
      };

      c = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
      t.set = l(function (e, n, i) {
        return n = h(n), i === undefined ? t.remove(n) : (e.setAttribute(n, t.serialize(i)), e.save(r), i);
      }), t.get = l(function (e, n, r) {
        n = h(n);var i = t.deserialize(e.getAttribute(n));return i === undefined ? r : i;
      }), t.remove = l(function (e, t) {
        t = h(t), e.removeAttribute(t), e.save(r);
      }), t.clear = l(function (e) {
        var t = e.XMLDocument.documentElement.attributes;e.load(r);for (var n = 0, i; i = t[n]; n++) {
          e.removeAttribute(i.name);
        }e.save(r);
      }), t.getAll = function (e) {
        var n = {};return t.forEach(function (e, t) {
          n[e] = t;
        }), n;
      }, t.forEach = l(function (e, n) {
        var r = e.XMLDocument.documentElement.attributes;for (var i = 0, s; s = r[i]; ++i) {
          n(s.name, t.deserialize(e.getAttribute(s.name)));
        }
      });
    })();
  }try {
    var p = "__storejs__";t.set(p, p), t.get(p) != p && (t.disabled = !0), t.remove(p);
  } catch (f) {
    t.disabled = !0;
  }t.enabled = !t.disabled, typeof module != "undefined" && module.exports && this.module !== module ? module.exports = t : typeof define == "function" && define.amd ? define(t) : e.store = t;
})(Function("return this")());

; browserify_shim__define__module__export__(typeof store != "undefined" ? store : window.store);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
module.exports={
    "es": {
        "form": {
            "origin": "Desde",
            "selectCity": "Selecciona una ciudad",
            "destination": "Hacia",
            "departure": "Salida",
            "return": "Regreso",
            "economic": "Clase Económica",
            "business": "Clase Ejecutiva",
            "promo": "Código promocional",
            "submit": "Ver Vuelos",
            "adults": "Adultos",
            "children": "Niños",
            "infants" : "Infantes"
        },
        "messages": {
            "notification": "Por favor completa todos los campos.",
            "error": "Por favor completa todos los campos."
        }
    },
    "en": {
        "form": {
            "origin": "From",
            "selectCity": "Select your city",
            "destination": "To",
            "departure": "Departure",
            "return": "Return",
            "economic": "Economy Class",
            "business": "Business Class",
            "promo": "Promotional code",
            "submit": "Find flights",
            "adults": "Adults",
            "children": "Children",
            "infants" : "Infants"
        },
        "messages": {
            "notification": "Please complete all the ...",
            "error": "Please complete all the ..."
        }
    },
    "pt": {
        "form": {
            "origin": "De",
            "selectCity": "Selecione sua cidade",
            "destination": "Para",
            "departure": "Saída",
            "return": "Regresso",
            "economic": "Classe econômica",
            "business": "Classe Executiva",
            "promo": "Código promocional",
            "submit": "Buscar voos",
            "adults": "Adultos",
            "children": "Crianças",
            "infants" : "Bebês"
        },
        "messages": {
            "notification": "Por favor completa todos los campos.",
            "error": "Por favor completa todos los campos."
        }
    }
}

},{}],3:[function(require,module,exports){
module.exports={
    "es": {
        "regional": {
            "closeText": "Cerrar",
            "prevText": "&#x3C;Ant",
            "nextText": "Sig&#x3E;",
            "currentText": "Hoy",
            "monthNames": ["enero","febrero","marzo","abril","mayo","junio",
            "julio","agosto","septiembre","octubre","noviembre","diciembre"],
            "monthNamesShort": ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],
            "dayNames": ["domingo","lunes","martes","miércoles','jueves","viernes","sábado"],
            "dayNamesShort": ["dom","lun","mar","mié","juv","vie","sáb"],
            "dayNamesMin": ["D","L","M","X","J","V","S"],
            "weekHeader": "Sm",
            "dateFormat": "dd/mm/yy",
            "firstDay": 1,
            "isRTL": false,
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "buttons": {
            "close": "Cerrar",
            "reset": "Reiniciar"
        }

    },
    "en": {
        "regional" : {},
        "buttons": {
            "close": "Close",
            "reset": "Reset"
        }
    },
    "pt": {
        "regional" : {
            "closeText": "Fechar",
            "prevText": "&#x3C;Anterior",
            "nextText": "Próximo&#x3E;",
            "currentText": "Hoje",
            "monthNames": ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
            "monthNamesShort": ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
            "dayNames": ["Domingo","Segunda-feira","Terça-feira","Quarta-feira','Quinta-feira","Sexta-feira","Sábado"],
            "dayNamesShort": ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
            "dayNamesMin": ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
            "weekHeader": "Sm",
            "dateFormat": "dd/mm/yy",
            "firstDay": 0,
            "isRTL": false,
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "buttons": {
            "close": "Fechar",
            "reset": "Reiniciar"
        }
    }
}

},{}],4:[function(require,module,exports){
module.exports={
    "es": {
        "form": {
            "fname": "Nombre",
            "lname": "Apellido",
            "email": "Email",
            "country": "País",
            "city": "Ciudad",
            "phone": "Móvil",
            "subscribe": "Suscribir",
            "birthday": "Fecha de nacimiento"
        }
    },
    "en": {
        "form": {
            "fname": "Name",
            "lname": "Last Name",
            "email": "Email",
            "country": "Country",
            "city": "City",
            "phone": "Mobile",
            "subscribe": "Subscribe",
            "birthday": "Date of birth"
        }
    },
    "pt": {
        "form": {
            "fname": "Nome",
            "lname": "Sobrenome",
            "email": "E-mail",
            "country": "País",
            "city": "Cidade",
            "phone": "Celular",
            "subscribe": "Cadastre-se",
            "birthday": "Data de nascimento"
        }
    }
}

},{}],5:[function(require,module,exports){
(function (global){
'use strict';

var _Booking = require('./widgets/Booking');

var _Booking2 = _interopRequireDefault(_Booking);

var _Signup = require('./widgets/Signup');

var _Signup2 = _interopRequireDefault(_Signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    // Node/CommonJS
    factory((typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  /**
   * Bind widgets to jQuery object prototype.
   *
   * @param  {Object} options Options passed to override defaults.
   * @return {Object}         Current object instance
   */

  $.fn.copaairBooking = function copaairBooking(options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_copaairBooking')) {
        $.data(this, 'plugin_copaairBooking', new _Booking2.default(this, options));
      }
    });
  };

  $.fn.copaairSignup = function copaairSignup(options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_copaairSignup')) {
        $.data(this, 'plugin_copaairSignup', new _Signup2.default(this, options));
      }
    });
  };

  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();

    $.each(a, function () {
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
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./widgets/Booking":12,"./widgets/Signup":13}],6:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _FlightControl = require('./FlightControl');

var _FlightControl2 = _interopRequireDefault(_FlightControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Autocomplete widget with list of Copa's destinations
 * for better usability than a native select menu.
 * @class
 */
var Autocomplete = function () {
  /**
   * Constructor
   * @param  {Object} options Custom options for this widget instance.
   */
  function Autocomplete(options) {
    _classCallCheck(this, Autocomplete);

    var defaults = {
      delay: 0,
      lang: 'es',
      minLength: 0,
      originSelected: false,
      destinationSelected: false
    };

    this.options = _jquery2.default.extend({}, defaults, options);
  }

  /**
   * Get destinations from Flight Control API
   * @param  {Function} cb Callback when API call finishes
   *                       and destinations are fetched
   * @return {void}
   */


  _createClass(Autocomplete, [{
    key: 'start',
    value: function start(cb) {
      var _this = this;

      var flightControl = new _FlightControl2.default({ lang: this.options.lang });

      flightControl.fetch('destinations', function (destinations) {
        // Format raw destinations to autocomplete structure
        _this.options.source = _this.format(destinations.list);

        if (typeof cb === 'function') {
          cb();
        }
      });
    }

    /**
     * Render autocomplete widget
     * @param  {Object} element DOM element to attach widget to
     */

  }, {
    key: 'render',
    value: function render(element) {
      var $this = (0, _jquery2.default)(element).hide();
      var sourceClasses = $this.attr('class');
      var sourceValue = $this.val();
      var sourcePlaceholder = $this.attr('placeholder');
      var dataInput = $this.data('input-field');

      var $input = (0, _jquery2.default)('<input />').val(sourceValue).attr('type', 'text').attr('placeholder', sourcePlaceholder).attr('data-input-field', dataInput);

      // Add autocomplete functionality
      $input.autocomplete(this.options);

      // Open list on input focus
      $input.on('focus', function () {
        if ($input.val().length === 0) {
          $input.autocomplete('search');
        }
      });

      // Add styling
      $input.addClass(sourceClasses).addClass('ui-widget  ui-widget-content  ui-state-default');

      // Insert into DOM
      $input.insertAfter($this);

      // Overwrite autocomplete item rendering with custom markup
      $input.autocomplete('instance')._renderItem = function autoCompleteRenderItem(ul, item) {
        return (0, _jquery2.default)('<li>').append(item.label).appendTo(ul);
      };

      // Custom filtering function
      _jquery2.default.ui.autocomplete.filter = function autoCompleteFilter(array, term) {
        var matcher = new RegExp('\\b' + _jquery2.default.ui.autocomplete.escapeRegex(term), 'i');
        return _jquery2.default.grep(array, function (value) {
          return matcher.test(value.label || value.value || value);
        });
      };

      if (this.options.destinationSelected && dataInput === 'destination') {
        $input.autocomplete('search', this.options.destinationSelected);
        var $selected = $input.autocomplete('widget');
        (0, _jquery2.default)($selected[0].children[0]).click();
      }

      if (this.options.originSelected && dataInput === 'origin') {
        $input.autocomplete('search', this.options.originSelected);
        var _$selected = $input.autocomplete('widget');
        (0, _jquery2.default)(_$selected[0].children[0]).click();
      }

      return this;
    }

    /**
     * Formats destinations into the needed structure to be displayed
     * on the autocomplete menu widget.
     * @param  {Array} destinations Raw data returned from Flight Control
     * @return {Array}              Formatted destinations
     */

  }, {
    key: 'format',
    value: function format(destinations) {
      var _this2 = this;

      var result = [];

      _jquery2.default.each(destinations, function (i, dest) {
        var tempLabel = '<b>' + dest.name[_this2.options.lang] + ', ' + dest.country + '</b>\n        <span class="code"> | ' + dest.id + '</span>';
        var tempValue = dest.id;
        var textValue = dest.name[_this2.options.lang] + ', ' + dest.id;

        result.push({
          label: tempLabel,
          value: tempValue,
          display: textValue
        });
      });

      return result;
    }
  }]);

  return Autocomplete;
}();

/**
 * Export
 * @exports Autocomplete
 */


exports.default = Autocomplete;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./FlightControl":9}],7:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _FlightControl = require('./FlightControl');

var _FlightControl2 = _interopRequireDefault(_FlightControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
  lang: 'es',
  data: null,
  contentType: 'countries',
  callback: function callback() {}
};

var DataMenu = function () {
  /**
   * Constructor
   * @param  {Object} options Custom options for this widget instance.
   */
  function DataMenu(options) {
    _classCallCheck(this, DataMenu);

    this.options = _jquery2.default.extend({}, defaults, options);
    this._defaults = defaults;

    this.setup();
  }

  _createClass(DataMenu, [{
    key: 'setup',
    value: function setup(cb) {
      var _this = this;

      if (!this.options.data) {
        var flightControl = new _FlightControl2.default({ lang: this.options.lang });

        flightControl.fetch(this.options.contentType, function (data) {
          // Format raw destinations to autocomplete structure
          _this.options.source = _this.format(data.list);
          _this.render();
          if (typeof cb === 'function') {
            cb();
          }
        });
      } else {
        this.options.source = this.format(this.options.data);
        this.render(true);
      }
    }
  }, {
    key: 'render',
    value: function render(newInput) {
      var _this2 = this;

      if (newInput) {
        (0, _jquery2.default)(this.options.selector).find('option').slice(1).remove();
      }
      _jquery2.default.each(this.options.source, function (i, item) {
        (0, _jquery2.default)(_this2.options.selector).append(item.display);
      });
    }

    /**
     * Formats data into the needed structure to be displayed
     * on the autocomplete menu widget.
     * @param  {Array} destinations Raw data returned from Flight Control
     * @return {Array}              Formatted destinations
     */

  }, {
    key: 'format',
    value: function format(list) {
      var _this3 = this;

      var result = [];

      _jquery2.default.each(list, function (i, item) {
        var option = '<option value="' + item.id + '">' + item.name[_this3.options.lang] + '</option>';
        result.push({
          display: option
        });
      });

      return result;
    }
  }]);

  return DataMenu;
}();

exports.default = DataMenu;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./FlightControl":9}],8:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _datepicker = require('../../../lang/datepicker.json');

var _datepicker2 = _interopRequireDefault(_datepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
  departureSelector: '.copaair-booking-datepicker-departure',
  returnSelector: '.copaair-booking-datepicker-return',
  datepickerSelector: '.js-copaair-booking-datepicker-container',
  showButtonPanel: true,
  numberOfMonths: 2,
  selectMultiple: true,
  numSelectable: 2,
  dateRules: {
    today: new Date(),
    weekLater: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  },
  lang: 'es',
  position: 'top'
};

/**
 * Datepicker module
 */

var Datepicker = function () {
  function Datepicker(options) {
    _classCallCheck(this, Datepicker);

    this.current = null;
    this.options = _jquery2.default.extend({}, defaults, options);
    this.defaults = defaults;
    this.options.departureSelector = this.options.booking.find('.copaair-booking-datepicker-departure');
    this.options.returnSelector = this.options.booking.find('.copaair-booking-datepicker-return');
    this.options.datepickerSelector = this.options.booking.find('.js-copaair-booking-datepicker-container');
  }

  /**
   * Render date picker inside the booking form
   * setups the defaults dates and language
   */


  _createClass(Datepicker, [{
    key: 'render',
    value: function render() {
      this.setLocale();
      this.init();

      this.setBeforeShowDaySettings();
      this.setDateRanges();

      this.mqMobile = window.matchMedia('(max-width: 720px)');
      this.setSize(this.mqMobile);

      this.mqMobile.addListener(this.setSize);

      this.events();
      this.setPosition();
    }
  }, {
    key: 'init',
    value: function init() {

      //
      var $mainDatePicker = this.options.datepickerSelector;
      $mainDatePicker.datepicker(this.options);

      $mainDatePicker.datepicker('option', 'minDate', 0);

      $mainDatePicker.hide();
    }
  }, {
    key: 'setSize',
    value: function setSize(mq) {
      var $mainDatePicker = (0, _jquery2.default)('.js-copaair-booking-datepicker-container');

      if (mq.matches) {
        $mainDatePicker.datepicker('option', 'numberOfMonths', 1);
      } else {
        $mainDatePicker.datepicker('option', 'numberOfMonths', 2);
      }
    }
  }, {
    key: 'setPosition',
    value: function setPosition() {

      var $mainDatePicker = (0, _jquery2.default)(this.options.datepickerSelector);
      var $departureField = (0, _jquery2.default)(this.options.departureSelector);
      var widget = $mainDatePicker.datepicker('widget');
      var position = 0;

      if (this.mqMobile.matches) {
        position = (0, _jquery2.default)('.copaair-booking-datepicker-position').height() * 2 + 10;
      } else {
        position = (0, _jquery2.default)('.copaair-booking-datepicker-position').height() + 15;
      }

      var mapPosition = {
        top: 'bottom',
        bottom: 'top'
      };

      $mainDatePicker.css(_defineProperty({}, mapPosition[this.options.position], position));
    }

    /**
     *
     *
     *
     */

  }, {
    key: 'setBeforeShowDaySettings',
    value: function setBeforeShowDaySettings() {

      var $mainDatePicker = this.options.datepickerSelector;
      var $departureField = this.options.departureSelector;
      var $returnField = this.options.returnSelector;

      // This will render the date range on the datepicker calendar
      $mainDatePicker.datepicker('option', 'beforeShowDay', function (date) {
        var date1 = _jquery2.default.datepicker.parseDate(_jquery2.default.datepicker._defaults.dateFormat, $departureField.val());
        var date2 = _jquery2.default.datepicker.parseDate(_jquery2.default.datepicker._defaults.dateFormat, $returnField.val());
        return [true, date1 && (date.getTime() == date1.getTime() || date2 && date >= date1 && date <= date2) ? "dp-highlight" : ""];
      });

      // this.renderCloseButton();
      // this.renderResetButton();
    }
  }, {
    key: 'setDateRanges',
    value: function setDateRanges() {

      var $mainDatePicker = (0, _jquery2.default)(this.options.datepickerSelector);
      var $departureField = (0, _jquery2.default)(this.options.departureSelector);
      var $returnField = (0, _jquery2.default)(this.options.returnSelector);
      var _this = this;

      $mainDatePicker.datepicker('option', 'onSelect', function select(dateText, inst) {

        (0, _jquery2.default)(_this.current).val(dateText);

        var date1 = _jquery2.default.datepicker.parseDate(_jquery2.default.datepicker._defaults.dateFormat, $departureField.val());
        var date2 = _jquery2.default.datepicker.parseDate(_jquery2.default.datepicker._defaults.dateFormat, $returnField.val());

        if ($returnField[0] !== _this.current && $returnField.val() === '') {
          $returnField.click().focus();
        } else if ($departureField[0] !== _this.current && $departureField.val() === '') {
          $departureField.click().focus();
        }

        if (date1) {
          _this.setDates(date1, true);
        }

        if (date2) {
          _this.setDates(date2, false);

          if (_this.mqMobile.matches) {
            (0, _jquery2.default)('html, body').animate({
              scrollTop: $returnField.offset().top
            }, 1000);
          }
        }

        if (date2 && date2 < date1) {
          $departureField.val(dateText);
          $returnField.val('');
        }

        _this.renderCloseButton();
        _this.renderResetButton();
      });
    }
  }, {
    key: 'setDates',
    value: function setDates(date, bound) {
      if (bound) {
        this.options.formHelper.options.inputs['outboundOption.departureDay'] = date.getUTCDate();
        this.options.formHelper.options.inputs['outboundOption.departureMonth'] = date.getMonth() + 1;
        this.options.formHelper.options.inputs['outboundOption.departureYear'] = date.getFullYear();
      } else {
        this.options.formHelper.options.inputs['inboundOption.departureDay'] = date.getUTCDate();
        this.options.formHelper.options.inputs['inboundOption.departureMonth'] = date.getMonth() + 1;
        this.options.formHelper.options.inputs['inboundOption.departureYear'] = date.getFullYear();
      }
    }
  }, {
    key: 'events',
    value: function events() {
      var _this2 = this;

      var $mainDatePicker = (0, _jquery2.default)(this.options.datepickerSelector);
      var $departureField = (0, _jquery2.default)(this.options.departureSelector);
      var $returnField = (0, _jquery2.default)(this.options.returnSelector);
      var date1 = _jquery2.default.datepicker.parseDate(_jquery2.default.datepicker._defaults.dateFormat, $departureField.val());

      $departureField.on('focus', function (e) {
        _this2.current = e.target;
        $mainDatePicker.show();
        if (_this2.mqMobile.matches) {
          (0, _jquery2.default)('html, body').animate({
            scrollTop: $mainDatePicker.offset().top
          }, 1000);
        }
      });

      $returnField.on('focus', function (e) {
        _this2.current = e.target;
        $mainDatePicker.show();

        if (_this2.mqMobile.matches) {
          (0, _jquery2.default)('html, body').animate({
            scrollTop: $mainDatePicker.offset().top
          }, 1000);
        }
      });

      // Hide DatePicker on click outside the widget container.
      // TODO: find an alterantive solution
      // $('.copaair-booking').on('click', (e) => {
      //   e.stopPropagation();
      // });

      // $(document).on('click', (e) => {
      //   $mainDatePicker.hide();
      // });
    }
  }, {
    key: 'renderResetButton',
    value: function renderResetButton() {
      var $mainDatePicker = (0, _jquery2.default)(this.options.datepickerSelector);
      var $departureField = (0, _jquery2.default)(this.options.departureSelector);
      var $returnField = (0, _jquery2.default)(this.options.returnSelector);

      var resetButtonCopy = _datepicker2.default[this.options.lang].buttons.reset;

      var _this = this;
      setTimeout(function () {
        var buttonPane = $mainDatePicker.find(".ui-datepicker-buttonpane");
        (0, _jquery2.default)('<button>', {
          type: 'button',
          text: resetButtonCopy,
          click: function click() {
            $departureField.val('');
            $returnField.val('');
            _this.reset($mainDatePicker);
          }
        }).appendTo(buttonPane).addClass("ui-datepicker-reset ui-state-default ui-priority-secondary ui-corner-all");
      }, 1);
    }
  }, {
    key: 'renderCloseButton',
    value: function renderCloseButton() {
      var $mainDatePicker = (0, _jquery2.default)(this.options.datepickerSelector);
      var closeButtonCopy = _datepicker2.default[this.options.lang].buttons.close;

      setTimeout(function () {
        var buttonPane = $mainDatePicker.find(".ui-datepicker-buttonpane");
        (0, _jquery2.default)('<button>', {
          type: 'button',
          text: closeButtonCopy,
          click: function click() {
            $mainDatePicker.hide();
          }
        }).appendTo(buttonPane).addClass("ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all");
      }, 1);
    }
  }, {
    key: 'reset',
    value: function reset(datepickerInst) {
      datepickerInst.datepicker('setDate', null);
    }

    /**
     * Configure datepicker depending on the
     * localization
     */

  }, {
    key: 'setLocale',
    value: function setLocale() {
      var regional = _datepicker2.default[this.options.lang].regional;
      _jquery2.default.datepicker.setDefaults(regional);
    }
  }]);

  return Datepicker;
}();

exports.default = Datepicker;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../../lang/datepicker.json":3}],9:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

require('store-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
  lang: 'es',
  api: {
    destinations: 'https://flightcontrol.io/api/routes/destinations',
    countries: 'https://flightcontrol.io/api/routes/countries',
    regions: 'https://flightcontrol.io/api/routes/regions'
  },
  storageExpiration: 86400000,
  storage: true
};

/**
 * Extension to the storage class
 * to setup the expiration value
 * @type {Object}
 */
var storeWidthExpiration = {
  set: function set(key, val, exp) {
    store.set(key, {
      val: val,
      exp: exp,
      time: new Date().getTime()
    });
  },
  get: function get(key) {
    var info = store.get(key);

    if (!info) {
      return null;
    }

    if (new Date().getTime() - info.time > info.exp) {
      return null;
    }

    return info.val;
  }
};

/**
 * Module FlightControl
 */

var FlightControl = function () {
  function FlightControl(options) {
    _classCallCheck(this, FlightControl);

    this.options = _jquery2.default.extend({}, defaults, options);
    this._defaults = defaults;

    if (!store.enabled) {
      console.log('browser not supported or in private mode');
      this.options.storage = false;
    }
  }

  /**
   * Fetch data from flight controller
   * based on the resource name
   * @param  {string}   resourceName: destinations|countries|regions
   * @param  {Function} cb  callback
   * @return {Function} callback
   */


  _createClass(FlightControl, [{
    key: 'fetch',
    value: function fetch(resourceName, cb) {
      var _this = this;

      var resourceValue = {};

      if (this.options.storage && storeWidthExpiration.get(resourceName) && storeWidthExpiration.get(resourceName + '.count')) {
        resourceValue.list = storeWidthExpiration.get(resourceName);
        resourceValue.count = storeWidthExpiration.get(resourceName + '.count');

        return cb(resourceValue);
      }

      if (typeof IE9Data !== 'undefined') {
        var data = IE9Data[resourceName];
        this.sortNames(data);

        if (this.options.storage) {
          storeWidthExpiration.set(resourceName, data, this.options.storageExpiration);
          storeWidthExpiration.set(resourceName + '.count', data.length, this.options.storageExpiration);
        }
        resourceValue.list = data;
        resourceValue.count = data.length;

        cb(resourceValue);
      } else {
        _jquery2.default.getJSON(this.options.api[resourceName], function (data) {
          _this.sortNames(data);

          if (_this.options.storage) {
            storeWidthExpiration.set(resourceName, data, _this.options.storageExpiration);
            storeWidthExpiration.set(resourceName + '.count', data.length, _this.options.storageExpiration);
          }
          resourceValue.list = data;
          resourceValue.count = data.length;

          cb(resourceValue);
        });
      }
    }

    /**
     * Helper function to sort data
     * based on language
     * @param  {Object} data
     */

  }, {
    key: 'sortNames',
    value: function sortNames(data) {
      var _this2 = this;

      data.sort(function (a, b) {
        if (a.name[_this2.options.lang] > b.name[_this2.options.lang]) return 1;
        if (a.name[_this2.options.lang] < b.name[_this2.options.lang]) return -1;

        return 0;
      });
    }
  }]);

  return FlightControl;
}();

exports.default = FlightControl;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"store-js":1}],10:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ga = window.ga;
var defaults = {
  lang: 'es',
  origin: 'all',
  destination: 'all',
  d1: null,
  bookingPage: 'Booking Engine',
  analytics: false,
  inputs: {
    tripType: 'RT',
    flexibleSearch: true,
    pos: 'CMGS',
    'guestTypes[0].type': 'ADT',
    'guestTypes[1].type': 'CNN',
    'guestTypes[2].type': 'INF',
    'guestTypes[0].amount': 1,
    'guestTypes[1].amount': 0,
    'guestTypes[2].amount': 0,
    'outboundOption.departureDay': null,
    'outboundOption.departureMonth': null,
    'outboundOption.departureYear': null,
    'inboundOption.departureDay': null,
    'inboundOption.departureMonth': null,
    'inboundOption.departureYear': null,

    // Origin
    'outboundOption.originLocationCode': null,
    'inboundOption.destinationLocationCode': null,

    // Destination
    'outboundOption.destinationLocationCode': null,
    'inboundOption.originLocationCode': null,

    // Cabin Class (Business|Economy)
    cabinClass: 'Economy',
    lang: 'es'
  },
  formUrl: 'https://bookings.copaair.com/CMGS/AirLowFareSearchExternal.do?'
};

/**
 * FormHelper module
 */

var FormHelper = function () {
  function FormHelper(options) {
    _classCallCheck(this, FormHelper);

    this.options = _jquery2.default.extend({}, defaults, options);
    this._defaults = defaults;

    // set defautls values
    this.setDefaultBounds();

    this.options.inputs.lang = this.options.lang;

    // load events related with form helper and other modules
    this.events();
  }

  _createClass(FormHelper, [{
    key: 'process',
    value: function process() {
      var url = this.options.formUrl;
      var validation = this.validationError();
      var coupon = this.options.booking.data('coupon');

      if (coupon && !this.options.inputs.coupon) {
        this.setCoupon(coupon);
      }

      var httpQuery = _jquery2.default.param(this.options.inputs);
      httpQuery += '&' + _jquery2.default.param({ d1: this.options.d1 });

      if (validation.error) {
        // handle validation error messages
        if (this.options.analytics && typeof ga !== 'undefined') {
          ga('send', 'event', this.options.bookingPage, 'error', 'User left required fields blank');
        }
      } else {
        // no errors, forward form values to copa
        // console.log(httpQuery);
        if (this.options.analytics && typeof ga !== 'undefined') {
          ga('send', 'event', this.options.bookingPage, 'click', 'Search flights');
        }

        var searchWindow = window.open(url + httpQuery, '_blank');
        searchWindow.focus();
      }
    }
  }, {
    key: 'setDefaultBounds',
    value: function setDefaultBounds() {
      if (this.options.origin !== 'all') {
        this.setBounds('origin', this.options.origin);
      }

      if (this.options.destination !== 'all') {
        this.setBounds('destination', this.options.destination);
      }
    }
  }, {
    key: 'setBounds',
    value: function setBounds(bound, location) {
      if (bound === 'origin') {
        this.options.inputs['outboundOption.originLocationCode'] = location;
        this.options.inputs['inboundOption.destinationLocationCode'] = location;
      }

      if (bound === 'destination') {
        this.options.inputs['outboundOption.destinationLocationCode'] = location;
        this.options.inputs['inboundOption.originLocationCode'] = location;
      }
    }
  }, {
    key: 'setCabinClass',
    value: function setCabinClass(target) {
      this.options.inputs.cabinClass = (0, _jquery2.default)(target).val();
    }
  }, {
    key: 'setPassengersAmount',
    value: function setPassengersAmount(type, value) {
      switch (type) {
        case 'child':
          this.options.inputs['guestTypes[1].amount'] = value;
          break;
        case 'infant':
          this.options.inputs['guestTypes[2].amount'] = value;
          break;
        default:
          this.options.inputs['guestTypes[0].amount'] = value;
      }
    }
  }, {
    key: 'setCoupon',
    value: function setCoupon(coupon) {
      this.options.inputs.coupon = coupon;
    }
  }, {
    key: 'setD1',
    value: function setD1() {
      this.options.inputs.d1 = this.options.d1;
    }
  }, {
    key: 'validationError',
    value: function validationError() {
      var errors = {
        error: false,
        bag: []
      };
      console.log(this.options.inputs);
      for (var input in this.options.inputs) {
        if (!this.options.inputs[input] && this.options.inputs[input] !== 0) {
          var currentError = {};
          currentError.field = input;
          currentError.message = 'The input ' + input + ' must have some value';
          errors.bag.push(currentError);
          errors.error = true;
        }
      }

      return errors;
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      this.options.booking.find('.js-cabin-class').on('click', function (e) {
        _this.setCabinClass(e.target);
      });

      this.options.booking.find('.js-adults-amount').selectmenu({
        change: function change(e, ui) {
          _this.setPassengersAmount('adult', ui.item.value);
        }
      });

      this.options.booking.find('.js-children-amount').selectmenu({
        change: function change(e, ui) {
          _this.setPassengersAmount('child', ui.item.value);
        }
      });

      this.options.booking.find('.js-infants-amount').selectmenu({
        change: function change(e, ui) {
          _this.setPassengersAmount('infant', ui.item.value);
        }
      });

      this.options.booking.find('.js-coupon-code-input').on('change', function (e) {
        _this.setCoupon(e.target.value);
      });

      this.options.booking.find('.js-submit').on('click', function (e) {
        e.preventDefault();
        _this.process();
      });
    }
  }]);

  return FormHelper;
}();

exports.default = FormHelper;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _handlebars = (typeof window !== "undefined" ? window['Handlebars'] : typeof global !== "undefined" ? global['Handlebars'] : null);

var _handlebars2 = _interopRequireDefault(_handlebars);

var _booking = require('../../../lang/booking.json');

var _booking2 = _interopRequireDefault(_booking);

var _signup = require('../../../lang/signup.json');

var _signup2 = _interopRequireDefault(_signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var i18n = [];
i18n.booking = _booking2.default;
i18n.signup = _signup2.default;

if (!window.location.origin) {
  window.location.origin = window.location.protocol + '//' + window.location.hostname;
  window.location.origin += window.location.port ? ':' + window.location.port : '';
}

var defaults = {
  lang: 'es',
  src: window.location.origin + '/bower_components/copaair-widgets/templates',
  callback: function callback() {}
};

var Template = function () {
  function Template(widget, options) {
    var _this = this;

    _classCallCheck(this, Template);

    this.options = _jquery2.default.extend({}, defaults, options);

    if (typeof _handlebars2.default !== 'undefined' && _handlebars2.default !== null) {
      _jquery2.default.ajax({
        url: this.options.src + '/' + widget + '.hbs',
        success: function success(tpl) {
          _this.options.data = _jquery2.default.extend({}, _this.options, i18n[widget][_this.options.lang]);
          var html = _this.compile(widget, tpl);
          _this.options.callback(html);
        }
      });
    } else {
      console.error('This plugin requires Handlebars.js');
    }
  }

  _createClass(Template, [{
    key: 'compile',
    value: function compile(widget, tpl) {
      var template = _handlebars2.default.compile(tpl);
      var html = template(this.options.data);
      return html;
    }
  }]);

  return Template;
}();

exports.default = Template;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../../lang/booking.json":2,"../../../lang/signup.json":4}],12:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Modules
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _Template = require('../lib/Template');

var _Template2 = _interopRequireDefault(_Template);

var _Datepicker = require('../lib/Datepicker');

var _Datepicker2 = _interopRequireDefault(_Datepicker);

var _Autocomplete = require('../lib/Autocomplete');

var _Autocomplete2 = _interopRequireDefault(_Autocomplete);

var _FormHelper = require('../lib/FormHelper');

var _FormHelper2 = _interopRequireDefault(_FormHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Options
 * @type {Object}
 */
var defaults = {
  lang: 'es',
  d1: null,
  bookingPage: null,
  coupon: null,
  origin: null,
  destination: null,
  destinationName: null,
  originName: null,
  analytics: false,
  collapsable: true,
  nativeSelect: false,
  widgetPosition: { my: 'left bottom', at: 'left top' },
  datepickerPosition: 'top',
  templatePath: '/bower_components/copaair-widgets/templates',
  languagePath: '/bower_components/copaair-widgets/lang/',
  originSelected: false,
  destinationSelected: false,
  isMobile: false,
  onload: function onload() {}
};

var Booking = function () {

  /**
   * Widget constructor
   * @param {Object} selector element DOM object
   * @param {Object} options  Options passed on plugin instance
   */

  function Booking(element, options) {
    var _this = this;

    _classCallCheck(this, Booking);

    this.$booking = (0, _jquery2.default)(element);
    this.options = _jquery2.default.extend({}, defaults, options);
    this._defaults = defaults;

    return new _Template2.default('booking', {
      lang: this.options.lang,
      origin: this.options.origin,
      destination: this.options.destination,
      destinationName: this.options.destinationName, // temporary fix for static destination
      originName: this.options.originName, // temporary fix for static destination
      src: this.options.templatePath,
      callback: function callback(html) {
        _this.$booking.html(html);

        // When finished, build all the widgets
        _this.setupSelectMenus();

        var formHelper = new _FormHelper2.default({
          datepicker: datepicker,
          origin: _this.options.origin,
          destination: _this.options.destination,
          booking: _this.$booking,
          d1: _this.options.d1,
          lang: _this.options.lang,
          analytics: _this.options.analytics,
          bookingPage: _this.options.bookingPage
        });

        // setup datepicker
        var datepicker = new _Datepicker2.default({
          lang: _this.options.lang,
          position: _this.options.datepickerPosition,
          booking: _this.$booking,
          formHelper: formHelper,
          isMobile: _this.options.isMobile
        });

        datepicker.render();

        if (_this.options.coupon) {
          formHelper.setCoupon(_this.options.coupon);
        }

        // Autocomplete widgets
        _this.initAutocomplete(formHelper);

        // Bind events
        _this.bookingEvents();

        _this.options.onload();
      }
    });
  }

  /**
   * Setup autocomplete destination widgets
   * @see module:Autocomplete
   */


  _createClass(Booking, [{
    key: 'initAutocomplete',
    value: function initAutocomplete(formHelper) {
      var _this2 = this;

      // Init class with options
      var autocomplete = new _Autocomplete2.default({
        lang: this.options.lang,
        originSelected: this.options.originSelected,
        destinationSelected: this.options.destinationSelected,
        select: function select(e, ui) {
          e.preventDefault();
          e.stopPropagation();

          // set display value to the input
          (0, _jquery2.default)(this).val(ui.item.display);
          // set actual value at the booking object
          formHelper.setBounds((0, _jquery2.default)(this).data('input-field'), ui.item.value);
        },

        position: this.options.widgetPosition,
        appendTo: this.$booking
      });

      // Build
      autocomplete.start(function () {
        _this2.$booking.find('.js-booking-autocomplete').each(function bookingAutocomplete() {
          autocomplete.render(this);
        });
      });
    }

    /**
     * Replaces select menus with custom UI widgets
     */

  }, {
    key: 'setupSelectMenus',
    value: function setupSelectMenus() {
      if (!this.options.nativeSelect) {
        this.$booking.find('.js-selectmenu').selectmenu({
          position: this.options.widgetPosition
        });
      }

      return this;
    }

    /**
     * Bind events related to booking interaction
     */

  }, {
    key: 'bookingEvents',
    value: function bookingEvents() {
      var $booking = this.$booking;
      var $toggle = this.$booking.find('.js-copaair-toggle');

      if (this.options.collapsable) {
        // Show bottom row when any input gets focus
        $booking.on('focus.copaair', 'input', function () {
          $booking.addClass('copaair-widget-open');
          $toggle.removeClass('copaair-hidden');
        });

        // Clicking anywhere in the document hides bottom row
        $booking.on('click.copaair', '.js-copaair-close', function (e) {
          e.preventDefault();
          $booking.removeClass('copaair-widget-open');
          $toggle.addClass('copaair-hidden');
        });
      } else {
        $toggle.removeClass('copaair-hidden');
      }
    }
  }]);

  return Booking;
}();

exports.default = Booking;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../lib/Autocomplete":6,"../lib/Datepicker":8,"../lib/FormHelper":10,"../lib/Template":11}],13:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _Template = require('../lib/Template');

var _Template2 = _interopRequireDefault(_Template);

var _DataMenu = require('../lib/DataMenu');

var _DataMenu2 = _interopRequireDefault(_DataMenu);

require('store-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ga = window.ga;
var defaults = {
  lang: 'es',
  nativeSelect: false,
  widgetPosition: {
    my: 'left bottom',
    at: 'left top'
  }
};

var Signup = function () {
  function Signup(element, options) {
    var _this = this;

    _classCallCheck(this, Signup);

    this.$form = (0, _jquery2.default)(element);
    this.options = _jquery2.default.extend({}, defaults, options);

    // Load template
    return new _Template2.default('signup', {
      lang: this.options.lang,
      callback: function callback(html) {
        _this.$form.html(html);
        _this.signupEvents();
        var lang = _this.options.lang;

        _this.$form.find('.js-selectmenu').each(function signupDataMenu() {
          return new _DataMenu2.default({
            lang: lang,
            contentType: (0, _jquery2.default)(this).data('content'),
            selector: (0, _jquery2.default)(this)
          });
        });

        _this.setupSelectMenus();

        (0, _jquery2.default)('.js-signup-date').datepicker({
          changeMonth: true,
          changeYear: true,
          format: 'dd/mm/yy',
          yearRange: '-100:+0',
          beforeShow: function beforeShow(input, isnt) {
            setTimeout(function () {
              isnt.dpDiv.position({
                my: 'left bottom',
                at: 'left top',
                of: input
              });
            }, 0);
          }
        });
      }
    });
  }

  /**
   * Replaces select menus with custom UI widgets
   */


  _createClass(Signup, [{
    key: 'setupSelectMenus',
    value: function setupSelectMenus() {
      if (!this.options.nativeSelect) {
        this.$form.find('.js-selectmenu').selectmenu({
          position: this.options.widgetPosition
        });
      }

      return this;
    }
  }, {
    key: 'signupEvents',
    value: function signupEvents() {
      var _this2 = this;

      var $form = this.$form;
      var $toggle = this.$form.find('.js-copaair-toggle');

      // Show bottom row when any input gets focus
      $form.on('focus.copaair', 'input', function () {
        $form.addClass('copaair-widget-open');
        $toggle.removeClass('copaair-hidden');
      });

      $form.on('submit', function (e) {
        e.preventDefault();
        var err = true;
        var messageErr = 'This field is required';
        var messageSuccess = 'Successfully sent';

        if ((0, _jquery2.default)('.copaair-form-name').val() == '') {
          err = false;
          messageErr;
        }

        if ((0, _jquery2.default)('.copaair-form-lastname').val() == '') {
          err = false;
          messageErr;
        }

        if ((0, _jquery2.default)('copaair-form-email').val() == '') {
          err = false;
          messageErr;
        }

        if ((0, _jquery2.default)('.js-country-selector').val() == '') {
          err = false;
          messageErr;
        }

        if ((0, _jquery2.default)('.js-city-selector').val() == '') {
          err = false;
          messageErr;
        }

        if ((0, _jquery2.default)('.js-signup-date').val() == '') {
          err = false;
          messageErr;
        }

        if (err == false) {
          alert(messageErr);
          return false;
        } else {
          _this2.submitForm(e.target);
          (0, _jquery2.default)('.copaair-signup')[0].reset();
        }
      });

      (0, _jquery2.default)('.js-country-selector').selectmenu({
        change: function change(e, ui) {
          this.options.country = ui.item.value;

          var destinations = store.get('destinations');
          var selected = [];

          for (var d in destinations.val) {
            if (destinations.val[d].country === this.options.country) {
              selected.push(destinations.val[d]);
            }
          }

          (0, _jquery2.default)('.js-city-selector').selectmenu('refresh');

          return new _DataMenu2.default({
            lang: this.options.lang,
            data: selected,
            selector: (0, _jquery2.default)('.js-city-selector')
          });
        }
      });

      (0, _jquery2.default)('.js-city-selector').selectmenu({
        change: function change(e, ui) {
          this.options.city = ui.item.value;
        }
      });
    }
  }, {
    key: 'submitForm',
    value: function submitForm(target) {
      var $form = (0, _jquery2.default)(target);

      var data = $form.serializeObject();
      data.fullname = data.first_name + ' ' + data.last_name;
      data.source = this.options.source;
      data.language = this.options.lang.toUpperCase();
      data.city = (0, _jquery2.default)('.js-city-selector').val();
      data.country = (0, _jquery2.default)('.js-country-selector').val();

      var container = this.options.container;

      _jquery2.default.ajax({
        data: data,
        type: 'POST',
        url: 'https://flightcontrol.io/api/signup/add'
      }).done(function () {
        container.fadeOut();
        alert(data.language)
        console.log(container)
        if (data.language == 'EN') {
          (0, _jquery2.default)('.copaair-signup').text('EN');  
        } else if (this.options.lang == 'PT') {
          (0, _jquery2.default)('.copaair-signup').text('PT');  
        } else {
          (0, _jquery2.default)('.copaair-signup').text('ES');   
        }
        if (typeof ga !== 'undefined') {
          ga('send', 'event', 'Subscription Form', 'subscribed', 'User was subscribed');
        }
      });
    }
  }]);

  return Signup;
}();

exports.default = Signup;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../lib/DataMenu":7,"../lib/Template":11,"store-js":1}]},{},[5]);
