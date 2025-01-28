import { useNavigate } from "react-router-dom";
import { NavBar, NavOptions } from "./Styles";

function NavigationBar() {
  const navigate = useNavigate();
  return (
    <NavBar>
      <NavOptions onClick={() => navigate("/")}>Agnes Tjokrosetio</NavOptions>
    </NavBar>
  );
}

export default NavigationBar;
