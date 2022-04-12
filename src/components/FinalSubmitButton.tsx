import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FinalSubmitButton = (props: { data: any[] }) => {
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
          let ans = props.data;
          if (ans[0] === {}) ans.splice(0, 1);

          console.log(ans);
          var trues = 0;
          for (let i = 0; i < ans.length; i++) {
            if (
              ans[i].a[0] !== undefined &&
              ans[i].ca[0] !== undefined &&
              ans[i].a[0] === ans[i].ca[0]
            ) {
              trues++;
            }
          }

          let len = `${trues}`;

          localStorage.setItem("trues", len);
          localStorage.setItem("ans", JSON.stringify(ans));
          navigate("/score");
        }}
      >
        Final Submit
      </Button>
    </Box>
  );
};

export default FinalSubmitButton;
