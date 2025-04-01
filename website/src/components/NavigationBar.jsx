import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-[40px] p-2 bg-black flex items-center justify-between fixed top-0 z-[1000]">
      <div className="text-white border-none text-[0.75rem] px-2 py-0 outline-none" onClick={() => navigate("/")}>
        Agnes Tjokrosetio
      </div>
    </div>
  );
}

export default NavigationBar;
