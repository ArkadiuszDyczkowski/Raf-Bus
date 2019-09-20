import * as React from "react";
import "./table.css";

export interface Props {
  data: any[][];
  sizePercentColumn: string;
}

export interface State {
  columnsWidth: any[];
}

export class Table extends React.Component<Props, State> {
  totalPercent: number = 0;
  componentWillMount() {
    const columnsPercent: number[] = [];
    this.props.sizePercentColumn.split("[^w*]").forEach(stringColumnPercent => {
      columnsPercent.push(Number(stringColumnPercent));
    });

    this.totalPercent = columnsPercent.reduce((a, b) => a + b, 0);

    this.setState({ columnsWidth: this.calculateWidthColumns(columnsPercent) });
  }

  private calculateWidthColumns(columnsPercent: number[]) {
    var columnWidth: any[] = [];
    columnsPercent.forEach(columnPercent => {
      const style = {
        width: this.calculateRealPercent(columnPercent) + "px"
      };
      columnWidth.push(style);
    });
    return columnWidth;
  }

  render() {
    return (
      <div className="TableParrent">
        <table className="Table">{this.prepareTable()}</table>
      </div>
    );
  }

  calculateRealPercent(partPercent: number) {
    return this.totalPercent / partPercent;
  }

  prepareTable(): JSX.Element[] {
    var lines: JSX.Element[] = [];
    var cells: JSX.Element[] = [];
    this.props.data.forEach(line => {
      line.forEach((element, i) => {
        cells.push(<th style={this.state.columnsWidth[i]} className="Text">{element}</th>);
      });      
      lines.push(<tr>{cells}</tr>);
      cells = [];
    });
    return lines;
  }
}
