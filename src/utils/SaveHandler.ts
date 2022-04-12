import { jsQuestions } from "../constants/Questions";

export const handleSaveAnswer = (curr: number, ansIndex: number) => {
  if (ansIndex === -1) alert("Select an Answer");

  let currAns = {
    qi: curr,
    q: jsQuestions[curr].questionText,
    a: jsQuestions[curr].answerOptions.filter((x) => x.isCorrect),
    ca: jsQuestions[curr].answerOptions.filter((_, i) => i === ansIndex),
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
