import { Grid, Typography, Box, Button } from "@mui/material";
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
      <Button
        variant="outlined"
        sx={{
          width: "100%",
          p: 1,
          borderRadius: 1,
          "&:active": {
            backgroundColor: "lightskyblue",
          },
          "&:focus": {
            backgroundColor: "powderblue",
          },
        }}
      >
        <Typography sx={{ textAlign: "center" }}>{props.options}</Typography>
      </Button>
    </Grid>
  );
};

export default GridOptions;
