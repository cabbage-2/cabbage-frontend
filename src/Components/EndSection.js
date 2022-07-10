import { RouteContext } from "./RouteContext";
import { useContext } from "react";
import PrimaryButton from "./PrimaryButton";

const EndSection = () => {
  const { stage, setStage } = useContext(RouteContext);
  return (
    <div>
      hay
      <PrimaryButton text={"Back to Search"} fn={setStage(1)} />
    </div>
  );
};

export default EndSection;
