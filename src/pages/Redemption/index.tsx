import { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  TextField,
} from "@mui/material";
import "./styles.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { GET_TRANSACTIONS_REQUEST } from "../../redux/reducer/transactionsReducer/actionTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
const Redemptions = () => {
  const [value, setValue] = useState<Date | null>(new Date());
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.common.white,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const { Transactions } = useAppSelector((state) => state.transactionsReducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({
      type: GET_TRANSACTIONS_REQUEST,
    });
  }, [dispatch]);
  console.log("err2", Transactions?.data);

  return (
    <div className="RedemContainer">
      {/* Header */}
      <Grid
        container
        sx={{ mb: 2 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography sx={{ typography: { xs: "h6", sm: "h5", md: "h4" } }}>
            Daily Redemptions
          </Typography>
        </Grid>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              components={{
                OpenPickerIcon: KeyboardArrowDownIcon,
              }}
              openTo="year"
              views={["year", "month", "day"]}
              value={value}
              onChange={(handleChange) => {
                setValue(handleChange);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
              inputFormat="dd-MM-yyyy"
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      {/* Table */}
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>USER</TableCell>
              <TableCell align="left">SUBJECT</TableCell>
              <TableCell align="right">POINTS&nbsp;</TableCell>
              <TableCell align="right">TIMESTAMP&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Transactions?.data
              ? Transactions?.data
                  .filter((item: any) => item.type === 1)
                  .map((items: any, index: number) => (
                    <StyledTableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {items.username}
                      </TableCell>
                      <TableCell align="left">{items.subject}</TableCell>
                      <TableCell align="right">{items.amount}</TableCell>
                      <TableCell align="right">{items.timeStamp}</TableCell>
                    </StyledTableRow>
                  ))
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Redemptions;
