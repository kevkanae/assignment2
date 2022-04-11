import {
  Box,
  Button,
  Grid,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import GridOptions from "../components/GridOptions";
import Question from "../components/Question";
import { jsQuestions } from "../utils/Questions";
import { useState } from "react";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleQChange = (curr: number, type: number) => {
    if (type === +1 && currentIndex !== 4) {
      console.log(curr + 1);
      setCurrentIndex(curr + 1);
    } else if (type === -1 && currentIndex !== 0) {
      console.log(curr - 1);
      setCurrentIndex(curr - 1);
    }
  };
  return (
    <>
      <Box
        sx={{
          height: "20vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[1, 2, 3, 4, 5].map((x, i) => (
          <Button key={i} sx={{ mx: 3 }} onClick={() => setCurrentIndex(i)}>
            {x}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100vw",
          height: "80vh",
          backgroundColor: "#E5E5E5",
        }}
      >
        <Button onClick={() => handleQChange(currentIndex, -1)}>◀️</Button>
        <Box
          sx={{
            backgroundColor: "white",
            width: "49vw",
            height: "63vh",
            my: 3,
            p: 3,
          }}
        >
          {/* {jsQuestions.map((x, i) => ( */}
          <Box>
            <Question q={jsQuestions[currentIndex].questionText} />
          </Box>
          {/* ))} */}
        </Box>
        <Button onClick={() => handleQChange(currentIndex, +1)}>▶️</Button>
      </Box>
    </>
  );
};

export default Quiz;
