export const jsQuestions = [
  {
    questionText: "Which of the following is a valid javascript data type",
    answerOptions: [
      { answerText: "bool", isCorrect: false },
      { answerText: "double", isCorrect: false },
      { answerText: "string", isCorrect: true },
      { answerText: "int64", isCorrect: false },
    ],
  },
  {
    questionText: "console.log() is used to read input from the user",
    answerOptions: [
      { answerText: "False", isCorrect: true },
      { answerText: "True", isCorrect: false },
    ],
  },
  {
    questionText: "Fill in the blanks",
    answerOptions: [
      { answerText: "let", isCorrect: false },
      { answerText: "var", isCorrect: false },
      { answerText: "const", isCorrect: true },
    ],
  },
  {
    questionText: "Which of the following are valid in js",
    answerOptions: [
      { answerText: "[3,2,1]", isCorrect: true },
      { answerText: "['1','b','c','d']", isCorrect: true },
      { answerText: "[...[]...[]]", isCorrect: false },
      { answerText: "['a',0,9,'z']", isCorrect: true },
    ],
  },
  {
    questionText: `Match the following JavaScript function with their description:    

      i) onblur a) script runs when element changes
      ii) onmouseup b) script runs when the form is reset
      iii) onchange c) script runs when the element lost focus.
      iv) onreset d) script runs when mouse button is released.`,
    answerOptions: [
      {
        answerText: "i-d, ii-c, iii-a, iv-b",
        isCorrect: false,
      },
      {
        answerText: "i-b, ii-c, iii-a, iv-d",
        isCorrect: false,
      },
      {
        answerText: "i-c, ii-d, iii-a, iv-b",
        isCorrect: true,
      },
      {
        answerText: "i-a, ii-c, iii-d, iv-b",
        isCorrect: false,
      },
    ],
  },
];
