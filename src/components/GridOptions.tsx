import { Grid, Typography, Box } from "@mui/material";
// import { useState } from "react";

interface IOptions {
  options: string | number | boolean;
  ansIndex: number;
  clickedAns: Function;
}

const GridOptions = (props: IOptions) => {
  // const [active, setActive] = useState(false);
  return (
    <Grid
      item
      xs={5}
      onClick={() => {
        // setActive(!active);
        props.clickedAns(props.ansIndex);
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ddd",
          p: 2,
          boxShadow: 3,
          borderRadius: 3,
          "&:hover": { cursor: "pointer", backgroundColor: "#aaa" },
          "&:active": {
            backgroundColor: "white",
          },
        }}
      >
        <Typography sx={{ textAlign: "center" }}>{props.options}</Typography>
      </Box>
    </Grid>
  );
};

export default GridOptions;
