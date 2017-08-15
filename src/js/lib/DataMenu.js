import $ from 'jquery';
import FlightControl from './FlightControl';

const defaults = {
    lang: 'es',
    data: null,
    contentType: 'countries',
    notParticipating: [],
    callback() {
    },
};


class DataMenu {
    /**
     * Constructor
     * @param  {Object} options Custom options for this widget instance.
     */
    constructor(options) {
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        this.setup();
    }

    setup(cb) {
        if (!this.options.data) {
            const flightControl = new FlightControl({lang: this.options.lang});
            // console.log('dataMenu', this.options.contentType);
            flightControl.fetch(this.options.contentType, this.options.notParticipating, (data) => {
                // Format raw destinations to autocomplete structure
                this.options.source = this.format(data.list);
                this.render();
                if (typeof cb === 'function') {
                    cb();
                }
            });
        } else {
            this.options.source = this.format(this.options.data);
            this.render(true);
        }
    }

    render(newInput) {
        if (newInput) {
            $(this.options.selector).find('option').slice(1).remove();
        }
        $.each(this.options.source, (i, item) => {
            $(this.options.selector).append(item.display);
        });
    }

    /**
     * Formats data into the needed structure to be displayed
     * on the autocomplete menu widget.
     * @param  {Array} destinations Raw data returned from Flight Control
     * @return {Array}              Formatted destinations
     */
    format(list) {
        const result = [];

        $.each(list, (i, item) => {
            const option = `<option value="${item.id}">${item.name[this.options.lang]}</option>`;
            result.push({
                display: option,
            });
        });

        return result;
    }
}

export default DataMenu;
