import $ from 'jquery';
import Template from '../lib/Template';
import DataMenu from '../lib/DataMenu';
import 'store-js';

const ga = window.ga;
const defaults = {
    lang: 'es',
    nativeSelect: false,
    widgetPosition: {
        my: 'left bottom',
        at: 'left top',
    },
    notParticipating: [],
};

class Signup {

    constructor(element, options) {
        this.$form = $(element);
        this.options = $.extend({}, defaults, options);
        var _notParticipating = this.options.notParticipating;
        // Load template
        return new Template('signup', {
            lang: this.options.lang,
            notParticipating: _notParticipating,
            callback: (html) => {
                this.$form.html(html);
                this.signupEvents();
                const lang = this.options.lang;

                this.$form.find('.js-selectmenu').each(function signupDataMenu() {
                    return new DataMenu({
                        lang,
                        contentType: $(this).data('content'),
                        selector: $(this),
                        notParticipating: _notParticipating,
                    })
                    ;
                });

                this.setupSelectMenus();

                $('.js-signup-date').datepicker({
                    changeMonth: true,
                    changeYear: true,
                    format: 'dd/mm/yy',
                    yearRange: '-100:+0',
                    beforeShow(input, isnt) {
                        setTimeout(() => {
                            isnt.dpDiv.position({
                                my: 'left bottom',
                                at: 'left top',
                                of: input,
                            });
                        }, 0);
                    },
                });
            },
        });
    }

    /**
     * Replaces select menus with custom UI widgets
     */
    setupSelectMenus() {
        if (!this.options.nativeSelect) {
            this.$form.find('.js-selectmenu').selectmenu({
                position: this.options.widgetPosition,
            });
        }

        return this;
    }

    signupEvents() {
        const $form = this.$form;
        const $toggle = this.$form.find('.js-copaair-toggle');

        // Show bottom row when any input gets focus
        $form.on('focus.copaair', 'input', () => {
            $form.addClass('copaair-widget-open');
            $toggle.removeClass('copaair-hidden');
        });

        $form.on('submit', (e) => {
            e.preventDefault();
            this.submitForm(e.target);
        });

        $('.js-country-selector').selectmenu({
            change(e, ui) {
                this.options.country = ui.item.value;

                const destinations = store.get('destinations');
                const selected = [];

                for (const d in destinations.val) {
                    if (destinations.val[d].country === this.options.country) {
                        selected.push(destinations.val[d]);
                    }
                }

                $('.js-city-selector').selectmenu('refresh');

                return new DataMenu({
                    lang: this.options.lang,
                    data: selected,
                    selector: $('.js-city-selector'),
                });
            },
        });

        $('.js-city-selector').selectmenu({
            change(e, ui) {
                this.options.city = ui.item.value;
            },
        });
    }

    submitForm(target) {
        const $form = $(target);

        const data = $form.serializeObject();
        data.fullname = `${data.first_name} ${data.last_name}`;
        data.source = this.options.source;
        data.language = this.options.lang.toUpperCase();
        data.city = this.options.city;
        data.country = this.options.country;

        const container = this.options.container;

        $.ajax({
            data,
            type: 'POST',
            url: 'https://flightcontrol.io/api/signup/add',
        }).done(() => {
            container.fadeOut();
            if (typeof(ga) !== 'undefined') {
                ga('send', 'event', 'Subscription Form', 'subscribed', 'User was subscribed');
            }
        });
    }
}

export default Signup;
