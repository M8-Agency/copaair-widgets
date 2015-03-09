// Create the defaults
var $ = require('jquery'),
    Template = require('../lib/Template'),
    FlightControl = require('../lib/FlightControl'),
    Datepicker = require('../lib/Datepicker'),
    Autocomplete = require('../lib/Autocomplete'),
    FormHelper = require('../lib/FormHelper'),
    defaults = {
        lang: 'es',
        origin: 'all',
        destination: 'all',
        templatePath: 'bower_components/copaair-widgets/templates/booking.hbs',
        languagePath: 'bower_components/copaair-widgets/lang/'
    },
    copaApiUrls = {
        allDestinations: 'https://copaapi.nbxapps.com/destinations/',
        countryDestinations: 'https://copaapi.nbxapps.com/destinations/?country='
    }
;


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

        new Template('booking', {
            'lang': this.options.lang,
            callback: (html) => {
                this.$booking.html(html);

                // When finished, build all the widgets
                this.setupSelectMenus();

                // setup datepicker
                var datepicker = new Datepicker();
                datepicker.render();


                var formHelper = new FormHelper({
                    datepicker: datepicker,
                    origin: this.options.origin,
                    destination: this.options.destination
                });

                // Autocomplete widgets
                this.initAutocomplete(formHelper);


                // Bind events
                this.bookingEvents();

                //set form defualt values afected
                //by datepicker

                //datepicker events that modify
                //form values
                // this.datepickerFormEvents(datepicker);

            }
        });
    }

    /**
     * Setup autocomplete destination widgets
     * @see module:Autocomplete
     */
    initAutocomplete(formHelper) {
        // Init class with options
        var autocomplete = new Autocomplete({
            lang: this.options.lang,
            select: function (e, ui) {
                e.preventDefault();
                // set display value to the input
                $(this).val(ui.item.display);
                //set actual value at the booking object
                formHelper.setBounds($(this).data('input-field'), ui.item.value);
            },
            // @todo Make this dynamic
            position: {
                my: 'left bottom',
                at: 'left top'
            }
        });

        // Build
        autocomplete.start(function() {
            $('.js-booking-autocomplete').each(function() {
                autocomplete.render(this);
            });
        });
    }

    /**
     * Replaces select menus with custom UI widgets
     */
    setupSelectMenus() {
        $('.js-selectmenu').selectmenu();
        return this;
    }

    /**
     * Bind events related to booking interaction
     */
    bookingEvents() {
        var $form = $('.copaair-booking');
        var $toggle = $('.js-copaair-toggle');

        // Show bottom row when any input gets focus
        this.$booking.on('focus.copaair', 'input', function(e) {
            $toggle.removeClass('copaair-hidden');
        });

        // Clicking anywhere in the document hides bottom row
        $(document).on('click.copaair', function(e) {
            $toggle.addClass('copaair-hidden');
        });

        // Stop propagation of clicks inside the form to prevent
        // triggering top event.
        this.$booking.on('click.copaair', function(e) {
            e.stopPropagation();
        });

    }
}

module.exports = Booking;
