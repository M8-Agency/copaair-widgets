import $ from 'jquery';
import 'store-js';

const defaults = {
  lang: 'es',
  api: {
    destinations: 'https://flightcontrol.co/api/routes/destinations',
    countries: 'https://flightcontrol.co/api/routes/countries',
    regions: 'https://flightcontrol.co/api/routes/regions',
  },
  storageExpiration: 86400000,
  storage: true,
};

/**
 * Extension to the storage class
 * to setup the expiration value
 * @type {Object}
 */
const storeWidthExpiration = {
  set(key, val, exp) {
    store.set(key, {
      val,
      exp,
      time: new Date().getTime(),
    });
  },
  get(key) {
    const info = store.get(key);

    if (!info) {
      return null;
    }

    if (new Date().getTime() - info.time > info.exp) {
      return null;
    }

    return info.val;
  },
};

/**
 * Module FlightControl
 */
class FlightControl {

  constructor(options) {
    this.options = $.extend({}, defaults, options);
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
  fetch(resourceName, cb) {
    const resourceValue = {};

    if (this.options.storage && storeWidthExpiration.get(resourceName)
      && storeWidthExpiration.get(`${resourceName}.count`)) {
      resourceValue.list = storeWidthExpiration.get(resourceName);
      resourceValue.count = storeWidthExpiration.get(`${resourceName}.count`);

      return cb(resourceValue);
    }

    if (typeof(IE9Data) !== 'undefined') {
      const data = IE9Data[resourceName];
      this.sortNames(data);

      if (this.options.storage) {
        storeWidthExpiration.set(resourceName, data, this.options.storageExpiration);
        storeWidthExpiration.set(`${resourceName}.count`, data.length,
          this.options.storageExpiration);
      }
      resourceValue.list = data;
      resourceValue.count = data.length;

      cb(resourceValue);
    } else {
      $.getJSON(this.options.api[resourceName], (data) => {
        this.sortNames(data);

        if (this.options.storage) {
          storeWidthExpiration.set(resourceName, data, this.options.storageExpiration);
          storeWidthExpiration.set(`${resourceName}.count`, data.length,
            this.options.storageExpiration);
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
  sortNames(data) {
    data.sort((a, b) => {
      if (a.name[this.options.lang] > b.name[this.options.lang]) return 1;
      if (a.name[this.options.lang] < b.name[this.options.lang]) return -1;

      return 0;
    });
  }
}

export default FlightControl;
