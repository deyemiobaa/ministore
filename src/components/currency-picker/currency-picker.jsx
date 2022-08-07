import React from 'react';

class CurrencyPicker extends React.PureComponent {
  render() {
    return (
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    );
  }
}

export default CurrencyPicker;
