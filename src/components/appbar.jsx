import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const AppBarItem = () => {
  return (
    <AppBar className="App-Bar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Todo List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
