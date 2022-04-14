import {
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import React from "react";
import { useState } from "react";

interface IOptions {
  options: any;
  ansIndex: number;
  clickedAns: Function;
  currIndex: number;
  mapIndex: number;
  setMatchData: React.Dispatch<
    React.SetStateAction<{
      1: string;
      2: string;
      3: string;
      4: string;
    }>
  >;
}

const GridOptions = (props: IOptions) => {
  // const [data, setData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ [parseInt(e.target.name)]: e.target.value });
    props.setMatchData((prev) => ({
      ...prev,
      [parseInt(e.target.name)]: e.target.value,
    }));
  };
  return (
    <>
      {props.currIndex === 4 ? (
        <Grid item xs={5}>
          <TextField
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            name={`${props.mapIndex + 1}`}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {props.mapIndex + 1}:
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      ) : (
        <Grid
          item
          xs={5}
          onClick={() => {
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
            <Typography sx={{ textAlign: "center" }}>
              {props.options}
            </Typography>
          </Button>
        </Grid>
      )}
    </>
  );
};

export default GridOptions;
