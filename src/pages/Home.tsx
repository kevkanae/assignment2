import {
  Box,
  Button,
  Grid,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { languages } from "../constants/Languages";

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [lang, setLang] = useState<string>("JS");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);
  const handleLang = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLang(e.target.value);

  const handleSubmit = () => {
    if (name !== "" && lang !== "") {
      console.log({ name, lang });
      localStorage.setItem("User", JSON.stringify({ name, lang }));
      navigate("/quiz");
    }
  };

  useEffect(() => {
    if (Object.keys(localStorage).length !== 0) {
      localStorage.clear();
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#E5E5E5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "56vw",
            backgroundColor: "#fff",
            borderRadius: 3,
            p: "1rem",
            color: "#000",
          }}
        >
          <Typography>Enter Your Details</Typography>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={2}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {[
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                role="Name-inp"
                onChange={handleName}
                value={name}
              />,
              <TextField
                id="outlined-select-currency"
                select
                label="Language"
                aria-label="Language"
                value={lang}
                onChange={handleLang}
              >
                {languages.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>,
              <TextField label="Age" variant="outlined" fullWidth />,
              <TextField label="Gender" variant="outlined" fullWidth />,
            ].map((x, i) => (
              <Grid key={i} item xs={6}>
                <Box sx={{ p: 1 }}>{x}</Box>
              </Grid>
            ))}
          </Grid>
          <Button role="sub-button" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
