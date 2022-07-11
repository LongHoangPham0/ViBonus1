import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Topreceivers from "./Topreceivers";
import Topgives from "./Topgives";
import Trendingtag from "./Trendingtag";
import "./css/styles.css";

export default function List() {
  const [list, setList] = useState("Top receivers");
  const handleChange = (event: SelectChangeEvent) => {
    setList(event.target.value);
  };

  return (
    <div className="listContainer">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={list}
          onChange={handleChange}
          label="Top receivers"
        >
          <MenuItem value="Top receivers">Top receivers</MenuItem>
          <MenuItem value="Top gives">Top gives </MenuItem>
        </Select>
      </FormControl>
      <div className="scrollList">
        {list === "Top receivers" ? <Topreceivers /> : <Topgives />}
        <hr></hr>
        <Trendingtag />
      </div>
    </div>
  );
}
