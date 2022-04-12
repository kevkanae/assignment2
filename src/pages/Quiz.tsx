import { Box, Button, Grid } from "@mui/material";
import GridOptions from "../components/GridOptions";
import Question from "../components/Question";
import { jsQuestions } from "../constants/Questions";
import { useState } from "react";
import { stat } from "../constants/Status";
import { handleSaveAnswer } from "../utils/SaveHandler";
import FinalSubmitButton from "../components/FinalSubmitButton";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(-1);
  const [currentStatus, setCurrentStatus] = useState<any[]>(
    localStorage.getItem("Status") === null
      ? stat
      : JSON.parse(localStorage.getItem("Status") as any)
  );

  const handleQChange = (curr: number, type: number) => {
    if (type === +1 && currentIndex !== 4) {
      setCurrentIndex(curr + 1);
    } else if (type === -1 && currentIndex !== 0) {
      setCurrentIndex(curr - 1);
    }
    setCurrentAnswerIndex(-1);
  };

  const handleClickedAnswer = (index: number) => {
    setCurrentAnswerIndex(index);
  };

  const updateCircle = (curr: number) => {
    const update = currentStatus;
    let index = currentStatus.findIndex((x) => x.qi === curr);

    update[index].status = true;
    setCurrentStatus(update);
    localStorage.setItem("Status", JSON.stringify(update));
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
        {currentStatus.map((x, i) => (
          <Button
            key={i}
            sx={{
              backgroundColor: x.status
                ? "lightgreen"
                : currentIndex === i
                ? "#b8d2fc"
                : "#eee",
              mx: 3,
            }}
            onClick={() => setCurrentIndex(i)}
          >
            {x.qi}
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
        <Button
          variant="outlined"
          onClick={() => handleQChange(currentIndex, -1)}
          disabled={currentIndex === 0 ? true : false}
        >
          ◀️
        </Button>
        <Box
          sx={{
            backgroundColor: "white",
            width: "49vw",
            height: "63vh",
            my: 3,
            p: 3,
            borderRadius: 3,
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
            <Box
              sx={{
                height: "10vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: "2rem",
              }}
            >
              <Button
                size="large"
                onClick={() => {
                  handleSaveAnswer(currentIndex, currentAnswerIndex);
                  updateCircle(currentIndex);
                }}
              >
                Save
              </Button>
            </Box>
          </>
        </Box>
        <Button
          variant="outlined"
          onClick={() => handleQChange(currentIndex, +1)}
          disabled={currentIndex === 4 ? true : false}
        >
          ▶️
        </Button>
      </Box>
      <FinalSubmitButton />
    </>
  );
};

export default Quiz;
