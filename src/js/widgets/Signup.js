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
};

class Signup {

  constructor(element, options) {
    this.$form = $(element);
    this.options = $.extend({}, defaults, options);

    // Load template
    return new Template('signup', {
      lang: this.options.lang,
      callback: (html) => {
        this.$form.html(html);
        this.signupEvents();
        const lang = this.options.lang;

        this.$form.find('.js-selectmenu').each(function signupDataMenu() {
          return new DataMenu({
            lang,
            contentType: $(this).data('content'),
            selector: $(this),
          });
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
    if (! this.options.nativeSelect) {
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

    $('.js-click-event').on('click', function(e) {
      let action = 'click';
      let category = $(this).data('ga-category');
      let label = $(this).data('ga-label');
      ga('send', 'event', { eventCategory: category, eventAction: action, eventLabel: label, transport: 'beacon' });
    });

    $form.on('submit', (e) => {
      e.preventDefault();

      let err = false;
      let messageErr = 'Fields marked with (*) are required';

      if ($('.copaair-form-name').val() == '') {
        err = true;
        messageErr;
      }

      if ($('.copaair-form-lastname').val() == '') {
        err = true;
        messageErr;
      }

      if ($('copaair-form-email').val() == '') {
        err = true;
        messageErr;
      }

      if ($('.js-country-selector').val() == '') {
        err = true;
        messageErr;
      }

      if ($('.js-city-selector').val() == '') {
        err = true;
        messageErr;
      }

      if ($('.js-signup-date').val() == '') {
        err = true;
        messageErr;
      }

      if (err) {
        alert(messageErr);
        return false;
      } else {
        this.submitForm(e.target);
        $('.copaair-signup')[0].reset();
      }
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

        new DataMenu({
          lang: this.options.lang,
          data: selected,
          selector: $('.js-city-selector'),
        });
        
        $('.js-city-selector').selectmenu('refresh');
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

    $.ajax({
      data,
      type: 'POST',
      url: 'https://flightcontrol.io/api/signup/add',
    }).done(() => {
      $('.copaair-widget-hidden').fadeOut();
      $('.copaair-signup-message').delay(400).fadeIn();

      let lang = {
        EN: 'You have successfully subscribed to our mailing list',
        PT: 'Você foi inscrito com sucesso em nossa lista de endereços',
        ES: 'Ya estás registrado correctamente en nuestra lista de correo'
      }

      $('.copaair-signup-message').text(lang[data.language] || lang.EN);

      ga('send', 'event', { eventCategory: 'Subscription Form', eventAction: 'success', eventLabel: 'User was subscribed', transport: 'beacon' });
    });
  }
}

export default Signup;
