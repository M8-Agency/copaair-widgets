import $ from 'jquery';

const ga = window.ga;
const defaults = {
  lang: 'es',
  origin: 'all',
  destination: 'all',
  d1: 'nbx_atpwebsite_be',
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
    lang: 'es',
  },
  formUrl: 'https://bookings.copaair.com/CMGS/AirLowFareSearchExternal.do?',
};

const _urlUtm = (name) => {
  let results, rgx;

  rgx = new RegExp('[\?&]' + name + '=([^&#]*)');
  results = rgx.exec(window.location.href);

  if (results == null) {
    return 0;
  } else {
    return results[1] || 0;
  }
}

const _applyUtm = (keys) => {
    let x, key, val, len = keys.length;

    for (x = 0; x < len; x += 1) {
        key = keys[x];
        val = _urlUtm(key);

        if (val !== '') {
            defaults.inputs[key] = val;
        } else {
            delete defaults.inputs[key];
        }
    }
}

_applyUtm(['utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content']);

/**
 * FormHelper module
 */
class FormHelper {

  constructor(options) {
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;

    // set defautls values
    this.setDefaultBounds();

    this.options.inputs.lang = this.options.lang;

    // load events related with form helper and other modules
    this.events();
  }

  process() {
    const url = this.options.formUrl;
    const validation = this.validationError();
    const coupon = this.options.booking.data('coupon');

    if (coupon && !this.options.inputs.coupon) {
      this.setCoupon(coupon);
    }

    let httpQuery = $.param(this.options.inputs);
    httpQuery += `&${$.param({ d1: this._defaults.d1 })}`;

    if (validation.error) {
      // handle validation error messages
      if (this.options.analytics && typeof(ga) !== 'undefined') {
        ga('send', 'event', this.options.bookingPage, 'error', 'User left required fields blank');
      }
    } else {
      // no errors, forward form values to copa
      // console.log(httpQuery);
      if (this.options.analytics && typeof(ga) !== 'undefined') {
        ga('send', 'event', this.options.bookingPage, 'click', 'Search flights');

        ga(function(tracker) {
          let linkerParam = tracker.get('linkerParam');
          let finalUrl = `${url}${linkerParam}&${httpQuery}`;
          let searchWindow = window.open(finalUrl, '_blank');
          searchWindow.focus();
        });

      } else {
        const searchWindow = window.open(url + httpQuery, '_blank');
        searchWindow.focus();
      }
    }
  }

  setDefaultBounds() {
    if (this.options.origin !== 'all') {
      this.setBounds('origin', this.options.origin);
    }

    if (this.options.destination !== 'all') {
      this.setBounds('destination', this.options.destination);
    }
  }

  setBounds(bound, location) {
    if (bound === 'origin') {
      this.options.inputs['outboundOption.originLocationCode'] = location;
      this.options.inputs['inboundOption.destinationLocationCode'] = location;
    }

    if (bound === 'destination') {
      this.options.inputs['outboundOption.destinationLocationCode'] = location;
      this.options.inputs['inboundOption.originLocationCode'] = location;
    }
  }

  setCabinClass(target) {
    this.options.inputs.cabinClass = $(target).val();
  }

  setPassengersAmount(type, value) {
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

  setCoupon(coupon) {
    this.options.inputs.coupon = coupon;
  }

  setD1() {
    this.options.inputs.d1 = this.options.d1;
  }

  validationError() {
    const errors = {
      error: false,
      bag: [],
    };
    console.log(this.options.inputs);
    for (const input in this.options.inputs) {
      if (!this.options.inputs[input] && this.options.inputs[input] !== 0) {
        const currentError = {};
        currentError.field = input;
        currentError.message = `The input ${input} must have some value`;
        errors.bag.push(currentError);
        errors.error = true;
      }
    }

    return errors;
  }

  events() {

    this.options.booking.find('.js-cabin-class').on('click', (e) => {
      this.setCabinClass(e.target);
    });

    this.options.booking.find('.js-adults-amount').selectmenu({
      change: (e, ui) => {
        this.setPassengersAmount('adult', ui.item.value);
      },
    });

    this.options.booking.find('.js-children-amount').selectmenu({
      change: (e, ui) => {
        this.setPassengersAmount('child', ui.item.value);
      },
    });

    this.options.booking.find('.js-infants-amount').selectmenu({
      change: (e, ui) => {
        this.setPassengersAmount('infant', ui.item.value);
      },
    });

    this.options.booking.find('.js-coupon-code-input').on('change', (e) => {
      this.setCoupon(e.target.value);
    });

    this.options.booking.find('.js-submit').on('click', (e) => {
      e.preventDefault();
      this.process();
    });
  }
}

export default FormHelper;
