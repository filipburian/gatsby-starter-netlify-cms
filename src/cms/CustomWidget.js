import React from 'react';
import { Switch } from 'antd';

class CustomWidget extends React.Component {
  onChange = (event) => {
    console.log(event);
    console.log(this.props);
    document.querySelector('[id^="linkURL-field-"]').disabled = event;
    this.props.onChange(event);
  };

  render() {
    return <Switch id={this.props.forID} defaultChecked={false} checked={this.props.value} onChange={this.onChange} />;
  }
}

export default CustomWidget;
