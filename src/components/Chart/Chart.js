import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const valuesArray = props.data.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...valuesArray);

  return (
    <div className="chart">
      {props.data.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          label={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
}

export default Chart;
