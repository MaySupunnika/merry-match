import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

function valuetext(value) {
  return `${value}°C`;
}

const purple500 = "#A62D82";
const gray500 = "#C8CCDB";

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: purple500,
  "& .MuiSlider-thumb": {
    backgroundColor: purple500,
  },
  "& .MuiSlider-rail": {
    color: gray500,
  },
  "& .MuiSlider-track": {
    color: purple500,
  },
}));

export default function RangeSlider() {
  const [value, setValue] = React.useState([18, 45]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlerInputChange = (index, inputValue) => {
    const updateValue = [...value];
    updateValue[index] = inputValue;
    setValue(updateValue);
  };

  return (
    <Box sx={{ width: 163 }}>
      <CustomSlider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={18}
        max={70}
      />
      <div className="flex justify-center items-center">
        <input
          type="number"
          placeholder={value[0]}
          onChange={(e) => handlerInputChange(0, e.target.value)}
          className="border border-Gray-400 w-[65px] rounded-lg py-2 px-3 focus:outline-none focus:border-Red-600"
        />
        <p className="mx-3">-</p>
        <input
          type="number"
          placeholder={value[1]}
          onChange={(e) => handlerInputChange(1, e.target.value)}
          className="border border-Gray-400 w-[65px] rounded-lg py-2 px-3 focus:outline-none focus:border-Red-600"
        />
      </div>
    </Box>
  );
}
