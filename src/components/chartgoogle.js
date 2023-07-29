import { Chart } from "react-google-charts";

//export const Navbar = props => (
const chartgoogle = ({ s, o }) => {
    
        return (
            <Chart
         chartType="PieChart"
         data={s}
         options={o}
         width={"450px"}
         legendToggle
         style={{"background":"black","fill":"black",}}
      />
        );
    
}

export default chartgoogle;
