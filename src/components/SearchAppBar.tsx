import * as React from "react";

import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, TextField, Typography } from "@mui/material";

import { SearchAppBarProps } from "../types";

export default function SearchAppBar({ handleChange }: SearchAppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              padding: "10px",
            }}
          >
            Please search for a country...
          </Typography>

          <TextField
            color="secondary"
            label="Search"
            style={{
              width: "30%",
            }}
            onChange={handleChange}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
