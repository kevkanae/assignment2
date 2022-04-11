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
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>();

  const handleQChange = (curr: number, type: number) => {
    if (type === +1 && currentIndex !== 4) {
      console.log(curr + 1);
      setCurrentIndex(curr + 1);
    } else if (type === -1 && currentIndex !== 0) {
      console.log(curr - 1);
      setCurrentIndex(curr - 1);
    }
  };

  const handleClickedAnswer = (index: number) => {
    setCurrentAnswerIndex(index);
  };

  const handleSaveAnswer = (curr: number) => {
    let currAns = {
      qi: curr,
      q: jsQuestions[curr].questionText,
      a: jsQuestions[curr].answerOptions.filter((x) => x.isCorrect),
      ca: jsQuestions[curr].answerOptions.filter(
        (_, i) => i === currentAnswerIndex
      ),
    };

    // If Answer Key exists in local storage
    if (localStorage.getItem("ANS") !== null) {
      let prevAns = JSON.parse(localStorage.getItem("ANS") || "");
      console.log(prevAns);
      //if current Q exists then modify
      let ind = prevAns.findIndex((x: { qi: number }) => x.qi === curr);

      // if current Q doesnt exist
      if (ind === -1) {
        prevAns.push(currAns);
        localStorage.setItem("ANS", JSON.stringify(prevAns));
      } else {
        prevAns[ind] = currAns;
        localStorage.setItem("ANS", JSON.stringify(prevAns));
      }
    } else {
      let thisOnlyRunsOnce = [currAns];
      localStorage.setItem("ANS", JSON.stringify(thisOnlyRunsOnce));
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "10vh",
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
          <>
            <Question q={jsQuestions[currentIndex].questionText} />
            <Grid
              container
              spacing={2}
              rowSpacing={4}
              columnSpacing={3}
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              {jsQuestions[currentIndex].answerOptions.map((x, i: number) => (
                <GridOptions
                  key={i}
                  options={x.answerText}
                  ansIndex={i}
                  clickedAns={(ansI: number) => handleClickedAnswer(ansI)}
                />
              ))}
            </Grid>
            <Button onClick={() => handleSaveAnswer(currentIndex)}>Save</Button>
          </>
        </Box>
        <Button onClick={() => handleQChange(currentIndex, +1)}>▶️</Button>
      </Box>
      <Box
        sx={{
          height: "10vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{}}
          onClick={() => {
            let fa = JSON.parse(localStorage.getItem("ANS") || "");
            console.log(fa);
            localStorage.clear();
          }}
        >
          Final Submit
        </Button>
      </Box>
    </>
  );
};

export default Quiz;
