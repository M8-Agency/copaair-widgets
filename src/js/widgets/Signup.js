require('store-js');
var Template = require('../lib/Template'),
    DataMenu = require('../lib/DataMenu'),
    i18n = require('../../../lang/datepicker.json')
;

var defaults = {
    lang: 'es',
    widgetPosition: { my: 'left bottom', at: 'left top' },

};

class Signup {

    constructor(element, options) {
        this.$form = $(element);

        this.options = $.extend({}, defaults, options);

        // Load template
        new Template('signup', {
            'lang': this.options.lang,
            callback: (html) => {
                this.$form.html(html);
                this.signupEvents();
                var lang = this.options.lang;

                this.$form.find('.js-selectmenu').each( function (){

                    var dataMenu = new DataMenu({
                        lang: lang,
                        contentType: $(this).data('content'),
                        selector: $(this)
                    });

                });

                this.setupSelectMenus();

                $('.js-signup-date').datepicker({
                    changeMonth: true,
                    changeYear: true,
                    format: 'dd/mm/yy',
                    beforeShow: function(input, isnt) {
                        setTimeout(function() {
                            isnt.dpDiv.position({
                                my: 'left bottom',
                                at: 'left top',
                                of: input
                            });
                        }, 0);
                    }
                });

                var regional = i18n[this.options.lang].regional;
                $.datepicker.regional;
            }
        });
    }

    /**
     * Replaces select menus with custom UI widgets
     */
    setupSelectMenus() {
        $('.js-selectmenu').selectmenu({
            position: this.options.widgetPosition
        });

        return this;
    }

    signupEvents() {
        var $form = this.$form;
        var $toggle = this.$form.find('.js-copaair-toggle');

        // Show bottom row when any input gets focus
        $form.on('focus.copaair', 'input', function(e) {
            $form.addClass('copaair-widget-open');
            $toggle.removeClass('copaair-hidden');
        });

        $form.on('submit', (e) => {
            e.preventDefault();
            this.submitForm(e.target);
        })

        $('.js-country-selector').selectmenu({
            change: (e, ui) => {
                this.options.country = ui.item.value;

                var destinations = store.get('destinations');
                var selected = [];

                for (var d in destinations.val)
                {
                    if (destinations.val[d].country == this.options.country) {
                        selected.push(destinations.val[d]);
                    }
                }
                var dataMenu = new DataMenu({
                    lang: this.options.lang,
                    data: selected,
                    selector: $('.js-city-selector')
                });
                $('.js-city-selector').selectmenu("refresh");
            }
        });

        $('.js-city-selector').selectmenu({
            change: (e, ui) => {
                this.options.city = ui.item.value;
            }
        });

    }

    submitForm(target) {
        var $form = $(target);

        var data = $form.serializeObject();
        data.fullname = data.first_name + ' ' + data.last_name;
        data.source = this.options.source;
        data.language = this.options.lang.toUpperCase();
        data.city = this.options.city;
        data.country = this.options.country;

        var container = this.options.container;

        $.ajax({
            type: 'POST',
            url: 'https://flightcontrol.io/api/signup/add',
            data: data
        }).done(function(res) {
            container.fadeOut();
            if(typeof(ga) !== 'undefined') {
                ga("send", "event", "Subscription Form", "subscribed", "User was subscribed");
            }
        });
    }

}

module.exports = Signup;
