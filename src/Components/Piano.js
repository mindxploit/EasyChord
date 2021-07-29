import React, { useContext } from "react";
import { ModeContext, ScaleContext } from "./Context";

const Piano = () => {
  const [scale] = useContext(ScaleContext);
  const [mode] = useContext(ModeContext);

  return (
    <img
      style={{ width: 650, display: "block", maxHeight: 216, maxWidth: "85vw" }}
      src={require(`../Components/Scales/${mode}_scales/${scale}.png`)}
      alt="scale"
    />
  );
};

export default Piano;
