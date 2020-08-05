import { RadialChart } from "react-vis";
import theme from "../../styles/theme";

const Pie = ({ data }) => {
  return (
    <RadialChart
      height={400}
      width={800}
      data={data}
      colorRange={[
        theme.colors.brandOrange,
        theme.colors.brandYellow,
        theme.colors.brandDarkBlue,
      ]}
      showLabels
    />
  );
};

export default Pie;
