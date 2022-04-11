import { Box, Typography } from "@mui/material";

interface IQuestion {
  q: string;
}

const Question = (props: IQuestion) => {
  return (
    <Box sx={{ height: "20%", width: "100%" }}>
      <Typography>{props.q}</Typography>
    </Box>
  );
};

export default Question;
