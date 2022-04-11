import { Grid, Typography, Box } from "@mui/material";

interface IOptions {
  options: string | number | boolean;
  ansIndex: number;
  clickedAns: Function;
}

const GridOptions = (props: IOptions) => {
  return (
    <Grid item xs={6} onClick={() => props.clickedAns(props.ansIndex)}>
      <Box
        sx={{
          backgroundColor: "#777",
          p: 2,
          boxShadow: 7,
          "&:hover": { cursor: "pointer" },
          "&:active": {
            backgroundColor: "#e5e5e5",
          },
        }}
      >
        <Typography sx={{ textAlign: "center" }}>{props.options}</Typography>
      </Box>
    </Grid>
  );
};

export default GridOptions;
