import { RouteContext } from "./RouteContext";
import { useContext } from "react";
import PrimaryButton from "./PrimaryButton";

const EndSection = () => {
  const { stage, setStage } = useContext(RouteContext);
  return (
    <div>
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
        Thanks for your feedback!
      </div>
      <div style={{ margin: "25px 0" }}>Your data helps to improve Cabbage</div>
      <PrimaryButton
        text={"Back to Search"}
        fn={() => {
          setStage(1);
        }}
      />
    </div>
  );
};

export default EndSection;
