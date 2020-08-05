import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  LabelSeries,
} from "react-vis";
import theme from "../../styles/theme";

const Bar = ({ data }) => {
  return (
    <XYPlot
      xType="ordinal"
      width={800}
      height={400}
      yDomain={[0, 400]}
      colorType="category"
      colorRange={[
        theme.colors.brandOrange,
        theme.colors.brandYellow,
        theme.colors.brandBlue,
        theme.colors.brandPink,
        theme.colors.brandDarkBlue,
      ]}
    >
      <XAxis />
      <YAxis />
      <VerticalBarSeries data={data} />
      <LabelSeries
        data={data.map((obj) => {
          return { ...obj, label: obj.y.toString() };
        })}
        labelAnchorX="middle"
        labelAnchorY="text-after-edge"
      />
    </XYPlot>
  );
};

export default Bar;
