import React from "react";
import Selector from "./Selector";
import Piano from "./Piano";
import Description from "./Description";
import { Fade } from "react-reveal"
import { Box } from "@material-ui/core";

const Main = () => {
  return (
    <div style={{ width: '90%', minWidth: "90%", margin: "0 auto", padding: "3em 0" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: "center", lg: "flex-start" }}
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <Box mr={{ lg: "2em" }} mb={{ xs: "2em", lg: "0" }}>
          <Piano />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent={{ xs: 'center', md: "space-around" }} width="100%">
          <Selector />
          <Fade>
            <Description />
          </Fade>
        </Box>
      </Box>
    </div>
  );
};

export default Main;
