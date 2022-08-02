import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TicketInputModel } from "./models";
import * as DB_CONSTANTS from "../../../constant/dbConstants";

const styles = {
  wrapper: {
    display: "flex",
    margin: "20px",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    marginBottom: "20px",
    width: 400,
  },
  btnWrapper: {
    display: "flex",
    margin: "20px",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
};
const Ticket = () => {
  const [ticketData, setTicketData] = useState<TicketInputModel>(
    {} as TicketInputModel
  );
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setTicketData({
      ...ticketData,
      [name]: value,
    });
  };
  console.log(ticketData);
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h4" gutterBottom component="div">
        Describe your issue
      </Typography>
      <FormControl sx={styles.input}>
        <InputLabel id="demo-simple-select-label">Device Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Device Type"
          inputProps={{ name: "deviceType" }}
          value={ticketData.deviceType}
          onChange={handleChange}
        >
          <MenuItem value={DB_CONSTANTS.DESKTOP}>DESKTOP</MenuItem>
          <MenuItem value={DB_CONSTANTS.LAPTOP}>LAPTOP</MenuItem>
          <MenuItem value={DB_CONSTANTS.MACBOOK}>MACBOOK</MenuItem>
          <MenuItem value={DB_CONSTANTS.OTHERS}>OTHERS</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={styles.input}>
        <InputLabel id="demo-simple-select-label">Issue In</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Issue Type"
          inputProps={{ name: "issueIn" }}
          value={ticketData.issueIn}
          onChange={handleChange}
        >
          <MenuItem value={DB_CONSTANTS.HARDWARE}>HARDWARE</MenuItem>
          <MenuItem value={DB_CONSTANTS.SOFTWARE}>SOFTWARE</MenuItem>
          <MenuItem value={DB_CONSTANTS.OTHERS}>OTHERS</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={styles.input}>
        <InputLabel id="demo-simple-select-label">Issue Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Issue Type"
          inputProps={{ name: "issueType" }}
          value={ticketData.issueType}
          onChange={handleChange}
        >
          {DB_CONSTANTS.ISSUES.filter(
            (issue) => issue.type === ticketData.issueIn
          ).map((issue) => (
            <MenuItem key={issue.value} value={issue.value}>
              {issue.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={styles.input}>
        <TextField
          name="softwareName"
          value={ticketData.softwareName}
          label="Software Name"
          type="text"
          placeholder="Software Name"
          variant="outlined"
          onChange={handleChange}
          inputProps={{ "aria-label": "softwareName" }}
        />
      </FormControl>
      <FormControl sx={styles.input}>
        <InputLabel id="demo-simple-select-label">
          Repair/Replacement
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Repair/Replacement"
          inputProps={{ name: "replacementType" }}
          value={ticketData.replacementType}
          onChange={handleChange}
        >
          {DB_CONSTANTS.ISSUE_TYPE.filter(
            (issue) => issue.type === ticketData.issueType
          ).map((issue) => (
            <MenuItem key={issue.value} value={issue.value}>
              {issue.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={styles.input}>
        <TextField
          id="outlined-helperText"
          multiline
          rows={4}
          label="Description"
          name="description"
          value={ticketData.description}
          type="text"
          variant="outlined"
          onChange={handleChange}
          inputProps={{ "aria-label": "description" }}
        />
      </FormControl>
      <FormControl sx={styles.input}>
        <Button variant="contained">Create Ticket</Button>
      </FormControl>
    </Box>
  );
};

export default Ticket;
