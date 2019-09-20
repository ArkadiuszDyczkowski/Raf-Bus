import * as React from "react";

import DatePicker from "react-datepicker";

import Form from "react-bootstrap/Form";

import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

interface Props {
  changeHandlerParrent: Function;
  label: string;
  id: string;
}

interface State {
  value: string;
}

export class CustomDatePicker extends React.Component<Props, State> {
  dateFormat: string = "YYYY/MM/DD";

  constructor(props: Props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.state = { value: "" };
  }

  changeHandler(date: Date) {
    if (date != null) {
      this.setState({
        value: this.formatDate(date)
      });
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var dayName = days[date.getDay()];
      this.props.changeHandlerParrent(dayName);
    }
  }

  render() {
    return (
      <div className="DataPickerRow" id={this.props.id}>
        <Form.Label className="Tittle">{this.props.label}</Form.Label>
        <DatePicker className="Value" value={this.state.value} onChange={this.changeHandler} dateFormat={this.dateFormat} />
      </div>
    );
  }

  formatDate(date: Date): string {
    var year: string = date.getFullYear().toString();
    var month: string = date.getMonth().toString();
    var day: string = date.getDay().toString();
    return year + "/" + month + "/" + day + " ";
  }

  changeValue(_value: any, formattedValue: any) {
    this.setState({
      value: this.formatDate(new Date(formattedValue))
    });
  }
}
