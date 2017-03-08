import $ from 'jquery';
import i18n from '../../../lang/datepicker.json';

const defaults = {
  departureSelector: '.copaair-booking-datepicker-departure',
  returnSelector: '.copaair-booking-datepicker-return',
  datepickerSelector: '.js-copaair-booking-datepicker-container',
  showButtonPanel: true,
  numberOfMonths: 2,
  selectMultiple:true,
  numSelectable:2,
  dateRules: {
    today: new Date(),
    weekLater: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  },
  lang: 'es',
  position: 'top',
};

/**
 * Datepicker module
 */
class Datepicker {

  constructor(options) {
    this.current = null;
    this.options = $.extend({}, defaults, options);
    this.defaults = defaults;
    this.options.departureSelector = this.options.booking.find('.copaair-booking-datepicker-departure');
    this.options.returnSelector = this.options.booking.find('.copaair-booking-datepicker-return');
    this.options.datepickerSelector = this.options.booking.find('.js-copaair-booking-datepicker-container');
  }

  /**
   * Render date picker inside the booking form
   * setups the defaults dates and language
   */
  render() {
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

  init() {

    //
    const $mainDatePicker = this.options.datepickerSelector;
    $mainDatePicker.datepicker(this.options);

    $mainDatePicker.datepicker('option', 'minDate', 0);

    $mainDatePicker.hide();
  }

  setSize(mq) {
    const $mainDatePicker = $('.js-copaair-booking-datepicker-container');

    if (mq.matches) {
      $mainDatePicker.datepicker('option', 'numberOfMonths', 1);
    } else {
      $mainDatePicker.datepicker('option', 'numberOfMonths', 2);
    }
  }

  setPosition() {


    const $mainDatePicker = $(this.options.datepickerSelector);
    const $departureField = $(this.options.departureSelector);
    const widget = $mainDatePicker.datepicker('widget');
    let position = 0;

    if (this.mqMobile.matches) {
      position = $('.copaair-booking-datepicker-position').height()*2 + 10;
    } else {
      position = $('.copaair-booking-datepicker-position').height() + 15;
    }


    const mapPosition = {
        top: 'bottom',
        bottom: 'top',
    };

    $mainDatePicker.css({
        [mapPosition[this.options.position]]: position
    });
  }

  /**
   *
   *
   *
   */
  setBeforeShowDaySettings() {

    const $mainDatePicker = this.options.datepickerSelector;
    const $departureField = this.options.departureSelector;
    const $returnField = this.options.returnSelector;


    // This will render the date range on the datepicker calendar
    $mainDatePicker.datepicker('option', 'beforeShowDay', (date) => {
      const date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $departureField.val());
      const date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $returnField.val());
      return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
    });


    // this.renderCloseButton();
    // this.renderResetButton();
  }

  setDateRanges() {

    const $mainDatePicker = $(this.options.datepickerSelector);
    const $departureField = $(this.options.departureSelector);
    const $returnField = $(this.options.returnSelector);
    const _this = this;


    $mainDatePicker.datepicker('option', 'onSelect', function select(dateText, inst) {

      $(_this.current).val(dateText);

      const date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $departureField.val());
      const date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $returnField.val());

      if ($returnField[0] !== _this.current && $returnField.val() === '') {
        $returnField.click().focus();
      } else if ($departureField[0] !== _this.current && $departureField.val() === ''){
        $departureField.click().focus();
      } else {
        $mainDatePicker.hide();
      }

      if (date1) {
        _this.setDates(date1, true);
      }

      if (date2) {
        _this.setDates(date2, false);

        if (_this.mqMobile.matches) {
          $('html, body').animate({
            scrollTop: $returnField.offset().top
          }, 1000);
        }
      }

      if (date2 && date2 < date1){
        $departureField.val(dateText);
        $returnField.val('');
      }


      _this.renderCloseButton();
      _this.renderResetButton();

    });

  }

  setDates(date, bound) {
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

  events() {
    const $mainDatePicker = $(this.options.datepickerSelector);
    const $departureField = $(this.options.departureSelector);
    const $returnField = $(this.options.returnSelector);
    const date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $departureField.val());

    $departureField.on('focus', (e) => {
      this.current = e.target;
      $mainDatePicker.show();
      if (this.mqMobile.matches) {
        $('html, body').animate({
          scrollTop: $mainDatePicker.offset().top
        }, 1000);
      }
    });


    $returnField.on('focus', (e) => {
      this.current = e.target;
      $mainDatePicker.show();

      if (this.mqMobile.matches) {
        $('html, body').animate({
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

  renderResetButton() {
    const $mainDatePicker = $(this.options.datepickerSelector);
    const $departureField = $(this.options.departureSelector);
    const $returnField = $(this.options.returnSelector);

    const resetButtonCopy = i18n[this.options.lang].buttons.reset;

    const _this = this;
    setTimeout(function() {
      var buttonPane = $mainDatePicker.find( ".ui-datepicker-buttonpane");
      $('<button>', {
        type: 'button',
        text: resetButtonCopy,
        click: function ()  {
          $departureField.val('');
          $returnField.val('');
          _this.reset($mainDatePicker);
        }
      }).appendTo( buttonPane ).addClass("ui-datepicker-reset ui-state-default ui-priority-secondary ui-corner-all");
    }, 1);
  }

  renderCloseButton() {
    const $mainDatePicker = $(this.options.datepickerSelector);
    const closeButtonCopy = i18n[this.options.lang].buttons.close;

    setTimeout(function() {
      var buttonPane = $mainDatePicker.find( ".ui-datepicker-buttonpane");
      $('<button>', {
        type: 'button',
        text: closeButtonCopy,
        click: function ()  {
          $mainDatePicker.hide();
        }
      }).appendTo( buttonPane ).addClass("ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all");
    }, 1);
  }

  reset(datepickerInst) {
    datepickerInst.datepicker('setDate', null);
  }

  /**
   * Configure datepicker depending on the
   * localization
   */
  setLocale() {
    const regional = i18n[this.options.lang].regional;
    $.datepicker.setDefaults(regional);
  }

}

export default Datepicker;
