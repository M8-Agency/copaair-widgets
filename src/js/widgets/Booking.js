/**
 * Modules
 */
import $ from 'jquery';
import Template from '../lib/Template';
import Datepicker from '../lib/Datepicker';
import Autocomplete from '../lib/Autocomplete';
import FormHelper from '../lib/FormHelper';

/**
 * Options
 * @type {Object}
 */
const defaults = {
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
    widgetPosition: {my: 'left bottom', at: 'left top'},
    datepickerPosition: 'top',
    templatePath: '/bower_components/copaair-widgets/templates',
    languagePath: '/bower_components/copaair-widgets/lang/',
    originSelected: false,
    destinationSelected: false,
    isMobile: false,
    notParticipating: [],
    onload() {
    },
};


class Booking {

    /**
     * Widget constructor
     * @param {Object} selector element DOM object
     * @param {Object} options  Options passed on plugin instance
     */

    constructor(element, options) {
        this.$booking = $(element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        return new Template('booking', {
            lang: this.options.lang,
            origin: this.options.origin,
            destination: this.options.destination,
            destinationName: this.options.destinationName, // temporary fix for static destination
            originName: this.options.originName, // temporary fix for static destination
            src: this.options.templatePath,
            notParticipating: this.options.notParticipating,
            callback: (html) => {
                this.$booking.html(html);

                // When finished, build all the widgets
                this.setupSelectMenus();


                const formHelper = new FormHelper({
                    datepicker,
                    origin: this.options.origin,
                    destination: this.options.destination,
                    booking: this.$booking,
                    d1: this.options.d1,
                    lang: this.options.lang,
                    analytics: this.options.analytics,
                    bookingPage: this.options.bookingPage,
                    notParticipating: this.options.notParticipating,
                });

                // setup datepicker
                const datepicker = new Datepicker({
                    lang: this.options.lang,
                    position: this.options.datepickerPosition,
                    booking: this.$booking,
                    formHelper: formHelper,
                    isMobile: this.options.isMobile,
                });


                datepicker.render();


                if (this.options.coupon) {
                    formHelper.setCoupon(this.options.coupon);
                }

                // Autocomplete widgets
                this.initAutocomplete(formHelper);

                // Bind events
                this.bookingEvents();

                this.options.onload();
            },
        });
    }

    /**
     * Setup autocomplete destination widgets
     * @see module:Autocomplete
     */
    initAutocomplete(formHelper) {
        // Init class with options
        const autocomplete = new Autocomplete({
            lang: this.options.lang,
            originSelected: this.options.originSelected,
            destinationSelected: this.options.destinationSelected,
            notParticipating: this.options.notParticipating,
            select(e, ui) {
                e.preventDefault();
                e.stopPropagation();

                // set display value to the input
                $(this).val(ui.item.display);
                // set actual value at the booking object
                formHelper.setBounds($(this).data('input-field'), ui.item.value);
            },
            position: this.options.widgetPosition,
            appendTo: this.$booking,
        });

        // Build
        autocomplete.start(() => {
            this.$booking.find('.js-booking-autocomplete').each(function bookingAutocomplete() {
                autocomplete.render(this);
            });
        });
    }

    /**
     * Replaces select menus with custom UI widgets
     */
    setupSelectMenus() {
        if (!this.options.nativeSelect) {
            this.$booking.find('.js-selectmenu').selectmenu({
                position: this.options.widgetPosition,
            });
        }

        return this;
    }

    /**
     * Bind events related to booking interaction
     */
    bookingEvents() {
        const $booking = this.$booking;
        const $toggle = this.$booking.find('.js-copaair-toggle');

        if (this.options.collapsable) {
            // Show bottom row when any input gets focus
            $booking.on('focus.copaair', 'input', () => {
                $booking.addClass('copaair-widget-open');
                $toggle.removeClass('copaair-hidden');
            });

            // Clicking anywhere in the document hides bottom row
            $booking.on('click.copaair', '.js-copaair-close', (e) => {
                e.preventDefault();
                $booking.removeClass('copaair-widget-open');
                $toggle.addClass('copaair-hidden');
            });
        } else {
            $toggle.removeClass('copaair-hidden');
        }
    }
}

export default Booking;
