import $ from 'jquery';
import FlightControl from './FlightControl';

/**
 * Autocomplete widget with list of Copa's destinations
 * for better usability than a native select menu.
 * @class
 */
class Autocomplete
{
  /**
   * Constructor
   * @param  {Object} options Custom options for this widget instance.
   */
  constructor(options) {
    const defaults = {
      delay: 0,
      lang: 'es',
      minLength: 0,
      originSelected:false,
      destinationSelected: false,
    };

    this.options = $.extend({}, defaults, options);
  }

  /**
   * Get destinations from Flight Control API
   * @param  {Function} cb Callback when API call finishes
   *                       and destinations are fetched
   * @return {void}
   */
  start(cb) {
    const flightControl = new FlightControl({ lang: this.options.lang });

    flightControl.fetch('destinations', (destinations) => {
      // Format raw destinations to autocomplete structure
      this.options.source = this.format(destinations.list);

      if (typeof cb === 'function') {
        cb();
      }
    });
  }

  /**
   * Render autocomplete widget
   * @param  {Object} element DOM element to attach widget to
   */
  render(element) {
    const $this = $(element).hide();
    const sourceClasses = $this.attr('class');
    const sourceValue = $this.val();
    const sourcePlaceholder = $this.attr('placeholder');
    const dataInput = $this.data('input-field');

    const $input = $('<input />')
      .val(sourceValue)
      .attr('type', 'text')
      .attr('placeholder', sourcePlaceholder)
      .attr('data-input-field', dataInput)
      .attr('data-ga-category', 'Book Flight')
      .attr('data-ga-label', sourcePlaceholder)
    ;

    // Add autocomplete functionality
    $input.autocomplete(this.options);

    // Open list on input focus
    $input.on('focus', () => {
      if ($input.val().length === 0) {
        $input.autocomplete('search');
      }
    });

    // Add styling
    $input
      .addClass(sourceClasses)
      .addClass('ui-widget  ui-widget-content  ui-state-default');

    // Insert into DOM
    $input.insertAfter($this);

    // Overwrite autocomplete item rendering with custom markup
    $input.autocomplete('instance')._renderItem = function autoCompleteRenderItem(ul, item) {
      return $('<li>')
        .append(item.label)
        .appendTo(ul);
    };

    // Custom filtering function
    $.ui.autocomplete.filter = function autoCompleteFilter(array, term) {
      const matcher = new RegExp(`\\b${$.ui.autocomplete.escapeRegex(term)}`, 'i');
      return $.grep(array, (value) => matcher.test(value.label || value.value || value));
    };

    if (this.options.destinationSelected && dataInput === 'destination') {
      $input.autocomplete('search', this.options.destinationSelected);
      const $selected = $input.autocomplete('widget');
      $($selected[0].children[0]).click();
    }

    if (this.options.originSelected && dataInput === 'origin') {
      $input.autocomplete('search', this.options.originSelected);
      const $selected = $input.autocomplete('widget');
      $($selected[0].children[0]).click();
    }

    return this;
  }

  /**
   * Formats destinations into the needed structure to be displayed
   * on the autocomplete menu widget.
   * @param  {Array} destinations Raw data returned from Flight Control
   * @return {Array}              Formatted destinations
   */
  format(destinations) {
    const result = [];

    $.each(destinations, (i, dest) => {
      const tempLabel = `<b>${dest.name[this.options.lang]}, ${dest.country}</b>
        <span class="code"> | ${dest.id}</span>`;
      const tempValue = dest.id;
      const textValue = `${dest.name[this.options.lang]}, ${dest.id}`;

      result.push({
        label: tempLabel,
        value: tempValue,
        display: textValue,
      });
    });

    return result;
  }
}

/**
 * Export
 * @exports Autocomplete
 */
export default Autocomplete;
