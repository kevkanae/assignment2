import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FinalSubmitButton = () => {
  const navigate = useNavigate();
  return (
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
          let ans = JSON.parse(localStorage.getItem("ANS") as any);
          let trues = ans.filter(
            (x: any) => x.a[0].answerText === x.ca[0].answerText
          );
          localStorage.setItem("trues", trues.length);
          navigate("/score");
        }}
      >
        Final Submit
      </Button>
    </Box>
  );
};

export default FinalSubmitButton;
