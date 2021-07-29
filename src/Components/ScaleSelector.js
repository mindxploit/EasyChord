import React, { useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { ScaleContext } from "./Context";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
    width: 70,
  },
}));

const ScaleSelector = () => {
  const classes = useStyles();

  const [scale, setScale] = useContext(ScaleContext);

  const handleChange = (e) => {
    setScale(e.target.value);
  };

  return (
    <div>
      <FormControl className={classes.margin}>
        <Select
          labelId="key-select"
          id="custom-key-select"
          value={scale}
          onChange={handleChange}
          input={<BootstrapInput />}
          MenuProps={{
            getContentAnchorEl: () => null,
          }}
        >
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="Ab">Ab</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="Bb">Bb</MenuItem>
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="C_sharp">C#</MenuItem>
          <MenuItem value="D">D</MenuItem>
          <MenuItem value="E">E</MenuItem>
          <MenuItem value="Eb">Eb</MenuItem>
          <MenuItem value="F">F</MenuItem>
          <MenuItem value="F_sharp">F#</MenuItem>
          <MenuItem value="G">G</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ScaleSelector;
