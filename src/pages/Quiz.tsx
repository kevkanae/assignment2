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
const Quiz = () => {
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
          <Button key={i} sx={{ mx: 3 }}>
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
        <Button>◀️</Button>
        <Box
          sx={{
            backgroundColor: "white",
            width: "49vw",
            height: "63vh",
            my: 3,
            p: 3,
          }}
        ></Box>
        <Button>▶️</Button>
      </Box>
    </>
  );
};

export default Quiz;
