import { Box, Button, Grid } from "@mui/material";
import GridOptions from "../components/GridOptions";
import Question from "../components/Question";
import { jsQuestions } from "../utils/Questions";
import { useEffect, useState } from "react";
import { stat } from "../utils/Status";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(-1);
  // const [currentStatus, setCurrentStatus] = useState<any[]>(stat);
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

  const handleSaveAnswer = (curr: number) => {
    if (currentAnswerIndex === -1) alert("Select an Answer");
    updateCircle(curr);
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
        {currentStatus.map((x, i) => (
          <Button
            key={i}
            sx={{
              backgroundColor: x.status
                ? "lightgreen"
                : currentIndex === i
                ? "#b8d2fc"
                : "#eee",
              // backgroundColor: x.status ? "lightgreen" : "#e5e5e5",
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
                onClick={() => handleSaveAnswer(currentIndex)}
              >
                Save
              </Button>
            </Box>
          </>
        </Box>
        <Button
          variant="outlined"
          onClick={() => handleQChange(currentIndex, +1)}
        >
          ▶️
        </Button>
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
          sx={{ alignSelf: "center" }}
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
