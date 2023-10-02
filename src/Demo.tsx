import * as React from "react";
import Box from "@mui/material/Box";
import { LineChart } from "@mui/x-charts/LineChart";

const sample = [1, 10, 30, 50, 70, 90, 100];

export default function ScaleExample() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <LineChart
        xAxis={[{ data: sample, label: "Time Intervel Of Day" }]}
        yAxis={[
          { id: "linearAxis", scaleType: "linear", label: "Percentage Progess" }
        ]}
        series={[{ yAxisKey: "linearAxis", data: sample, label: "linear" }]}
        leftAxis="linearAxis"
        height={400}
      />
    </Box>
  );
}
