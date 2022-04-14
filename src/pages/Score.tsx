import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Score = () => {
  const truthy = localStorage.getItem("trues") as unknown as number;
  const answers = JSON.parse(localStorage.getItem("ans") as any);
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "49vw",
          overflowY: "scroll",
          p: 1,
        }}
      >
        {answers.map((x: any, i: number) => (
          <Box
            key={i}
            sx={{
              width: "42vw",
              my: 3,
              backgroundColor:
                x.a[0].answerText === x.ca[0].answerText
                  ? "#d6ffde"
                  : "#ffd6d6",
              borderRadius: 1,
              border: "solid 1px #777",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: "1.4rem", fontWeight: 600 }}>
              {x.q}
            </Typography>
            <Typography>Correct Answer: {x.a[0].answerText}</Typography>
            <Typography>Your Answer: {x.ca[0].answerText}</Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "49vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 7,
        }}
      >
        <Pie
          role="score-piechart"
          data={{
            labels: ["Correct", "Wrong"],
            datasets: [
              {
                label: "Quiz Answers",
                data: [truthy, 5 - truthy],
                backgroundColor: ["#d6ffde", "#ffd6d6"],
                borderColor: ["green", "red"],
                borderWidth: 1,
              },
            ],
          }}
        />
      </Box>
    </Box>
  );
};

export default Score;
