"use client";

import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearBuffer() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-Red-100 flex flex-col justify-center items-center">
        <p className="w-[40%] text-Red-500 text-xl font-bold text-center mb-2">
          Loading
          <span className="text-[0.4rem] text-Red-500 ml-[0.1rem]">
            ❤︎ ❤︎ ❤︎
          </span>
        </p>
        <div className="w-[40%]">
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="buffer"
              value={progress}
              valueBuffer={buffer}
              sx={{
                "& .MuiLinearProgress-colorPrimary": {
                  backgroundColor: "#FFB1C8",
                },
                "& .MuiLinearProgress-barColorPrimary": {
                  backgroundColor: "#C70039",
                },
                "& .MuiLinearProgress-dashed": {
                  display: "none",
                },
              }}
            />
          </Box>
        </div>
      </div>
    </>
  );
}
