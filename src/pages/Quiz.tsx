import { Box, Button, Grid } from "@mui/material";
import GridOptions from "../components/GridOptions";
import Question from "../components/Question";
import { jsQuestions } from "../constants/Questions";
import React, { useState } from "react";
import { stat } from "../constants/Status";
import FinalSubmitButton from "../components/FinalSubmitButton";
import Checkbox from "@mui/material/Checkbox";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(-1);
  const [answers, setAnswer] = useState<any>([{}]);
  const [currentStatus, setCurrentStatus] = useState<any[]>(stat);
  const [checked, setChecked] = React.useState([true, false, false, false]);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    let val = checked;
    val[i] = event.target.checked;
    setChecked([...val]);
  };

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

  const handleFillBlanks = (e: React.ChangeEvent<HTMLInputElement>) => {
    let index = jsQuestions[2].answerOptions.findIndex(
      (x) => x.answerText === e.currentTarget.value
    );
    if (index === -1) {
      setCurrentAnswerIndex(1);
    } else {
      setCurrentAnswerIndex(index);
    }
  };

  const updateCircle = (curr: number) => {
    const update = currentStatus;
    let index = currentStatus.findIndex((x) => x.qi === curr);

    update[index].status = true;
    setCurrentStatus(update);
  };

  const handleSaveAnswer = (curr: number, ansIndex: number) => {
    if (ansIndex === -1 && curr !== 3) alert("Select an Answer");
    else {
      var checkedAnswers: any[] = [];
      if (curr === 3) {
        const indexes = checked.flatMap((x, i) => (x === true ? i : []));
        checkedAnswers = jsQuestions[curr].answerOptions.filter((x, i) => {
          if (i === indexes[i]) return x;
        });
      }

      let currAns = {
        qi: curr,
        q: jsQuestions[curr].questionText,
        a: jsQuestions[curr].answerOptions.filter((x) => x.isCorrect),
        ca:
          curr !== 3
            ? jsQuestions[curr].answerOptions.filter((_, i) => i === ansIndex)
            : checkedAnswers,
      };

      if (answers !== [{}]) {
        let prevAns = answers;
        let ind = prevAns.findIndex((x: { qi: number }) => x.qi === curr);
        console.log(prevAns);

        // if current Q doesnt exist
        if (ind === -1) {
          prevAns.push(currAns);
          setAnswer(prevAns);
        } else {
          prevAns[ind] = currAns;
          setAnswer(prevAns);
        }
      } else {
        let thisOnlyRunsOnce = [currAns];
        setAnswer(thisOnlyRunsOnce);
      }
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
              mx: 3,
            }}
            onClick={() => setCurrentIndex(i)}
          >
            {x.qi + 1}
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
            {(currentIndex <= 1 || currentIndex === 4) && (
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
            )}
            {currentIndex === 2 && (
              <Box>
                <input type="text" onChange={handleFillBlanks} /> declarations
                are immuatable (var/let/const)
              </Box>
            )}
            {currentIndex === 3 && (
              <Box>
                {jsQuestions[currentIndex].answerOptions.map((x, i: number) => (
                  <Box key={i}>
                    {x.answerText}
                    <Checkbox
                      checked={checked[i]}
                      onChange={(e) => handleCheckboxChange(e, i)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </Box>
                ))}
              </Box>
            )}

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
      <FinalSubmitButton data={answers} />
    </>
  );
};

export default Quiz;
