(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

(function (factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["jquery"], factory);
    } else if (typeof exports !== "undefined") {
        // Node/CommonJS
        factory((typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null));
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function ($) {
    "use strict";

    var Booking = require("./widgets/Booking"),
        Signup = require("./widgets/Signup");

    /**
     * Bind widgets to jQuery object prototype.
     *
     * @param  {Object} options Options passed to override defaults.
     * @return {Object}         Current object instance
     */
    $.fn.copaairBooking = function copaairBooking(options) {
        return this.each(function () {
            if (!$.data(this, "plugin_copaairBooking")) {
                $.data(this, "plugin_copaairBooking", new Booking(this, options));
            }
        });
    };

    $.fn.copaairSignup = function copaairSignup(options) {
        return this.each(function () {
            if (!$.data(this, "plugin_copaairSignup")) {
                $.data(this, "plugin_copaairSignup", new Signup(this, options));
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
                o[this.name].push(this.value || "");
            } else {
                o[this.name] = this.value || "";
            }
        });
        return o;
    };
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./widgets/Booking":12,"./widgets/Signup":13}],2:[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
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
    var e = {};return (t.forEach(function (t, n) {
      e[t] = n;
    }), e);
  }, t.forEach = function (e) {
    for (var n = 0; n < s.length; n++) {
      var r = s.key(n);e(r, t.get(r));
    }
  };else if (n.documentElement.addBehavior) {
    var u, a;
    var l, c;

    (function () {
      var h = function (e) {
        return e.replace(/^d/, "___$&").replace(c, "___");
      };

      try {
        a = new ActiveXObject("htmlfile"), a.open(), a.write("<" + i + ">document.w=window</" + i + "><iframe src=\"/favicon.ico\"></iframe>"), a.close(), u = a.w.frames[0].document, s = u.createElement("div");
      } catch (f) {
        s = n.createElement("div"), u = n.body;
      }
      l = function l(e) {
        return function () {
          var n = Array.prototype.slice.call(arguments, 0);n.unshift(s), u.appendChild(s), s.addBehavior("#default#userData"), s.load(r);var i = e.apply(t, n);return (u.removeChild(s), i);
        };
      };

      c = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
      t.set = l(function (e, n, i) {
        return (n = h(n), i === undefined ? t.remove(n) : (e.setAttribute(n, t.serialize(i)), e.save(r), i));
      }), t.get = l(function (e, n, r) {
        n = h(n);var i = t.deserialize(e.getAttribute(n));return i === undefined ? r : i;
      }), t.remove = l(function (e, t) {
        t = h(t), e.removeAttribute(t), e.save(r);
      }), t.clear = l(function (e) {
        var t = e.XMLDocument.documentElement.attributes;e.load(r);for (var n = 0, i; i = t[n]; n++) e.removeAttribute(i.name);e.save(r);
      }), t.getAll = function (e) {
        var n = {};return (t.forEach(function (e, t) {
          n[e] = t;
        }), n);
      }, t.forEach = l(function (e, n) {
        var r = e.XMLDocument.documentElement.attributes;for (var i = 0, s; s = r[i]; ++i) n(s.name, t.deserialize(e.getAttribute(s.name)));
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

},{}],3:[function(require,module,exports){
module.exports={
    "es": {
        "form": {
            "origin": "Desde",
            "destination": "Hacia",
            "departure": "Salida",
            "return": "Regreso",
            "economic": "Clase Económica",
            "business": "Clase Ejecutiva",
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
            "destination": "To",
            "departure": "Departure",
            "return": "Return",
            "economic": "Economy Class",
            "business": "Business Class",
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
            "destination": "Para",
            "departure": "Saída",
            "return": "Regresso",
            "economic": "Classe econômica",
            "business": "Classe Executiva",
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

},{}],4:[function(require,module,exports){
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
        }

    },
    "en": {
        "regional" : {}
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
        }
    }
}

},{}],5:[function(require,module,exports){
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
            "subscribe": "Inscrever-se",
            "birthday": "Data de nascimento"
        }
    }
}

},{}],6:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    FlightControl = require("./FlightControl");

/**
 * Autocomplete widget with list of Copa's destinations
 * for better usability than a native select menu.
 * @class
 */

var Autocomplete = (function () {
    /**
     * Constructor
     * @param  {Object} options Custom options for this widget instance.
     */

    function Autocomplete(options) {
        _classCallCheck(this, Autocomplete);

        var defaults = {
            delay: 0,
            lang: "es",
            minLength: 0 };

        this.options = $.extend({}, defaults, options);
    }

    _prototypeProperties(Autocomplete, null, {
        start: {

            /**
             * Get destinations from Flight Control API
             * @param  {Function} cb Callback when API call finishes
             *                       and destinations are fetched
             * @return {void}
             */

            value: function start(cb) {
                var _this = this;

                var flightControl = new FlightControl({ lang: this.options.lang });

                flightControl.fetch("destinations", function (destinations) {
                    // Format raw destinations to autocomplete structure
                    _this.options.source = _this.format(destinations.list);

                    if (typeof cb === "function") {
                        cb();
                    }
                });
            },
            writable: true,
            configurable: true
        },
        render: {

            /**
             * Render autocomplete widget
             * @param  {Object} element DOM element to attach widget to
             */

            value: function render(element) {
                var $this = $(element).hide(),
                    sourceClasses = $this.attr("class"),
                    sourceValue = $this.val(),
                    sourcePlaceholder = $this.attr("placeholder"),
                    dataInput = $this.data("input-field");

                var $input = $("<input />").val(sourceValue).attr("type", "text").attr("placeholder", sourcePlaceholder).attr("data-input-field", dataInput);

                // Add autocomplete functionality
                $input.autocomplete(this.options);

                // Open list on input focus
                $input.on("focus", function () {
                    var $this = $(this);
                    if ($this.val().length === 0) $this.autocomplete("search");
                });

                // Add styling
                $input.addClass(sourceClasses).addClass("ui-widget  ui-widget-content  ui-state-default");

                // Insert into DOM
                $input.insertAfter($this);

                // Overwrite autocomplete item rendering with custom markup
                $input.autocomplete("instance")._renderItem = function (ul, item) {
                    return $("<li>").append(item.label).appendTo(ul);
                };

                // Custom filtering function
                $.ui.autocomplete.filter = function autoCompleteFilter(array, term) {
                    var matcher = new RegExp("\\b" + $.ui.autocomplete.escapeRegex(term), "i");
                    return $.grep(array, function (value) {
                        return matcher.test(value.label || value.value || value);
                    });
                };

                return this;
            },
            writable: true,
            configurable: true
        },
        format: {

            /**
             * Formats destinations into the needed structure to be displayed
             * on the autocomplete menu widget.
             * @param  {Array} destinations Raw data returned from Flight Control
             * @return {Array}              Formatted destinations
             */

            value: function format(destinations) {
                var _this = this;

                var result = [];

                $.each(destinations, function (i, dest) {
                    var tempLabel = "<b>" + dest.name[_this.options.lang] + ", " + dest.country + "</b>\n                    <span class=\"code\"> | " + dest.id + "</span>",
                        tempValue = dest.id,
                        textValue = dest.name[_this.options.lang] + ", " + dest.id;
                    result.push({
                        label: tempLabel,
                        value: tempValue,
                        display: textValue
                    });
                });

                return result;
            },
            writable: true,
            configurable: true
        }
    });

    return Autocomplete;
})();

/**
 * Export
 * @exports Autocomplete
 */
module.exports = Autocomplete;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./FlightControl":9}],7:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    FlightControl = require("./FlightControl"),
    defaults = {
    lang: "es",
    contentType: "countries",
    callback: function callback() {}
};

var DataMenu = (function () {
    /**
     * Constructor
     * @param  {Object} options Custom options for this widget instance.
     */

    function DataMenu(options) {
        _classCallCheck(this, DataMenu);

        var defaults = {
            lang: "es" };

        this.options = $.extend({}, defaults, options);

        this.setup();
    }

    _prototypeProperties(DataMenu, null, {
        setup: {
            value: function setup() {
                var _this = this;

                var flightControl = new FlightControl({ lang: this.options.lang });

                flightControl.fetch(this.options.contentType, function (data) {
                    // Format raw destinations to autocomplete structure
                    _this.options.source = _this.format(data.list);
                    _this.render();
                    if (typeof cb === "function") {
                        cb();
                    }
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var _this = this;

                $.each(this.options.source, function (i, item) {
                    $(_this.options.selector).append(item.display);
                });
            },
            writable: true,
            configurable: true
        },
        format: {

            /**
             * Formats data into the needed structure to be displayed
             * on the autocomplete menu widget.
             * @param  {Array} destinations Raw data returned from Flight Control
             * @return {Array}              Formatted destinations
             */

            value: function format(list) {
                var _this = this;

                var result = [];

                $.each(list, function (i, item) {
                    var option = "<option value=\"" + item.id + "\">" + item.name[_this.options.lang] + "</option>";
                    result.push({
                        display: option
                    });
                });

                return result;
            },
            writable: true,
            configurable: true
        }
    });

    return DataMenu;
})();

module.exports = DataMenu;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./FlightControl":9}],8:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    i18n = require("../../../lang/datepicker.json"),
    defaults = {
    departureSelector: ".copaair-booking-datepicker-departure",
    returnSelector: ".copaair-booking-datepicker-return",
    dateRules: {
        today: new Date(),
        weekLater: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
    },
    lang: "es",
    beforeShow: function beforeShow(input, isnt) {
        setTimeout(function () {
            isnt.dpDiv.position({
                my: "left bottom",
                at: "left top",
                of: input
            });
        }, 0);
    }
};

/**
 * Datepicker module
 */

var Datepicker = (function () {
    function Datepicker(options) {
        _classCallCheck(this, Datepicker);

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
    }

    _prototypeProperties(Datepicker, null, {
        render: {

            /**
             * Render date picker inside the booking form
             * setups the defaults dates and language
             */

            value: function render() {
                this.setLocale();
                this.setDefaultDates();
                this.events();
            },
            writable: true,
            configurable: true
        },
        setDefaultDates: {

            /**
             * Set defaults dates
             * this consist in set current date for departure
             * and one week later for return
             */

            value: function setDefaultDates() {
                var dateRules = this.options.dateRules,
                    $departureField = $(this.options.departureSelector),
                    $returnField = $(this.options.returnSelector);

                this.options.minDate = new Date();

                $departureField.datepicker(this.options);
                $returnField.datepicker(this.options);

                $departureField.datepicker("setDate", dateRules.today);
                $returnField.datepicker("setDate", dateRules.weekLater);
            },
            writable: true,
            configurable: true
        },
        events: {
            value: function events() {
                var $departureField = $(this.options.departureSelector),
                    $returnField = $(this.options.returnSelector);

                // $departureField.datepicker('option', 'onSelect', this.onSelectOutbound);
            },
            writable: true,
            configurable: true
        },
        onSelectOutbound: {
            value: function onSelectOutbound(dateText, inst) {
                var $returnField = $(this.options.returnSelector),
                    date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

                //this sets the inbound date picker to a week later of current selection
                var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
                $returnField.datepicker("setDate", weeklater);
            },
            writable: true,
            configurable: true
        },
        setLocale: {

            /**
             * Configure datepicker depending on the
             * localization
             */

            value: function setLocale() {
                var regional = i18n[this.options.lang].regional;
                $.datepicker.setDefaults(regional);
            },
            writable: true,
            configurable: true
        }
    });

    return Datepicker;
})();

module.exports = Datepicker;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../../lang/datepicker.json":4}],9:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);
require("store-js");

var defaults = {
    lang: "es",
    api: {
        destinations: "https://flightcontrol.io/api/routes/destinations",
        countries: "https://flightcontrol.io/api/routes/countries",
        regions: "https://flightcontrol.io/api/routes/regions" },
    storageExpiration: 86400000,
    storage: true };

/**
 * Extension to the storage class
 * to setup the expiration value
 * @type {Object}
 */
var storeWidthExpiration = {
    set: function set(key, val, exp) {
        store.set(key, { val: val, exp: exp, time: new Date().getTime() });
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

var FlightControl = (function () {
    function FlightControl(options) {
        _classCallCheck(this, FlightControl);

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        if (!store.enabled) {
            console.log("browser not supported or in private mode");
            this.options.storage = false;
        }
    }

    _prototypeProperties(FlightControl, null, {
        fetch: {

            /**
             * Fetch data from flight controller
             * based on the resource name
             * @param  {string}   resourceName: destinations|countries|regions
             * @param  {Function} cb  callback
             * @return {Function} callback
             */

            value: function fetch(resourceName, cb) {
                var _this = this;

                var resourceValue = {};

                if (this.options.storage && storeWidthExpiration.get(resourceName) && storeWidthExpiration.get(resourceName + ".count")) {
                    resourceValue.list = storeWidthExpiration.get(resourceName);
                    resourceValue.count = storeWidthExpiration.get(resourceName + ".count");

                    return cb(resourceValue);
                }

                $.getJSON(this.options.api[resourceName], function (data) {

                    _this.sortNames(data);

                    if (_this.options.storage) {
                        storeWidthExpiration.set(resourceName, data, _this.options.storageExpiration);
                        storeWidthExpiration.set(resourceName + ".count", data.length, _this.options.storageExpiration);
                    }
                    resourceValue.list = data;
                    resourceValue.count = data.length;

                    cb(resourceValue);
                });
            },
            writable: true,
            configurable: true
        },
        sortNames: {

            /**
             * Helper function to sort data
             * based on language
             * @param  {Object} data
             */

            value: function sortNames(data) {
                var _this = this;

                data.sort(function (a, b) {
                    if (a.name[_this.options.lang] > b.name[_this.options.lang]) return 1;
                    if (a.name[_this.options.lang] < b.name[_this.options.lang]) return -1;

                    return 0;
                });
            },
            writable: true,
            configurable: true
        }
    });

    return FlightControl;
})();

module.exports = FlightControl;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"store-js":2}],10:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    defaults = {
    lang: "es",
    origin: "all",
    destination: "all",
    d1: null,
    // required field to submit form
    // to copa
    inputs: {
        tripType: "RT",
        flexibleSearch: "true",
        pos: "CMGS",
        "guestTypes[0].type": "ADT",
        "guestTypes[1].type": "CNN",
        "guestTypes[2].type": "INF",
        "guestTypes[0].amount": 1,
        "guestTypes[1].amount": 0,
        "guestTypes[2].amount": 0,
        "outboundOption.departureDay": null,
        "outboundOption.departureMonth": null,
        "outboundOption.departureYear": null,
        "inboundOption.departureDay": null,
        "inboundOption.departureMonth": null,
        "inboundOption.departureYear": null,
        // "coupon": null,
        // origin
        "outboundOption.originLocationCode": null,
        "inboundOption.destinationLocationCode": null,
        // destination
        "outboundOption.destinationLocationCode": null,
        "inboundOption.originLocationCode": null,
        // // cabin class Business|Economy
        cabinClass: "Economy",
        lang: "es"
    },
    formUrl: "https://bookings.copaair.com/CMGS/" + "AirLowFareSearchExternal.do?"
};

/**
 * FormHelper module
 */

var FormHelper = (function () {
    function FormHelper(options) {
        _classCallCheck(this, FormHelper);

        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        // set defautls values
        this.setDefaultBounds();
        this.setDates(this.options.datepicker, { returns: true, departure: true });
        this.options.inputs.lang = this.options.lang;
        // load events related with form helper and other modules
        this.events();
    }

    _prototypeProperties(FormHelper, null, {
        process: {
            value: function process() {

                var url = this.options.formUrl;
                var validation = this.validationError();
                var httpQuery = $.param(this.options.inputs);
                httpQuery += "&" + $.param({ d1: this.options.d1 });

                if (validation.error) {
                    // handle validation error messages
                    console.log(validation.bag);
                } else {
                    // no errors, forward form values to copa
                    // console.log(httpQuery);
                    var searchWindow = window.open(url + httpQuery, "_blank");
                    searchWindow.focus();
                }
            },
            writable: true,
            configurable: true
        },
        setDefaultBounds: {
            value: function setDefaultBounds() {

                if (this.options.origin !== "all") {
                    this.setBounds("origin", this.options.origin);
                }

                if (this.options.destination !== "all") {
                    this.setBounds("destination", this.options.destination);
                }
            },
            writable: true,
            configurable: true
        },
        setBounds: {
            value: function setBounds(bound, location) {

                if (bound === "origin") {
                    this.options.inputs["outboundOption.originLocationCode"] = location;
                    this.options.inputs["inboundOption.destinationLocationCode"] = location;
                }

                if (bound === "destination") {
                    this.options.inputs["outboundOption.destinationLocationCode"] = location;
                    this.options.inputs["inboundOption.originLocationCode"] = location;
                }
            },
            writable: true,
            configurable: true
        },
        setDates: {
            value: function setDates(datepicker, bounds) {
                // get current datepickers dates
                var departureDate = $(datepicker.options.departureSelector).datepicker("getDate"),
                    returnDate = $(datepicker.options.returnSelector).datepicker("getDate");

                if (bounds.returns) {
                    this.options.inputs["inboundOption.departureDay"] = returnDate.getUTCDate();
                    this.options.inputs["inboundOption.departureMonth"] = returnDate.getMonth() + 1;
                    this.options.inputs["inboundOption.departureYear"] = returnDate.getFullYear();
                }

                if (bounds.departure) {
                    this.options.inputs["outboundOption.departureDay"] = departureDate.getUTCDate();
                    this.options.inputs["outboundOption.departureMonth"] = departureDate.getMonth() + 1;
                    this.options.inputs["outboundOption.departureYear"] = departureDate.getFullYear();
                }
            },
            writable: true,
            configurable: true
        },
        setCabinClass: {
            value: function setCabinClass(target) {
                this.options.inputs.cabinClass = $(target).val();
            },
            writable: true,
            configurable: true
        },
        setPassengersAmount: {
            value: function setPassengersAmount(type, value) {
                switch (type) {
                    case "adult":
                        this.options.inputs["guestTypes[0].amount"] = value;
                        break;
                    case "child":
                        this.options.inputs["guestTypes[1].amount"] = value;
                        break;
                    case "infant":
                        this.options.inputs["guestTypes[2].amount"] = value;
                        break;
                }
            },
            writable: true,
            configurable: true
        },
        setCoupon: {
            value: function setCoupon(coupon) {
                this.options.inputs.coupon = coupon;
            },
            writable: true,
            configurable: true
        },
        setD1: {
            value: function setD1() {
                this.options.inputs.d1 = this.options.d1;
            },
            writable: true,
            configurable: true
        },
        validationError: {
            value: function validationError() {
                var errors = {
                    error: false,
                    bag: []
                };
                var currentError;
                for (var input in this.options.inputs) {
                    console.log(this.options.inputs[input]);
                    if (!this.options.inputs[input] && this.options.inputs[input] !== 0) {
                        currentError = {};
                        currentError.field = input;
                        currentError.message = "The input " + input + " must have some value";
                        errors.bag.push(currentError);
                        errors.error = true;
                    }
                }

                return errors;
            },
            writable: true,
            configurable: true
        },
        events: {
            value: function events() {
                var _this = this;

                var datepicker = this.options.datepicker,
                    $departureField = $(datepicker.options.departureSelector),
                    $returnField = $(datepicker.options.returnSelector);

                $departureField.datepicker("option", "onSelect", function (dateText, inst) {

                    var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

                    // this sets the inbound date picker to a week later of current selection
                    var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
                    $returnField.datepicker("setDate", weeklater);
                    $returnField.datepicker("option", "minDate", date);
                    _this.setDates(datepicker, { returns: true, departure: true });
                });

                $returnField.datepicker("option", "onSelect", function (dateText, inst) {

                    var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

                    // this sets the inbound date picker to a week later of current selection
                    var weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
                    _this.setDates(datepicker, { returns: true, departure: false });
                });

                this.options.booking.find(".js-cabin-class").on("click", function (e) {
                    _this.setCabinClass(e.target);
                });

                this.options.booking.find(".js-adults-amount").selectmenu({
                    change: function (e, ui) {
                        _this.setPassengersAmount("adult", ui.item.value);
                    }
                });

                this.options.booking.find(".js-children-amount").selectmenu({
                    change: function (e, ui) {
                        _this.setPassengersAmount("child", ui.item.value);
                    }
                });

                this.options.booking.find(".js-infants-amount").selectmenu({
                    change: function (e, ui) {
                        _this.setPassengersAmount("infant", ui.item.value);
                    }
                });

                this.options.booking.find(".js-submit").on("click", function (e) {
                    e.preventDefault();
                    _this.process();
                });
            },
            writable: true,
            configurable: true
        }
    });

    return FormHelper;
})();

module.exports = FormHelper;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],11:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    Handlebars = (typeof window !== "undefined" ? window.Handlebars : typeof global !== "undefined" ? global.Handlebars : null),
    i18n = {
    booking: require("../../../lang/booking.json"),
    signup: require("../../../lang/signup.json") },
    defaults = {
    lang: "es",
    //src: window.location.origin + '/bower_components/copaair-widgets/templates',
    callback: function callback() {}
};

var Template = (function () {
    function Template(widget, options) {
        var _this = this;

        _classCallCheck(this, Template);

        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        }

        defaults.src = window.location.origin + "/bower_components/copaair-widgets/templates";

        this.options = $.extend({}, defaults, options);
        if (typeof Handlebars !== "undefined" && Handlebars !== null) {
            $.ajax({
                url: "" + this.options.src + "/" + widget + ".hbs",
                success: function (tpl) {
                    _this.options.data = $.extend({}, _this.options, i18n[widget][_this.options.lang]);
                    var html = _this.compile(widget, tpl);
                    _this.options.callback(html);
                }
            });
        } else {
            console.error("This plugin requires Handlebars.js");
        }
    }

    _prototypeProperties(Template, null, {
        compile: {
            value: function compile(widget, tpl) {
                var template = Handlebars.compile(tpl);
                var html = template(this.options.data);
                return html;
            },
            writable: true,
            configurable: true
        }
    });

    return Template;
})();

module.exports = Template;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../../lang/booking.json":3,"../../../lang/signup.json":5}],12:[function(require,module,exports){
(function (global){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * Modules
 */
var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),
    Template = require("../lib/Template"),
    FlightControl = require("../lib/FlightControl"),
    Datepicker = require("../lib/Datepicker"),
    Autocomplete = require("../lib/Autocomplete"),
    FormHelper = require("../lib/FormHelper");

/**
 * Options
 * @type {Object}
 */
var defaults = {
    lang: "es",
    d1: null,
    coupon: null,
    origin: null,
    destination: null,
    destinationName: null,
    widgetPosition: { my: "left bottom", at: "left top" },
    templatePath: "bower_components/copaair-widgets/templates/booking.hbs",
    languagePath: "bower_components/copaair-widgets/lang/"
};

var Booking = (function () {

    /**
     * Widget constructor
     * @param {Object} selector element DOM object
     * @param {Object} options  Options passed on plugin instance
     */

    function Booking(element, options) {
        var _this = this;

        _classCallCheck(this, Booking);

        this.$booking = $(element);

        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;

        new Template("booking", {
            lang: this.options.lang,
            origin: this.options.origin,
            destination: this.options.destination,
            destinationName: this.options.destinationName, // temporary fix for static destination
            callback: function (html) {
                _this.$booking.html(html);

                // When finished, build all the widgets
                _this.setupSelectMenus();

                // setup datepicker
                var datepicker = new Datepicker({
                    lang: _this.options.lang });
                datepicker.render();

                var formHelper = new FormHelper({
                    datepicker: datepicker,
                    origin: _this.options.origin,
                    destination: _this.options.destination,
                    booking: _this.$booking,
                    d1: _this.options.d1,
                    lang: _this.options.lang });

                if (_this.options.coupon) {
                    formHelper.setCoupon(_this.options.coupon);
                }

                // Autocomplete widgets
                _this.initAutocomplete(formHelper);

                // Bind events
                _this.bookingEvents();
            }
        });
    }

    _prototypeProperties(Booking, null, {
        initAutocomplete: {

            /**
             * Setup autocomplete destination widgets
             * @see module:Autocomplete
             */

            value: function initAutocomplete(formHelper) {
                var _this = this;

                // Init class with options
                var autocomplete = new Autocomplete({
                    lang: this.options.lang,
                    select: function select(e, ui) {
                        e.preventDefault();
                        e.stopPropagation();

                        // set display value to the input
                        $(this).val(ui.item.display);
                        //set actual value at the booking object
                        formHelper.setBounds($(this).data("input-field"), ui.item.value);
                    },
                    position: this.options.widgetPosition,
                    appendTo: this.$booking
                });

                // Build
                autocomplete.start(function () {
                    autocomplete.render(_this.$booking.find(".js-booking-autocomplete"));
                });
            },
            writable: true,
            configurable: true
        },
        setupSelectMenus: {

            /**
             * Replaces select menus with custom UI widgets
             */

            value: function setupSelectMenus() {
                $(".js-selectmenu").selectmenu({
                    position: this.options.widgetPosition
                });

                return this;
            },
            writable: true,
            configurable: true
        },
        bookingEvents: {

            /**
             * Bind events related to booking interaction
             */

            value: function bookingEvents() {
                var $booking = this.$booking;
                var $toggle = this.$booking.find(".js-copaair-toggle");

                // Show bottom row when any input gets focus
                $booking.on("focus.copaair", "input", function (e) {
                    $booking.addClass("copaair-widget-open");
                    $toggle.removeClass("copaair-hidden");
                });

                // Clicking anywhere in the document hides bottom row
                $booking.on("click.copaair", ".js-copaair-close", function (e) {
                    e.preventDefault();
                    $booking.removeClass("copaair-widget-open");
                    $toggle.addClass("copaair-hidden");
                });
            },
            writable: true,
            configurable: true
        }
    });

    return Booking;
})();

module.exports = Booking;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../lib/Autocomplete":6,"../lib/Datepicker":8,"../lib/FlightControl":9,"../lib/FormHelper":10,"../lib/Template":11}],13:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Template = require("../lib/Template"),
    DataMenu = require("../lib/DataMenu"),
    i18n = require("../../../lang/datepicker.json");

var Signup = (function () {
    function Signup(element, options) {
        var _this = this;

        _classCallCheck(this, Signup);

        this.$form = $(element);

        var defaults = {
            lang: "es",
            widgetPosition: { my: "left bottom", at: "left top" } };

        this.options = $.extend({}, defaults, options);

        // Load template
        new Template("signup", {
            lang: this.options.lang,
            callback: function (html) {
                _this.$form.html(html);
                _this.signupEvents();

                _this.$form.find(".js-selectmenu").each(function () {
                    var dataMenu = new DataMenu({
                        lang: this.options.lang,
                        contentType: $(this).data("content"),
                        selector: $(this)
                    });
                });

                _this.setupSelectMenus();

                $(".js-signup-date").datepicker({
                    changeMonth: true,
                    changeYear: true,
                    format: "dd/mm/yy",
                    beforeShow: function beforeShow(input, isnt) {
                        setTimeout(function () {
                            isnt.dpDiv.position({
                                my: "left bottom",
                                at: "left top",
                                of: input
                            });
                        }, 0);
                    }
                });

                var regional = i18n[_this.options.lang].regional;
                $.datepicker.regional;
            }
        });
    }

    _prototypeProperties(Signup, null, {
        setupSelectMenus: {

            /**
             * Replaces select menus with custom UI widgets
             */

            value: function setupSelectMenus() {
                $(".js-selectmenu").selectmenu({
                    position: this.options.widgetPosition
                });

                return this;
            },
            writable: true,
            configurable: true
        },
        signupEvents: {
            value: function signupEvents() {
                var _this = this;

                var $form = this.$form;
                var $toggle = this.$form.find(".js-copaair-toggle");

                // Show bottom row when any input gets focus
                $form.on("focus.copaair", "input", function (e) {
                    $form.addClass("copaair-widget-open");
                    $toggle.removeClass("copaair-hidden");
                });

                $form.on("submit", function (e) {
                    e.preventDefault();
                    _this.submitForm(e.target);
                });

                $(".js-country-selector").selectmenu({
                    change: function (e, ui) {
                        _this.options.country = ui.item.value;
                    }
                });

                $(".js-city-selector").selectmenu({
                    change: function (e, ui) {
                        _this.options.city = ui.item.value;
                    }
                });
            },
            writable: true,
            configurable: true
        },
        submitForm: {
            value: function submitForm(target) {
                var $form = $(target);

                var data = $form.serializeObject();
                data.fullname = data.first_name + " " + data.last_name;
                data.source = this.options.source;
                data.language = this.options.lang.toUpperCase();
                data.city = this.options.city;
                data.country = this.options.country;

                var container = this.options.container;

                $.ajax({
                    type: "POST",
                    url: "https://flightcontrol.io/api/signup/add",
                    data: data
                }).done(function (res) {
                    container.fadeOut();
                });
            },
            writable: true,
            configurable: true
        }
    });

    return Signup;
})();

module.exports = Signup;

},{"../../../lang/datepicker.json":4,"../lib/DataMenu":7,"../lib/Template":11}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9pbmRleC5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvYm93ZXJfY29tcG9uZW50cy9zdG9yZS5qcy9zdG9yZS5taW4uanMiLCJsYW5nL2Jvb2tpbmcuanNvbiIsImxhbmcvZGF0ZXBpY2tlci5qc29uIiwibGFuZy9zaWdudXAuanNvbiIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9BdXRvY29tcGxldGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRGF0YU1lbnUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvRGF0ZXBpY2tlci5qcyIsIi9ob21lL3ZhZ3JhbnQvQ29kZS9jb3BhYWlyLXdpZGdldHMvc3JjL2pzL2xpYi9GbGlnaHRDb250cm9sLmpzIiwiL2hvbWUvdmFncmFudC9Db2RlL2NvcGFhaXItd2lkZ2V0cy9zcmMvanMvbGliL0Zvcm1IZWxwZXIuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy9saWIvVGVtcGxhdGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL0Jvb2tpbmcuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYWFpci13aWRnZXRzL3NyYy9qcy93aWRnZXRzL1NpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLEFBQUMsQ0FBQSxVQUFVLE9BQU8sRUFBRTtBQUNoQixnQkFBWSxDQUFDOztBQUViLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FB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Q0FBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsR0FBRyxHQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUcsU0FBUyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLFVBQVMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFlBQVUsRUFBRSxFQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLEtBQUMsSUFBRSxJQUFJLEtBQUcsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFBLEFBQUMsRUFBQyxDQUFDLElBQUUsSUFBSSxLQUFHLENBQUMsR0FBQyxFQUFFLENBQUEsQUFBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxZQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFlBQVUsRUFBRSxFQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxXQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxRQUFHLE9BQU8sQ0FBQyxJQUFFLFFBQVEsRUFBQyxPQUFPLFNBQVMsQ0FBQyxJQUFHO0FBQUMsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLGFBQU8sQ0FBQyxJQUFFLFNBQVMsQ0FBQTtLQUFDO0dBQUMsQ0FBQyxJQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxXQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxRQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxVQUFTLENBQUMsRUFBQztBQUFDLEtBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsWUFBVTtBQUFDLEtBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtHQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxZQUFVO0FBQUMsUUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLFFBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxPQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO0tBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsU0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7QUFBQyxVQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUM7R0FBQyxDQUFDLEtBQUssSUFBRyxDQUFDLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBQztRQUFLLENBQUMsRUFBQyxDQUFDO1FBQXlPLENBQUMsRUFBdU0sQ0FBQzs7O1VBQWtFLENBQUMsR0FBVixVQUFXLENBQUMsRUFBQztBQUFDLGVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQTtPQUFDOztBQUF4aUIsVUFBRztBQUFDLFNBQUMsR0FBQyxJQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLHNCQUFzQixHQUFDLENBQUMsR0FBQyx5Q0FBdUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO09BQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLFNBQUMsR0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO09BQUM7QUFBSSxPQUFDLEdBQUMsV0FBUyxDQUFDLEVBQUM7QUFBQyxlQUFPLFlBQVU7QUFBQyxjQUFJLENBQUMsR0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLENBQUE7U0FBQyxDQUFBO09BQUM7O0FBQUMsT0FBQyxHQUFDLElBQUksTUFBTSxDQUFDLHVDQUF1QyxFQUFDLEdBQUcsQ0FBQztBQUErRCxPQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsZ0JBQU8sQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxTQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFHLFNBQVMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLFNBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsWUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLFFBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO1NBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBO09BQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxZQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxDQUFDLENBQUE7O0dBQUMsSUFBRztBQUFDLFFBQUksQ0FBQyxHQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsS0FBRyxDQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsQ0FBQSxPQUFNLENBQUMsRUFBQztBQUFDLEtBQUMsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxPQUFPLE1BQU0sSUFBRSxXQUFXLElBQUUsTUFBTSxDQUFDLE9BQU8sSUFBRSxJQUFJLENBQUMsTUFBTSxLQUFHLE1BQU0sR0FBQyxNQUFNLENBQUMsT0FBTyxHQUFDLENBQUMsR0FBQyxPQUFPLE1BQU0sSUFBRSxVQUFVLElBQUUsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUE7Q0FBQyxDQUFBLENBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTs7Ozs7Ozs7OztBQ0RuK0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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NkJBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdkIsQ0FBQyxDQUFDO2FBQ047Ozs7OztXQTlHQyxNQUFNOzs7QUFrSFosTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIEJvb2tpbmcgPSByZXF1aXJlKCcuL3dpZGdldHMvQm9va2luZycpLFxuICAgICAgICBTaWdudXAgID0gcmVxdWlyZSgnLi93aWRnZXRzL1NpZ251cCcpXG4gICAgO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB3aWRnZXRzIHRvIGpRdWVyeSBvYmplY3QgcHJvdG90eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIG92ZXJyaWRlIGRlZmF1bHRzLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBDdXJyZW50IG9iamVjdCBpbnN0YW5jZVxuICAgICAqL1xuICAgICQuZm4uY29wYWFpckJvb2tpbmcgPSBmdW5jdGlvbiBjb3BhYWlyQm9va2luZyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCAncGx1Z2luX2NvcGFhaXJCb29raW5nJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyQm9va2luZycsIG5ldyBCb29raW5nKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQuZm4uY29wYWFpclNpZ251cCA9IGZ1bmN0aW9uIGNvcGFhaXJTaWdudXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl9jb3BhYWlyU2lnbnVwJywgbmV3IFNpZ251cCh0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICB2YXIgYSA9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgJC5lYWNoKGEsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0ucHVzaCkge1xuICAgICAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0gPSBbb1t0aGlzLm5hbWVdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSB8fCAnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IHRoaXMudmFsdWUgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbztcbiAgICB9O1xuXG59KSk7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxMyBNYXJjdXMgV2VzdGluICovXG4oZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbygpe3RyeXtyZXR1cm4gciBpbiBlJiZlW3JdfWNhdGNoKHQpe3JldHVybiExfX12YXIgdD17fSxuPWUuZG9jdW1lbnQscj1cImxvY2FsU3RvcmFnZVwiLGk9XCJzY3JpcHRcIixzO3QuZGlzYWJsZWQ9ITEsdC52ZXJzaW9uPVwiMS4zLjE3XCIsdC5zZXQ9ZnVuY3Rpb24oZSx0KXt9LHQuZ2V0PWZ1bmN0aW9uKGUsdCl7fSx0Lmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gdC5nZXQoZSkhPT11bmRlZmluZWR9LHQucmVtb3ZlPWZ1bmN0aW9uKGUpe30sdC5jbGVhcj1mdW5jdGlvbigpe30sdC50cmFuc2FjdD1mdW5jdGlvbihlLG4scil7cj09bnVsbCYmKHI9bixuPW51bGwpLG49PW51bGwmJihuPXt9KTt2YXIgaT10LmdldChlLG4pO3IoaSksdC5zZXQoZSxpKX0sdC5nZXRBbGw9ZnVuY3Rpb24oKXt9LHQuZm9yRWFjaD1mdW5jdGlvbigpe30sdC5zZXJpYWxpemU9ZnVuY3Rpb24oZSl7cmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpfSx0LmRlc2VyaWFsaXplPWZ1bmN0aW9uKGUpe2lmKHR5cGVvZiBlIT1cInN0cmluZ1wiKXJldHVybiB1bmRlZmluZWQ7dHJ5e3JldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKHQpe3JldHVybiBlfHx1bmRlZmluZWR9fTtpZihvKCkpcz1lW3JdLHQuc2V0PWZ1bmN0aW9uKGUsbil7cmV0dXJuIG49PT11bmRlZmluZWQ/dC5yZW1vdmUoZSk6KHMuc2V0SXRlbShlLHQuc2VyaWFsaXplKG4pKSxuKX0sdC5nZXQ9ZnVuY3Rpb24oZSxuKXt2YXIgcj10LmRlc2VyaWFsaXplKHMuZ2V0SXRlbShlKSk7cmV0dXJuIHI9PT11bmRlZmluZWQ/bjpyfSx0LnJlbW92ZT1mdW5jdGlvbihlKXtzLnJlbW92ZUl0ZW0oZSl9LHQuY2xlYXI9ZnVuY3Rpb24oKXtzLmNsZWFyKCl9LHQuZ2V0QWxsPWZ1bmN0aW9uKCl7dmFyIGU9e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0LG4pe2VbdF09bn0pLGV9LHQuZm9yRWFjaD1mdW5jdGlvbihlKXtmb3IodmFyIG49MDtuPHMubGVuZ3RoO24rKyl7dmFyIHI9cy5rZXkobik7ZShyLHQuZ2V0KHIpKX19O2Vsc2UgaWYobi5kb2N1bWVudEVsZW1lbnQuYWRkQmVoYXZpb3Ipe3ZhciB1LGE7dHJ5e2E9bmV3IEFjdGl2ZVhPYmplY3QoXCJodG1sZmlsZVwiKSxhLm9wZW4oKSxhLndyaXRlKFwiPFwiK2krXCI+ZG9jdW1lbnQudz13aW5kb3c8L1wiK2krJz48aWZyYW1lIHNyYz1cIi9mYXZpY29uLmljb1wiPjwvaWZyYW1lPicpLGEuY2xvc2UoKSx1PWEudy5mcmFtZXNbMF0uZG9jdW1lbnQscz11LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIil9Y2F0Y2goZil7cz1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdT1uLmJvZHl9dmFyIGw9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApO24udW5zaGlmdChzKSx1LmFwcGVuZENoaWxkKHMpLHMuYWRkQmVoYXZpb3IoXCIjZGVmYXVsdCN1c2VyRGF0YVwiKSxzLmxvYWQocik7dmFyIGk9ZS5hcHBseSh0LG4pO3JldHVybiB1LnJlbW92ZUNoaWxkKHMpLGl9fSxjPW5ldyBSZWdFeHAoXCJbIVxcXCIjJCUmJygpKissL1xcXFxcXFxcOjs8PT4/QFtcXFxcXV5ge3x9fl1cIixcImdcIik7ZnVuY3Rpb24gaChlKXtyZXR1cm4gZS5yZXBsYWNlKC9eZC8sXCJfX18kJlwiKS5yZXBsYWNlKGMsXCJfX19cIil9dC5zZXQ9bChmdW5jdGlvbihlLG4saSl7cmV0dXJuIG49aChuKSxpPT09dW5kZWZpbmVkP3QucmVtb3ZlKG4pOihlLnNldEF0dHJpYnV0ZShuLHQuc2VyaWFsaXplKGkpKSxlLnNhdmUociksaSl9KSx0LmdldD1sKGZ1bmN0aW9uKGUsbixyKXtuPWgobik7dmFyIGk9dC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShuKSk7cmV0dXJuIGk9PT11bmRlZmluZWQ/cjppfSksdC5yZW1vdmU9bChmdW5jdGlvbihlLHQpe3Q9aCh0KSxlLnJlbW92ZUF0dHJpYnV0ZSh0KSxlLnNhdmUocil9KSx0LmNsZWFyPWwoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztlLmxvYWQocik7Zm9yKHZhciBuPTAsaTtpPXRbbl07bisrKWUucmVtb3ZlQXR0cmlidXRlKGkubmFtZSk7ZS5zYXZlKHIpfSksdC5nZXRBbGw9ZnVuY3Rpb24oZSl7dmFyIG49e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlLHQpe25bZV09dH0pLG59LHQuZm9yRWFjaD1sKGZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcztmb3IodmFyIGk9MCxzO3M9cltpXTsrK2kpbihzLm5hbWUsdC5kZXNlcmlhbGl6ZShlLmdldEF0dHJpYnV0ZShzLm5hbWUpKSl9KX10cnl7dmFyIHA9XCJfX3N0b3JlanNfX1wiO3Quc2V0KHAscCksdC5nZXQocCkhPXAmJih0LmRpc2FibGVkPSEwKSx0LnJlbW92ZShwKX1jYXRjaChmKXt0LmRpc2FibGVkPSEwfXQuZW5hYmxlZD0hdC5kaXNhYmxlZCx0eXBlb2YgbW9kdWxlIT1cInVuZGVmaW5lZFwiJiZtb2R1bGUuZXhwb3J0cyYmdGhpcy5tb2R1bGUhPT1tb2R1bGU/bW9kdWxlLmV4cG9ydHM9dDp0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuc3RvcmU9dH0pKEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcIm9yaWdpblwiOiBcIkRlc2RlXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiSGFjaWFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2FsaWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc29cIixcbiAgICAgICAgICAgIFwiZWNvbm9taWNcIjogXCJDbGFzZSBFY29uw7NtaWNhXCIsXG4gICAgICAgICAgICBcImJ1c2luZXNzXCI6IFwiQ2xhc2UgRWplY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIlZlciBWdWVsb3NcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRvc1wiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBcIk5pw7Fvc1wiLFxuICAgICAgICAgICAgXCJpbmZhbnRzXCIgOiBcIkluZmFudGVzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBvciBmYXZvciBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJGcm9tXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uXCI6IFwiVG9cIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiRGVwYXJ0dXJlXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJldHVyblwiLFxuICAgICAgICAgICAgXCJlY29ub21pY1wiOiBcIkVjb25vbXkgQ2xhc3NcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJCdXNpbmVzcyBDbGFzc1wiLFxuICAgICAgICAgICAgXCJzdWJtaXRcIjogXCJGaW5kIGZsaWdodHNcIixcbiAgICAgICAgICAgIFwiYWR1bHRzXCI6IFwiQWR1bHRzXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFwiQ2hpbGRyZW5cIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJJbmZhbnRzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlc1wiOiB7XG4gICAgICAgICAgICBcIm5vdGlmaWNhdGlvblwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBsZWFzZSBjb21wbGV0ZSBhbGwgdGhlIC4uLlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJvcmlnaW5cIjogXCJEZVwiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBcIlBhcmFcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlXCI6IFwiU2HDrWRhXCIsXG4gICAgICAgICAgICBcInJldHVyblwiOiBcIlJlZ3Jlc3NvXCIsXG4gICAgICAgICAgICBcImVjb25vbWljXCI6IFwiQ2xhc3NlIGVjb27DtG1pY2FcIixcbiAgICAgICAgICAgIFwiYnVzaW5lc3NcIjogXCJDbGFzc2UgRXhlY3V0aXZhXCIsXG4gICAgICAgICAgICBcInN1Ym1pdFwiOiBcIkJ1c2NhciB2b29zXCIsXG4gICAgICAgICAgICBcImFkdWx0c1wiOiBcIkFkdWx0b3NcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogXCJDcmlhbsOnYXNcIixcbiAgICAgICAgICAgIFwiaW5mYW50c1wiIDogXCJCZWLDqnNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibm90aWZpY2F0aW9uXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiUG9yIGZhdm9yIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MuXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiOiB7XG4gICAgICAgICAgICBcImNsb3NlVGV4dFwiOiBcIkNlcnJhclwiLFxuICAgICAgICAgICAgXCJwcmV2VGV4dFwiOiBcIiYjeDNDO0FudFwiLFxuICAgICAgICAgICAgXCJuZXh0VGV4dFwiOiBcIlNpZyYjeDNFO1wiLFxuICAgICAgICAgICAgXCJjdXJyZW50VGV4dFwiOiBcIkhveVwiLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcImVuZXJvXCIsXCJmZWJyZXJvXCIsXCJtYXJ6b1wiLFwiYWJyaWxcIixcIm1heW9cIixcImp1bmlvXCIsXG4gICAgICAgICAgICBcImp1bGlvXCIsXCJhZ29zdG9cIixcInNlcHRpZW1icmVcIixcIm9jdHVicmVcIixcIm5vdmllbWJyZVwiLFwiZGljaWVtYnJlXCJdLFxuICAgICAgICAgICAgXCJtb250aE5hbWVzU2hvcnRcIjogW1wiZW5lXCIsXCJmZWJcIixcIm1hclwiLFwiYWJyXCIsXCJtYXlcIixcImp1blwiLFwianVsXCIsXCJhZ29cIixcInNlcFwiLFwib2N0XCIsXCJub3ZcIixcImRpY1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNcIjogW1wiZG9taW5nb1wiLFwibHVuZXNcIixcIm1hcnRlc1wiLFwibWnDqXJjb2xlcycsJ2p1ZXZlc1wiLFwidmllcm5lc1wiLFwic8OhYmFkb1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNTaG9ydFwiOiBbXCJkb21cIixcImx1blwiLFwibWFyXCIsXCJtacOpXCIsXCJqdXZcIixcInZpZVwiLFwic8OhYlwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNNaW5cIjogW1wiRFwiLFwiTFwiLFwiTVwiLFwiWFwiLFwiSlwiLFwiVlwiLFwiU1wiXSxcbiAgICAgICAgICAgIFwid2Vla0hlYWRlclwiOiBcIlNtXCIsXG4gICAgICAgICAgICBcImRhdGVGb3JtYXRcIjogXCJkZC9tbS95eVwiLFxuICAgICAgICAgICAgXCJmaXJzdERheVwiOiAxLFxuICAgICAgICAgICAgXCJpc1JUTFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2hvd01vbnRoQWZ0ZXJZZWFyXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ5ZWFyU3VmZml4XCI6IFwiXCJcbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJyZWdpb25hbFwiIDoge31cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgICBcInJlZ2lvbmFsXCIgOiB7XG4gICAgICAgICAgICBcImNsb3NlVGV4dFwiOiBcIkZlY2hhclwiLFxuICAgICAgICAgICAgXCJwcmV2VGV4dFwiOiBcIiYjeDNDO0FudGVyaW9yXCIsXG4gICAgICAgICAgICBcIm5leHRUZXh0XCI6IFwiUHLDs3hpbW8mI3gzRTtcIixcbiAgICAgICAgICAgIFwiY3VycmVudFRleHRcIjogXCJIb2plXCIsXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNcIjogW1wiSmFuZWlyb1wiLFwiRmV2ZXJlaXJvXCIsXCJNYXLDp29cIixcIkFicmlsXCIsXCJNYWlvXCIsXCJKdW5ob1wiLFwiSnVsaG9cIixcIkFnb3N0b1wiLFwiU2V0ZW1icm9cIixcIk91dHVicm9cIixcIk5vdmVtYnJvXCIsXCJEZXplbWJyb1wiXSxcbiAgICAgICAgICAgIFwibW9udGhOYW1lc1Nob3J0XCI6IFtcIkphblwiLFwiRmV2XCIsXCJNYXJcIixcIkFiclwiLFwiTWFpXCIsXCJKdW5cIixcIkp1bFwiLFwiQWdvXCIsXCJTZXRcIixcIk91dFwiLFwiTm92XCIsXCJEZXpcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzXCI6IFtcIkRvbWluZ29cIixcIlNlZ3VuZGEtZmVpcmFcIixcIlRlcsOnYS1mZWlyYVwiLFwiUXVhcnRhLWZlaXJhJywnUXVpbnRhLWZlaXJhXCIsXCJTZXh0YS1mZWlyYVwiLFwiU8OhYmFkb1wiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNTaG9ydFwiOiBbXCJEb21cIixcIlNlZ1wiLFwiVGVyXCIsXCJRdWFcIixcIlF1aVwiLFwiU2V4XCIsXCJTw6FiXCJdLFxuICAgICAgICAgICAgXCJkYXlOYW1lc01pblwiOiBbXCJEb21cIixcIlNlZ1wiLFwiVGVyXCIsXCJRdWFcIixcIlF1aVwiLFwiU2V4XCIsXCJTw6FiXCJdLFxuICAgICAgICAgICAgXCJ3ZWVrSGVhZGVyXCI6IFwiU21cIixcbiAgICAgICAgICAgIFwiZGF0ZUZvcm1hdFwiOiBcImRkL21tL3l5XCIsXG4gICAgICAgICAgICBcImZpcnN0RGF5XCI6IDAsXG4gICAgICAgICAgICBcImlzUlRMXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzaG93TW9udGhBZnRlclllYXJcIjogZmFsc2UsXG4gICAgICAgICAgICBcInllYXJTdWZmaXhcIjogXCJcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiZXNcIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5vbWJyZVwiLFxuICAgICAgICAgICAgXCJsbmFtZVwiOiBcIkFwZWxsaWRvXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiRW1haWxcIixcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIlBhw61zXCIsXG4gICAgICAgICAgICBcImNpdHlcIjogXCJDaXVkYWRcIixcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCJNw7N2aWxcIixcbiAgICAgICAgICAgIFwic3Vic2NyaWJlXCI6IFwiU3VzY3JpYmlyXCIsXG4gICAgICAgICAgICBcImJpcnRoZGF5XCI6IFwiRmVjaGEgZGUgbmFjaW1pZW50b1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZW5cIjoge1xuICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgXCJmbmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgICAgIFwibG5hbWVcIjogXCJMYXN0IE5hbWVcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJFbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiQ291bnRyeVwiLFxuICAgICAgICAgICAgXCJjaXR5XCI6IFwiQ2l0eVwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIk1vYmlsZVwiLFxuICAgICAgICAgICAgXCJzdWJzY3JpYmVcIjogXCJTdWJzY3JpYmVcIixcbiAgICAgICAgICAgIFwiYmlydGhkYXlcIjogXCJEYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJwdFwiOiB7XG4gICAgICAgIFwiZm9ybVwiOiB7XG4gICAgICAgICAgICBcImZuYW1lXCI6IFwiTm9tZVwiLFxuICAgICAgICAgICAgXCJsbmFtZVwiOiBcIlNvYnJlbm9tZVwiLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIkUtbWFpbFwiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiUGHDrXNcIixcbiAgICAgICAgICAgIFwiY2l0eVwiOiBcIkNpZGFkZVwiLFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIkNlbHVsYXJcIixcbiAgICAgICAgICAgIFwic3Vic2NyaWJlXCI6IFwiSW5zY3JldmVyLXNlXCIsXG4gICAgICAgICAgICBcImJpcnRoZGF5XCI6IFwiRGF0YSBkZSBuYXNjaW1lbnRvXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgRmxpZ2h0Q29udHJvbCA9IHJlcXVpcmUoJy4vRmxpZ2h0Q29udHJvbCcpXG47XG5cbi8qKlxuICogQXV0b2NvbXBsZXRlIHdpZGdldCB3aXRoIGxpc3Qgb2YgQ29wYSdzIGRlc3RpbmF0aW9uc1xuICogZm9yIGJldHRlciB1c2FiaWxpdHkgdGhhbiBhIG5hdGl2ZSBzZWxlY3QgbWVudS5cbiAqIEBjbGFzc1xuICovXG5jbGFzcyBBdXRvY29tcGxldGVcbntcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBDdXN0b20gb3B0aW9ucyBmb3IgdGhpcyB3aWRnZXQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZGVzdGluYXRpb25zIGZyb20gRmxpZ2h0IENvbnRyb2wgQVBJXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNiIENhbGxiYWNrIHdoZW4gQVBJIGNhbGwgZmluaXNoZXNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgYW5kIGRlc3RpbmF0aW9ucyBhcmUgZmV0Y2hlZFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQoY2IpIHtcbiAgICAgICAgdmFyIGZsaWdodENvbnRyb2wgPSBuZXcgRmxpZ2h0Q29udHJvbCh7IGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nIH0pO1xuXG4gICAgICAgIGZsaWdodENvbnRyb2wuZmV0Y2goJ2Rlc3RpbmF0aW9ucycsIChkZXN0aW5hdGlvbnMpID0+IHtcbiAgICAgICAgICAgIC8vIEZvcm1hdCByYXcgZGVzdGluYXRpb25zIHRvIGF1dG9jb21wbGV0ZSBzdHJ1Y3R1cmVcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zb3VyY2UgPSB0aGlzLmZvcm1hdChkZXN0aW5hdGlvbnMubGlzdCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYXV0b2NvbXBsZXRlIHdpZGdldFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudCBET00gZWxlbWVudCB0byBhdHRhY2ggd2lkZ2V0IHRvXG4gICAgICovXG4gICAgcmVuZGVyKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJChlbGVtZW50KS5oaWRlKCksXG4gICAgICAgICAgICBzb3VyY2VDbGFzc2VzID0gJHRoaXMuYXR0cignY2xhc3MnKSxcbiAgICAgICAgICAgIHNvdXJjZVZhbHVlID0gJHRoaXMudmFsKCksXG4gICAgICAgICAgICBzb3VyY2VQbGFjZWhvbGRlciA9ICR0aGlzLmF0dHIoJ3BsYWNlaG9sZGVyJyksXG4gICAgICAgICAgICBkYXRhSW5wdXQgPSAkdGhpcy5kYXRhKCdpbnB1dC1maWVsZCcpXG4gICAgICAgIDtcblxuICAgICAgICB2YXIgJGlucHV0ID0gJCgnPGlucHV0IC8+JylcbiAgICAgICAgICAgIC52YWwoc291cmNlVmFsdWUpXG4gICAgICAgICAgICAuYXR0cigndHlwZScsICd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCdwbGFjZWhvbGRlcicsIHNvdXJjZVBsYWNlaG9sZGVyKVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtaW5wdXQtZmllbGQnLCBkYXRhSW5wdXQpXG4gICAgICAgIDtcblxuICAgICAgICAvLyBBZGQgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgJGlucHV0LmF1dG9jb21wbGV0ZSh0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIC8vIE9wZW4gbGlzdCBvbiBpbnB1dCBmb2N1c1xuICAgICAgICAkaW5wdXQub24oJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCR0aGlzLnZhbCgpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAkdGhpcy5hdXRvY29tcGxldGUoJ3NlYXJjaCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgc3R5bGluZ1xuICAgICAgICAkaW5wdXRcbiAgICAgICAgICAgIC5hZGRDbGFzcyhzb3VyY2VDbGFzc2VzKVxuICAgICAgICAgICAgLmFkZENsYXNzKCd1aS13aWRnZXQgIHVpLXdpZGdldC1jb250ZW50ICB1aS1zdGF0ZS1kZWZhdWx0Jyk7XG5cbiAgICAgICAgLy8gSW5zZXJ0IGludG8gRE9NXG4gICAgICAgICRpbnB1dC5pbnNlcnRBZnRlcigkdGhpcyk7XG5cbiAgICAgICAgLy8gT3ZlcndyaXRlIGF1dG9jb21wbGV0ZSBpdGVtIHJlbmRlcmluZyB3aXRoIGN1c3RvbSBtYXJrdXBcbiAgICAgICAgJGlucHV0LmF1dG9jb21wbGV0ZSgnaW5zdGFuY2UnKS5fcmVuZGVySXRlbSA9IGZ1bmN0aW9uKHVsLCBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJCgnPGxpPicpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChpdGVtLmxhYmVsKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyh1bCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ3VzdG9tIGZpbHRlcmluZyBmdW5jdGlvblxuICAgICAgICAkLnVpLmF1dG9jb21wbGV0ZS5maWx0ZXIgPSBmdW5jdGlvbiBhdXRvQ29tcGxldGVGaWx0ZXIoYXJyYXksIHRlcm0pIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgJC51aS5hdXRvY29tcGxldGUuZXNjYXBlUmVnZXgodGVybSksICdpJyk7XG4gICAgICAgICAgICByZXR1cm4gJC5ncmVwKGFycmF5LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlci50ZXN0KHZhbHVlLmxhYmVsIHx8IHZhbHVlLnZhbHVlIHx8IHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdHMgZGVzdGluYXRpb25zIGludG8gdGhlIG5lZWRlZCBzdHJ1Y3R1cmUgdG8gYmUgZGlzcGxheWVkXG4gICAgICogb24gdGhlIGF1dG9jb21wbGV0ZSBtZW51IHdpZGdldC5cbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gZGVzdGluYXRpb25zIFJhdyBkYXRhIHJldHVybmVkIGZyb20gRmxpZ2h0IENvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICAgIEZvcm1hdHRlZCBkZXN0aW5hdGlvbnNcbiAgICAgKi9cbiAgICBmb3JtYXQoZGVzdGluYXRpb25zKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAkLmVhY2goZGVzdGluYXRpb25zLCAoaSwgZGVzdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRlbXBMYWJlbCA9XG4gICAgICAgICAgICAgICAgICAgIGA8Yj4keyBkZXN0Lm5hbWVbdGhpcy5vcHRpb25zLmxhbmddIH0sICR7IGRlc3QuY291bnRyeSB9PC9iPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvZGVcIj4gfCAkeyBkZXN0LmlkIH08L3NwYW4+YCxcbiAgICAgICAgICAgICAgICB0ZW1wVmFsdWUgPSBkZXN0LmlkLFxuICAgICAgICAgICAgICAgIHRleHRWYWx1ZSA9IGRlc3QubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gKyAnLCAnICsgZGVzdC5pZDtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdGVtcExhYmVsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0ZW1wVmFsdWUsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGV4dFZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbi8qKlxuICogRXhwb3J0XG4gKiBAZXhwb3J0cyBBdXRvY29tcGxldGVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBBdXRvY29tcGxldGU7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIEZsaWdodENvbnRyb2wgPSByZXF1aXJlKCcuL0ZsaWdodENvbnRyb2wnKSxcblxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBjb250ZW50VHlwZTogJ2NvdW50cmllcycsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9XG4gICAgfVxuO1xuXG5cblxuY2xhc3MgRGF0YU1lbnVcbntcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBDdXN0b20gb3B0aW9ucyBmb3IgdGhpcyB3aWRnZXQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgIH1cblxuICAgIHNldHVwKCkge1xuICAgICAgICB2YXIgZmxpZ2h0Q29udHJvbCA9IG5ldyBGbGlnaHRDb250cm9sKHsgbGFuZzogdGhpcy5vcHRpb25zLmxhbmcgfSk7XG5cbiAgICAgICAgZmxpZ2h0Q29udHJvbC5mZXRjaCh0aGlzLm9wdGlvbnMuY29udGVudFR5cGUsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBGb3JtYXQgcmF3IGRlc3RpbmF0aW9ucyB0byBhdXRvY29tcGxldGUgc3RydWN0dXJlXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc291cmNlID0gdGhpcy5mb3JtYXQoZGF0YS5saXN0KTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAkLmVhY2godGhpcy5vcHRpb25zLnNvdXJjZSwgKGksIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLnNlbGVjdG9yKS5hcHBlbmQoaXRlbS5kaXNwbGF5KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRzIGRhdGEgaW50byB0aGUgbmVlZGVkIHN0cnVjdHVyZSB0byBiZSBkaXNwbGF5ZWRcbiAgICAgKiBvbiB0aGUgYXV0b2NvbXBsZXRlIG1lbnUgd2lkZ2V0LlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBkZXN0aW5hdGlvbnMgUmF3IGRhdGEgcmV0dXJuZWQgZnJvbSBGbGlnaHQgQ29udHJvbFxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICAgRm9ybWF0dGVkIGRlc3RpbmF0aW9uc1xuICAgICAqL1xuICAgIGZvcm1hdChsaXN0KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAkLmVhY2gobGlzdCwgKGksIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPVxuICAgICAgICAgICAgICAgIGA8b3B0aW9uIHZhbHVlPVwiJHsgaXRlbS5pZCB9XCI+JHsgaXRlbS5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSB9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om9wdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YU1lbnU7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIGkxOG4gPSByZXF1aXJlKCcuLi8uLi8uLi9sYW5nL2RhdGVwaWNrZXIuanNvbicpLFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgICBkZXBhcnR1cmVTZWxlY3RvcjogJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1kZXBhcnR1cmUnLFxuICAgICAgICByZXR1cm5TZWxlY3RvcjogJy5jb3BhYWlyLWJvb2tpbmctZGF0ZXBpY2tlci1yZXR1cm4nLFxuICAgICAgICBkYXRlUnVsZXM6IHtcbiAgICAgICAgICAgIHRvZGF5OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgd2Vla0xhdGVyOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxuICAgICAgICB9LFxuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBiZWZvcmVTaG93OiBmdW5jdGlvbihpbnB1dCwgaXNudCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpc250LmRwRGl2LnBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgbXk6ICdsZWZ0IGJvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGF0OiAnbGVmdCB0b3AnLFxuICAgICAgICAgICAgICAgICAgICBvZjogaW5wdXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfVxuO1xuXG4vKipcbiAqIERhdGVwaWNrZXIgbW9kdWxlXG4gKi9cbmNsYXNzIERhdGVwaWNrZXIge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBkYXRlIHBpY2tlciBpbnNpZGUgdGhlIGJvb2tpbmcgZm9ybVxuICAgICAqIHNldHVwcyB0aGUgZGVmYXVsdHMgZGF0ZXMgYW5kIGxhbmd1YWdlXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnNldExvY2FsZSgpO1xuICAgICAgICB0aGlzLnNldERlZmF1bHREYXRlcygpO1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBkZWZhdWx0cyBkYXRlc1xuICAgICAqIHRoaXMgY29uc2lzdCBpbiBzZXQgY3VycmVudCBkYXRlIGZvciBkZXBhcnR1cmVcbiAgICAgKiBhbmQgb25lIHdlZWsgbGF0ZXIgZm9yIHJldHVyblxuICAgICAqL1xuICAgIHNldERlZmF1bHREYXRlcygpIHtcbiAgICAgICAgdmFyIGRhdGVSdWxlcyA9IHRoaXMub3B0aW9ucy5kYXRlUnVsZXMsXG4gICAgICAgICAgICAkZGVwYXJ0dXJlRmllbGQgPSAkKHRoaXMub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLm1pbkRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIGRhdGVSdWxlcy50b2RheSk7XG4gICAgICAgICRyZXR1cm5GaWVsZC5kYXRlcGlja2VyKFwic2V0RGF0ZVwiLCBkYXRlUnVsZXMud2Vla0xhdGVyKTtcbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICAgIHZhciAkZGVwYXJ0dXJlRmllbGQgPSAkKHRoaXMub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvciksXG4gICAgICAgICAgICAkcmV0dXJuRmllbGQgPSAkKHRoaXMub3B0aW9ucy5yZXR1cm5TZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gJGRlcGFydHVyZUZpZWxkLmRhdGVwaWNrZXIoJ29wdGlvbicsICdvblNlbGVjdCcsIHRoaXMub25TZWxlY3RPdXRib3VuZCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RPdXRib3VuZChkYXRlVGV4dCwgaW5zdCkge1xuICAgICAgICAgICAgdmFyICRyZXR1cm5GaWVsZCA9ICQodGhpcy5vcHRpb25zLnJldHVyblNlbGVjdG9yKSxcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoaW5zdC5zZWxlY3RlZFllYXIsIGluc3Quc2VsZWN0ZWRNb250aCwgaW5zdC5zZWxlY3RlZERheSk7XG5cbiAgICAgICAgICAgIC8vdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgJHJldHVybkZpZWxkLmRhdGVwaWNrZXIoJ3NldERhdGUnLCB3ZWVrbGF0ZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZSBkYXRlcGlja2VyIGRlcGVuZGluZyBvbiB0aGVcbiAgICAgKiBsb2NhbGl6YXRpb25cbiAgICAgKi9cbiAgICBzZXRMb2NhbGUoKSB7XG4gICAgICAgIHZhciByZWdpb25hbCA9IGkxOG5bdGhpcy5vcHRpb25zLmxhbmddLnJlZ2lvbmFsO1xuICAgICAgICAkLmRhdGVwaWNrZXIuc2V0RGVmYXVsdHMocmVnaW9uYWwpO1xuICAgIH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0ZXBpY2tlcjtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdzdG9yZS1qcycpO1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIGFwaToge1xuICAgICAgICAgICAgZGVzdGluYXRpb25zIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9kZXN0aW5hdGlvbnNcIixcbiAgICAgICAgICAgIGNvdW50cmllcyA6IFwiaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9yb3V0ZXMvY291bnRyaWVzXCIsXG4gICAgICAgICAgICByZWdpb25zIDogXCJodHRwczovL2ZsaWdodGNvbnRyb2wuaW8vYXBpL3JvdXRlcy9yZWdpb25zXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JhZ2VFeHBpcmF0aW9uOiA4NjQwMDAwMCxcbiAgICAgICAgc3RvcmFnZTogdHJ1ZSxcbiAgICB9XG47XG5cbi8qKlxuICogRXh0ZW5zaW9uIHRvIHRoZSBzdG9yYWdlIGNsYXNzXG4gKiB0byBzZXR1cCB0aGUgZXhwaXJhdGlvbiB2YWx1ZVxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIHN0b3JlV2lkdGhFeHBpcmF0aW9uID0ge1xuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWwsIGV4cCkge1xuICAgICAgICBzdG9yZS5zZXQoa2V5LCB7IHZhbDp2YWwsIGV4cDpleHAsIHRpbWU6bmV3IERhdGUoKS5nZXRUaW1lKCkgfSlcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciBpbmZvID0gc3RvcmUuZ2V0KGtleSlcbiAgICAgICAgaWYgKCFpbmZvKSB7IHJldHVybiBudWxsIH1cbiAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5mby50aW1lID4gaW5mby5leHApIHsgcmV0dXJuIG51bGwgfVxuICAgICAgICByZXR1cm4gaW5mby52YWxcbiAgICB9XG59XG5cbi8qKlxuICogTW9kdWxlIEZsaWdodENvbnRyb2xcbiAqL1xuY2xhc3MgRmxpZ2h0Q29udHJvbCB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcblxuICAgICAgICBpZighc3RvcmUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jyb3dzZXIgbm90IHN1cHBvcnRlZCBvciBpbiBwcml2YXRlIG1vZGUnKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdG9yYWdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBkYXRhIGZyb20gZmxpZ2h0IGNvbnRyb2xsZXJcbiAgICAgKiBiYXNlZCBvbiB0aGUgcmVzb3VyY2UgbmFtZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICByZXNvdXJjZU5hbWU6IGRlc3RpbmF0aW9uc3xjb3VudHJpZXN8cmVnaW9uc1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYiAgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmZXRjaChyZXNvdXJjZU5hbWUsIGNiKSB7XG4gICAgICAgIHZhciByZXNvdXJjZVZhbHVlID0ge307XG5cbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnN0b3JhZ2UgJiYgc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSlcbiAgICAgICAgICAgJiYgc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSArICcuY291bnQnKSkge1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5saXN0ID0gc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmNvdW50ID0gc3RvcmVXaWR0aEV4cGlyYXRpb24uZ2V0KHJlc291cmNlTmFtZSArICcuY291bnQnKTtcblxuICAgICAgICAgICByZXR1cm4gY2IocmVzb3VyY2VWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAkLmdldEpTT04odGhpcy5vcHRpb25zLmFwaVtyZXNvdXJjZU5hbWVdLCAoZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnNvcnROYW1lcyhkYXRhKTtcblxuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLnN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICBzdG9yZVdpZHRoRXhwaXJhdGlvbi5zZXQocmVzb3VyY2VOYW1lLCBkYXRhLCB0aGlzLm9wdGlvbnMuc3RvcmFnZUV4cGlyYXRpb24pO1xuICAgICAgICAgICAgICAgIHN0b3JlV2lkdGhFeHBpcmF0aW9uLnNldChyZXNvdXJjZU5hbWUgKyAnLmNvdW50JywgZGF0YS5sZW5ndGgsIHRoaXMub3B0aW9ucy5zdG9yYWdlRXhwaXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvdXJjZVZhbHVlLmxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgcmVzb3VyY2VWYWx1ZS5jb3VudCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgICBjYihyZXNvdXJjZVZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHNvcnQgZGF0YVxuICAgICAqIGJhc2VkIG9uIGxhbmd1YWdlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgc29ydE5hbWVzKGRhdGEpIHtcbiAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lW3RoaXMub3B0aW9ucy5sYW5nXSA+IGIubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10pIHJldHVybiAxO1xuICAgICAgICAgICAgaWYgKGEubmFtZVt0aGlzLm9wdGlvbnMubGFuZ10gPCBiLm5hbWVbdGhpcy5vcHRpb25zLmxhbmddKSByZXR1cm4gLTE7XG5cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxpZ2h0Q29udHJvbDtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIG9yaWdpbjogJ2FsbCcsXG4gICAgICAgIGRlc3RpbmF0aW9uOiAnYWxsJyxcbiAgICAgICAgZDE6IG51bGwsXG4gICAgICAgIC8vIHJlcXVpcmVkIGZpZWxkIHRvIHN1Ym1pdCBmb3JtXG4gICAgICAgIC8vIHRvIGNvcGFcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB0cmlwVHlwZTogXCJSVFwiLFxuICAgICAgICAgICAgZmxleGlibGVTZWFyY2g6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgcG9zOiBcIkNNR1NcIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1swXS50eXBlXCI6IFwiQURUXCIsXG4gICAgICAgICAgICBcImd1ZXN0VHlwZXNbMV0udHlwZVwiOiBcIkNOTlwiLFxuICAgICAgICAgICAgXCJndWVzdFR5cGVzWzJdLnR5cGVcIjogXCJJTkZcIixcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1swXS5hbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1sxXS5hbW91bnRcIjogMCxcbiAgICAgICAgICAgIFwiZ3Vlc3RUeXBlc1syXS5hbW91bnRcIjogMCxcbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlRGF5XCI6IG51bGwsXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZU1vbnRoXCI6IG51bGwsXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiaW5ib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiOiBudWxsLFxuICAgICAgICAgICAgXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZVllYXJcIjogbnVsbCxcbiAgICAgICAgICAgIC8vIFwiY291cG9uXCI6IG51bGwsXG4gICAgICAgICAgICAvLyBvcmlnaW5cbiAgICAgICAgICAgIFwib3V0Ym91bmRPcHRpb24ub3JpZ2luTG9jYXRpb25Db2RlXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIjogbnVsbCxcbiAgICAgICAgICAgIC8vIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICBcIm91dGJvdW5kT3B0aW9uLmRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCI6IG51bGwsXG4gICAgICAgICAgICBcImluYm91bmRPcHRpb24ub3JpZ2luTG9jYXRpb25Db2RlXCI6IG51bGwsXG4gICAgICAgICAgICAvLyAvLyBjYWJpbiBjbGFzcyBCdXNpbmVzc3xFY29ub215XG4gICAgICAgICAgICBcImNhYmluQ2xhc3NcIjogXCJFY29ub215XCIsXG4gICAgICAgICAgICBsYW5nOiAnZXMnXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1Vcmw6ICdodHRwczovL2Jvb2tpbmdzLmNvcGFhaXIuY29tL0NNR1MvJyArXG4gICAgICAgICAgICAgICAgICAgICAgICdBaXJMb3dGYXJlU2VhcmNoRXh0ZXJuYWwuZG8/J1xuICAgIH1cbjtcblxuLyoqXG4gKiBGb3JtSGVscGVyIG1vZHVsZVxuICovXG5jbGFzcyBGb3JtSGVscGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgICAgIC8vIHNldCBkZWZhdXRscyB2YWx1ZXNcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0Qm91bmRzKCk7XG4gICAgICAgIHRoaXMuc2V0RGF0ZXModGhpcy5vcHRpb25zLmRhdGVwaWNrZXIsIHtyZXR1cm5zOnRydWUsIGRlcGFydHVyZTp0cnVlfSk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHMubGFuZyA9IHRoaXMub3B0aW9ucy5sYW5nO1xuICAgICAgICAvLyBsb2FkIGV2ZW50cyByZWxhdGVkIHdpdGggZm9ybSBoZWxwZXIgYW5kIG90aGVyIG1vZHVsZXNcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcbiAgICB9XG5cblxuXG4gICAgcHJvY2VzcygpIHtcblxuICAgICAgICB2YXIgdXJsID0gdGhpcy5vcHRpb25zLmZvcm1Vcmw7XG4gICAgICAgIHZhciB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgICAgdmFyIGh0dHBRdWVyeSA9ICQucGFyYW0odGhpcy5vcHRpb25zLmlucHV0cyk7XG4gICAgICAgIGh0dHBRdWVyeSArPSAnJicgKyAkLnBhcmFtKHtkMTogdGhpcy5vcHRpb25zLmQxfSk7XG5cbiAgICAgICAgaWYgKHZhbGlkYXRpb24uZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uLmJhZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyBlcnJvcnMsIGZvcndhcmQgZm9ybSB2YWx1ZXMgdG8gY29wYVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaHR0cFF1ZXJ5KTtcbiAgICAgICAgICAgIHZhciBzZWFyY2hXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwgKyBodHRwUXVlcnksICdfYmxhbmsnKTtcbiAgICAgICAgICAgIHNlYXJjaFdpbmRvdy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGVmYXVsdEJvdW5kcygpIHtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9yaWdpbiAhPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm91bmRzKCdvcmlnaW4nLCB0aGlzLm9wdGlvbnMub3JpZ2luKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24gIT09J2FsbCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm91bmRzKCdkZXN0aW5hdGlvbicsIHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEJvdW5kcyhib3VuZCwgbG9jYXRpb24pIHtcblxuICAgICAgICBpZiAoYm91bmQgPT09ICdvcmlnaW4nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24ub3JpZ2luTG9jYXRpb25Db2RlXCJdID0gbG9jYXRpb247XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiaW5ib3VuZE9wdGlvbi5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvdW5kID09PSAnZGVzdGluYXRpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIl0gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLm9yaWdpbkxvY2F0aW9uQ29kZVwiXSA9IGxvY2F0aW9uO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXREYXRlcyhkYXRlcGlja2VyLCBib3VuZHMpIHtcbiAgICAgICAgLy8gZ2V0IGN1cnJlbnQgZGF0ZXBpY2tlcnMgZGF0ZXNcbiAgICAgICAgdmFyIGRlcGFydHVyZURhdGUgPSAkKGRhdGVwaWNrZXIub3B0aW9ucy5kZXBhcnR1cmVTZWxlY3RvcikuZGF0ZXBpY2tlcignZ2V0RGF0ZScpLFxuICAgICAgICByZXR1cm5EYXRlID0gJChkYXRlcGlja2VyLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpLmRhdGVwaWNrZXIoJ2dldERhdGUnKTtcblxuICAgICAgICBpZiAoYm91bmRzLnJldHVybnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJpbmJvdW5kT3B0aW9uLmRlcGFydHVyZURheVwiXSA9IHJldHVybkRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlTW9udGhcIl0gPSByZXR1cm5EYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImluYm91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiXSA9IHJldHVybkRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJvdW5kcy5kZXBhcnR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVEYXlcIl0gPSBkZXBhcnR1cmVEYXRlLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJvdXRib3VuZE9wdGlvbi5kZXBhcnR1cmVNb250aFwiXSA9IGRlcGFydHVyZURhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wib3V0Ym91bmRPcHRpb24uZGVwYXJ0dXJlWWVhclwiXSA9IGRlcGFydHVyZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENhYmluQ2xhc3ModGFyZ2V0KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnB1dHNbXCJjYWJpbkNsYXNzXCJdID0gJCh0YXJnZXQpLnZhbCgpO1xuICAgIH1cblxuICAgIHNldFBhc3NlbmdlcnNBbW91bnQodHlwZSwgdmFsdWUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdhZHVsdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0c1tcImd1ZXN0VHlwZXNbMF0uYW1vdW50XCJdID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoaWxkJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiZ3Vlc3RUeXBlc1sxXS5hbW91bnRcIl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5mYW50JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzW1wiZ3Vlc3RUeXBlc1syXS5hbW91bnRcIl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q291cG9uKGNvdXBvbikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5wdXRzLmNvdXBvbiA9IGNvdXBvbjtcbiAgICB9XG5cbiAgICBzZXREMSgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlucHV0cy5kMSA9IHRoaXMub3B0aW9ucy5kMTtcbiAgICB9XG5cbiAgICB2YWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgICAgIHZhciBlcnJvcnMgID0ge1xuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgYmFnOltdXG4gICAgICAgIH07XG4gICAgICAgIHZhciBjdXJyZW50RXJyb3I7XG4gICAgICAgIGZvciAodmFyIGlucHV0IGluIHRoaXMub3B0aW9ucy5pbnB1dHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9ucy5pbnB1dHNbaW5wdXRdKTtcbiAgICAgICAgICAgIGlmKCF0aGlzLm9wdGlvbnMuaW5wdXRzW2lucHV0XSAmJiB0aGlzLm9wdGlvbnMuaW5wdXRzW2lucHV0XSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvciA9IHt9O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5maWVsZCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5tZXNzYWdlID0gYFRoZSBpbnB1dCAke2lucHV0fSBtdXN0IGhhdmUgc29tZSB2YWx1ZWA7XG4gICAgICAgICAgICAgICAgZXJyb3JzLmJhZy5wdXNoKGN1cnJlbnRFcnJvcik7XG4gICAgICAgICAgICAgICAgZXJyb3JzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfTtcblxuICAgIGV2ZW50cygpIHtcblxuICAgICAgICB2YXIgZGF0ZXBpY2tlciA9IHRoaXMub3B0aW9ucy5kYXRlcGlja2VyLFxuICAgICAgICAgICAgJGRlcGFydHVyZUZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMuZGVwYXJ0dXJlU2VsZWN0b3IpLFxuICAgICAgICAgICAgJHJldHVybkZpZWxkID0gJChkYXRlcGlja2VyLm9wdGlvbnMucmV0dXJuU2VsZWN0b3IpO1xuXG4gICAgICAgICRkZXBhcnR1cmVGaWVsZC5kYXRlcGlja2VyKCdvcHRpb24nLCAnb25TZWxlY3QnLCAoZGF0ZVRleHQsIGluc3QpID0+e1xuXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGluc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWREYXkpO1xuXG4gICAgICAgICAgICAvLyB0aGlzIHNldHMgdGhlIGluYm91bmQgZGF0ZSBwaWNrZXIgdG8gYSB3ZWVrIGxhdGVyIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgd2Vla2xhdGVyID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHdlZWtsYXRlcik7XG4gICAgICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ21pbkRhdGUnLCBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZXMoZGF0ZXBpY2tlciwge3JldHVybnM6dHJ1ZSwgZGVwYXJ0dXJlOnRydWV9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkcmV0dXJuRmllbGQuZGF0ZXBpY2tlcignb3B0aW9uJywgJ29uU2VsZWN0JywgKGRhdGVUZXh0LCBpbnN0KSA9PntcblxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShpbnN0LnNlbGVjdGVkWWVhciwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkRGF5KTtcblxuICAgICAgICAgICAgLy8gdGhpcyBzZXRzIHRoZSBpbmJvdW5kIGRhdGUgcGlja2VyIHRvIGEgd2VlayBsYXRlciBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgdmFyIHdlZWtsYXRlciA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlcyhkYXRlcGlja2VyLCB7cmV0dXJuczp0cnVlLCBkZXBhcnR1cmU6ZmFsc2V9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJvb2tpbmcuZmluZCgnLmpzLWNhYmluLWNsYXNzJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FiaW5DbGFzcyhlLnRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5ib29raW5nLmZpbmQoJy5qcy1hZHVsdHMtYW1vdW50Jykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFzc2VuZ2Vyc0Ftb3VudCgnYWR1bHQnLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJvb2tpbmcuZmluZCgnLmpzLWNoaWxkcmVuLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2NoaWxkJywgdWkuaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5ib29raW5nLmZpbmQoJy5qcy1pbmZhbnRzLWFtb3VudCcpLnNlbGVjdG1lbnUoe1xuICAgICAgICAgICAgY2hhbmdlOiAoZSwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhc3NlbmdlcnNBbW91bnQoJ2luZmFudCcsIHVpLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuYm9va2luZy5maW5kKCcuanMtc3VibWl0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2VzcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSGVscGVyO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKSxcbiAgICBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGFuZGxlYmFycycpLFxuICAgIGkxOG4gPSB7XG4gICAgICAgIGJvb2tpbmc6IHJlcXVpcmUoJy4uLy4uLy4uL2xhbmcvYm9va2luZy5qc29uJyksXG4gICAgICAgIHNpZ251cDogcmVxdWlyZSgnLi4vLi4vLi4vbGFuZy9zaWdudXAuanNvbicpLFxuICAgIH0sXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgIC8vc3JjOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9ib3dlcl9jb21wb25lbnRzL2NvcGFhaXItd2lkZ2V0cy90ZW1wbGF0ZXMnLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7fVxuICAgIH1cbjtcblxuXG5cbmNsYXNzIFRlbXBsYXRlXG57XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWRnZXQsIG9wdGlvbnMpIHtcblxuICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdHMuc3JjID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvYm93ZXJfY29tcG9uZW50cy9jb3BhYWlyLXdpZGdldHMvdGVtcGxhdGVzJztcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAodHlwZW9mIEhhbmRsZWJhcnMgIT09ICd1bmRlZmluZWQnICYmIEhhbmRsZWJhcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBgJHt0aGlzLm9wdGlvbnMuc3JjfS8ke3dpZGdldH0uaGJzYCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAodHBsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kYXRhID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgaTE4blt3aWRnZXRdW3RoaXMub3B0aW9ucy5sYW5nXSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gdGhpcy5jb21waWxlKHdpZGdldCwgdHBsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrKGh0bWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhpcyBwbHVnaW4gcmVxdWlyZXMgSGFuZGxlYmFycy5qcycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGlsZSh3aWRnZXQsIHRwbCkge1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUodHBsKTtcbiAgICAgICAgdmFyIGh0bWwgPSB0ZW1wbGF0ZSh0aGlzLm9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZW1wbGF0ZTtcbiIsIi8qKlxuICogTW9kdWxlc1xuICovXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIFRlbXBsYXRlID0gcmVxdWlyZSgnLi4vbGliL1RlbXBsYXRlJyksXG4gICAgRmxpZ2h0Q29udHJvbCA9IHJlcXVpcmUoJy4uL2xpYi9GbGlnaHRDb250cm9sJyksXG4gICAgRGF0ZXBpY2tlciA9IHJlcXVpcmUoJy4uL2xpYi9EYXRlcGlja2VyJyksXG4gICAgQXV0b2NvbXBsZXRlID0gcmVxdWlyZSgnLi4vbGliL0F1dG9jb21wbGV0ZScpLFxuICAgIEZvcm1IZWxwZXIgPSByZXF1aXJlKCcuLi9saWIvRm9ybUhlbHBlcicpXG47XG5cbi8qKlxuICogT3B0aW9uc1xuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBsYW5nOiAnZXMnLFxuICAgICAgICBkMTogbnVsbCxcbiAgICAgICAgY291cG9uOiBudWxsLFxuICAgICAgICBvcmlnaW46IG51bGwsXG4gICAgICAgIGRlc3RpbmF0aW9uOiBudWxsLFxuICAgICAgICBkZXN0aW5hdGlvbk5hbWU6IG51bGwsXG4gICAgICAgIHdpZGdldFBvc2l0aW9uOiB7IG15OiAnbGVmdCBib3R0b20nLCBhdDogJ2xlZnQgdG9wJyB9LFxuICAgICAgICB0ZW1wbGF0ZVBhdGg6ICdib3dlcl9jb21wb25lbnRzL2NvcGFhaXItd2lkZ2V0cy90ZW1wbGF0ZXMvYm9va2luZy5oYnMnLFxuICAgICAgICBsYW5ndWFnZVBhdGg6ICdib3dlcl9jb21wb25lbnRzL2NvcGFhaXItd2lkZ2V0cy9sYW5nLydcbiAgICB9XG47XG5cblxuY2xhc3MgQm9va2luZyB7XG5cbiAgICAvKipcbiAgICAgKiBXaWRnZXQgY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0b3IgZWxlbWVudCBET00gb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgIE9wdGlvbnMgcGFzc2VkIG9uIHBsdWdpbiBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kYm9va2luZyA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgICAgIG5ldyBUZW1wbGF0ZSgnYm9va2luZycsIHtcbiAgICAgICAgICAgICdsYW5nJzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICAnb3JpZ2luJzogdGhpcy5vcHRpb25zLm9yaWdpbixcbiAgICAgICAgICAgICdkZXN0aW5hdGlvbic6IHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgICAgICAgICAgICdkZXN0aW5hdGlvbk5hbWUnOiB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb25OYW1lLCAvLyB0ZW1wb3JhcnkgZml4IGZvciBzdGF0aWMgZGVzdGluYXRpb25cbiAgICAgICAgICAgIGNhbGxiYWNrOiAoaHRtbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvb2tpbmcuaHRtbChodG1sKTtcblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gZmluaXNoZWQsIGJ1aWxkIGFsbCB0aGUgd2lkZ2V0c1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWxlY3RNZW51cygpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0dXAgZGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgIHZhciBkYXRlcGlja2VyID0gbmV3IERhdGVwaWNrZXIoe1xuICAgICAgICAgICAgICAgICAgICBsYW5nOiB0aGlzLm9wdGlvbnMubGFuZyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkYXRlcGlja2VyLnJlbmRlcigpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1IZWxwZXIgPSBuZXcgRm9ybUhlbHBlcih7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVwaWNrZXI6IGRhdGVwaWNrZXIsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogdGhpcy5vcHRpb25zLm9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246IHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZzogdGhpcy4kYm9va2luZyxcbiAgICAgICAgICAgICAgICAgICAgZDE6IHRoaXMub3B0aW9ucy5kMSxcbiAgICAgICAgICAgICAgICAgICAgbGFuZzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5jb3Vwb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUhlbHBlci5zZXRDb3Vwb24odGhpcy5vcHRpb25zLmNvdXBvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXV0b2NvbXBsZXRlIHdpZGdldHNcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRBdXRvY29tcGxldGUoZm9ybUhlbHBlcik7XG5cblxuICAgICAgICAgICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgICAgICAgICAgdGhpcy5ib29raW5nRXZlbnRzKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgYXV0b2NvbXBsZXRlIGRlc3RpbmF0aW9uIHdpZGdldHNcbiAgICAgKiBAc2VlIG1vZHVsZTpBdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBpbml0QXV0b2NvbXBsZXRlKGZvcm1IZWxwZXIpIHtcbiAgICAgICAgLy8gSW5pdCBjbGFzcyB3aXRoIG9wdGlvbnNcbiAgICAgICAgdmFyIGF1dG9jb21wbGV0ZSA9IG5ldyBBdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgbGFuZzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IGRpc3BsYXkgdmFsdWUgdG8gdGhlIGlucHV0XG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwodWkuaXRlbS5kaXNwbGF5KTtcbiAgICAgICAgICAgICAgICAvL3NldCBhY3R1YWwgdmFsdWUgYXQgdGhlIGJvb2tpbmcgb2JqZWN0XG4gICAgICAgICAgICAgICAgZm9ybUhlbHBlci5zZXRCb3VuZHMoJCh0aGlzKS5kYXRhKCdpbnB1dC1maWVsZCcpLCB1aS5pdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5vcHRpb25zLndpZGdldFBvc2l0aW9uLFxuICAgICAgICAgICAgYXBwZW5kVG86IHRoaXMuJGJvb2tpbmdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQnVpbGRcbiAgICAgICAgYXV0b2NvbXBsZXRlLnN0YXJ0KCgpID0+IHtcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZS5yZW5kZXIodGhpcy4kYm9va2luZy5maW5kKCcuanMtYm9va2luZy1hdXRvY29tcGxldGUnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHNlbGVjdCBtZW51cyB3aXRoIGN1c3RvbSBVSSB3aWRnZXRzXG4gICAgICovXG4gICAgc2V0dXBTZWxlY3RNZW51cygpIHtcbiAgICAgICAgJCgnLmpzLXNlbGVjdG1lbnUnKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9wdGlvbnMud2lkZ2V0UG9zaXRpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZCBldmVudHMgcmVsYXRlZCB0byBib29raW5nIGludGVyYWN0aW9uXG4gICAgICovXG4gICAgYm9va2luZ0V2ZW50cygpIHtcbiAgICAgICAgdmFyICRib29raW5nID0gdGhpcy4kYm9va2luZztcbiAgICAgICAgdmFyICR0b2dnbGUgPSB0aGlzLiRib29raW5nLmZpbmQoJy5qcy1jb3BhYWlyLXRvZ2dsZScpO1xuXG4gICAgICAgIC8vIFNob3cgYm90dG9tIHJvdyB3aGVuIGFueSBpbnB1dCBnZXRzIGZvY3VzXG4gICAgICAgICRib29raW5nLm9uKCdmb2N1cy5jb3BhYWlyJywgJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJGJvb2tpbmcuYWRkQ2xhc3MoJ2NvcGFhaXItd2lkZ2V0LW9wZW4nKTtcbiAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ2NvcGFhaXItaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENsaWNraW5nIGFueXdoZXJlIGluIHRoZSBkb2N1bWVudCBoaWRlcyBib3R0b20gcm93XG4gICAgICAgICRib29raW5nLm9uKCdjbGljay5jb3BhYWlyJywgJy5qcy1jb3BhYWlyLWNsb3NlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJGJvb2tpbmcucmVtb3ZlQ2xhc3MoJ2NvcGFhaXItd2lkZ2V0LW9wZW4nKTtcbiAgICAgICAgICAgICR0b2dnbGUuYWRkQ2xhc3MoJ2NvcGFhaXItaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvb2tpbmc7XG4iLCJ2YXIgVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9saWIvVGVtcGxhdGUnKSxcbiAgICBEYXRhTWVudSA9IHJlcXVpcmUoJy4uL2xpYi9EYXRhTWVudScpLFxuICAgIGkxOG4gPSByZXF1aXJlKCcuLi8uLi8uLi9sYW5nL2RhdGVwaWNrZXIuanNvbicpXG47XG5cbmNsYXNzIFNpZ251cCB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkKGVsZW1lbnQpO1xuXG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGxhbmc6ICdlcycsXG4gICAgICAgICAgICB3aWRnZXRQb3NpdGlvbjogeyBteTogJ2xlZnQgYm90dG9tJywgYXQ6ICdsZWZ0IHRvcCcgfSxcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gTG9hZCB0ZW1wbGF0ZVxuICAgICAgICBuZXcgVGVtcGxhdGUoJ3NpZ251cCcsIHtcbiAgICAgICAgICAgICdsYW5nJzogdGhpcy5vcHRpb25zLmxhbmcsXG4gICAgICAgICAgICBjYWxsYmFjazogKGh0bWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWdudXBFdmVudHMoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGZvcm0uZmluZCgnLmpzLXNlbGVjdG1lbnUnKS5lYWNoKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFNZW51ID0gbmV3IERhdGFNZW51KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc6IHRoaXMub3B0aW9ucy5sYW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICQodGhpcykuZGF0YSgnY29udGVudCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwU2VsZWN0TWVudXMoKTtcblxuICAgICAgICAgICAgICAgICQoJy5qcy1zaWdudXAtZGF0ZScpLmRhdGVwaWNrZXIoe1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb250aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlWWVhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnZGQvbW0veXknLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTaG93OiBmdW5jdGlvbihpbnB1dCwgaXNudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc250LmRwRGl2LnBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXk6ICdsZWZ0IGJvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0OiAnbGVmdCB0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZjogaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVnaW9uYWwgPSBpMThuW3RoaXMub3B0aW9ucy5sYW5nXS5yZWdpb25hbDtcbiAgICAgICAgICAgICAgICAkLmRhdGVwaWNrZXIucmVnaW9uYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHNlbGVjdCBtZW51cyB3aXRoIGN1c3RvbSBVSSB3aWRnZXRzXG4gICAgICovXG4gICAgc2V0dXBTZWxlY3RNZW51cygpIHtcbiAgICAgICAgJCgnLmpzLXNlbGVjdG1lbnUnKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9wdGlvbnMud2lkZ2V0UG9zaXRpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2lnbnVwRXZlbnRzKCkge1xuICAgICAgICB2YXIgJGZvcm0gPSB0aGlzLiRmb3JtO1xuICAgICAgICB2YXIgJHRvZ2dsZSA9IHRoaXMuJGZvcm0uZmluZCgnLmpzLWNvcGFhaXItdG9nZ2xlJyk7XG5cbiAgICAgICAgLy8gU2hvdyBib3R0b20gcm93IHdoZW4gYW55IGlucHV0IGdldHMgZm9jdXNcbiAgICAgICAgJGZvcm0ub24oJ2ZvY3VzLmNvcGFhaXInLCAnaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkZm9ybS5hZGRDbGFzcygnY29wYWFpci13aWRnZXQtb3BlbicpO1xuICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnY29wYWFpci1oaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGZvcm0ub24oJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oZS50YXJnZXQpO1xuICAgICAgICB9KVxuXG4gICAgICAgICQoJy5qcy1jb3VudHJ5LXNlbGVjdG9yJykuc2VsZWN0bWVudSh7XG4gICAgICAgICAgICBjaGFuZ2U6IChlLCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb3VudHJ5ID0gdWkuaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNpdHktc2VsZWN0b3InKS5zZWxlY3RtZW51KHtcbiAgICAgICAgICAgIGNoYW5nZTogKGUsIHVpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNpdHkgPSB1aS5pdGVtLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0odGFyZ2V0KSB7XG4gICAgICAgIHZhciAkZm9ybSA9ICQodGFyZ2V0KTtcblxuICAgICAgICB2YXIgZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZU9iamVjdCgpO1xuICAgICAgICBkYXRhLmZ1bGxuYW1lID0gZGF0YS5maXJzdF9uYW1lICsgJyAnICsgZGF0YS5sYXN0X25hbWU7XG4gICAgICAgIGRhdGEuc291cmNlID0gdGhpcy5vcHRpb25zLnNvdXJjZTtcbiAgICAgICAgZGF0YS5sYW5ndWFnZSA9IHRoaXMub3B0aW9ucy5sYW5nLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGRhdGEuY2l0eSA9IHRoaXMub3B0aW9ucy5jaXR5O1xuICAgICAgICBkYXRhLmNvdW50cnkgPSB0aGlzLm9wdGlvbnMuY291bnRyeTtcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lcjtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9mbGlnaHRjb250cm9sLmlvL2FwaS9zaWdudXAvYWRkJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5mYWRlT3V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ251cDtcbiJdfQ==
