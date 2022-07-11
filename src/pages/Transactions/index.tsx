import React, { useEffect } from "react";
import "./styles.css";
import {
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  TableContainer,
  Paper,
  Grid,
  Typography,
  Divider,
  Stack,
  MenuItem,
  FormControl,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";

import { GET_TRANSACTIONSINFO_REQUEST } from "../../redux/reducer/transactionsinfoReducer/actionTypes";
import { GET_TRANSACTIONS_REQUEST } from "../../redux/reducer/transactionsReducer/actionTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Transactions = () => {
  const [types, setTypes] = React.useState("all");

  const handleChange = (event: SelectChangeEvent) => {
    setTypes(event.target.value);
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.common.white,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const { Transactionsinfo } = useAppSelector(
    (state) => state.transactionsinfoReducer
  );
  const { Transactions } = useAppSelector((state) => state.transactionsReducer);
  const dispatch = useAppDispatch();
  // const ConvertType = Transactions.data.type == 0 ? "Give Pt" : "Redemptions"
  useEffect(() => {
    dispatch({
      type: GET_TRANSACTIONSINFO_REQUEST,
    });
    dispatch({
      type: GET_TRANSACTIONS_REQUEST,
    });
  }, [dispatch]);

  return (
    <div className="tranContainer">
      <Typography sx={{ mb: 2, typography: { xs: "h6", sm: "h5", md: "h4" } }}>
        My Transactions
      </Typography>
      <div>
        <div>
          <Paper sx={{ borderRadius: 5 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Grid container justifyContent="space-evenly">
                <Grid item xs={12} sm={3}>
                  <Stack className="pointItem">
                    <Typography sx={{ fontWeight: "bold" }} variant="h5">
                      {Transactionsinfo?.pointReceived}
                    </Typography>
                    <Typography>Points Received</Typography>
                  </Stack>
                </Grid>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={{ display: { sm: "block", xs: "none" } }}
                  flexItem
                />
                <Grid item xs={12} sm={3}>
                  <Stack className="pointItem">
                    <Typography sx={{ fontWeight: "bold" }} variant="h5">
                      {Transactionsinfo?.pointGiven}
                    </Typography>
                    <Typography>Points Given</Typography>
                  </Stack>
                </Grid>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={{ display: { sm: "block", xs: "none" } }}
                  flexItem
                />
                <Grid item xs={12} sm={3}>
                  <Stack className="pointItem">
                    <Typography sx={{ fontWeight: "bold" }} variant="h5">
                      {Transactionsinfo?.redemptions}
                    </Typography>
                    <Typography>Redemptions</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Paper>
        </div>
        <div>
          <FormControl variant="standard" sx={{ mt: 3, minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={types}
              onChange={handleChange}
            >
              <MenuItem value={"all"}>All posts</MenuItem>
              <MenuItem value={0}>Give Pt</MenuItem>
              <MenuItem value={1}>Redemptions</MenuItem>
              <MenuItem value={2}>Receive Pt</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <TableContainer sx={{ marginTop: 2 }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>TXN TYPE</TableCell>
                  <TableCell align="left">SUBJECT</TableCell>
                  <TableCell align="left">POINTS</TableCell>
                  <TableCell align="left">TIMESTAMP</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Transactions?.data
                  .filter(
                    (item: any) =>
                      item.type === (types !== "all" ? types : item.type)
                  )
                  .map((data: any, index: number) => (
                    <StyledTableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {data.type === 0 ? "Give Pt" : "Redemption"}
                      </TableCell>
                      <TableCell
                        sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
                        title={data.subject}
                        align="left"
                      >
                        {data.subject}
                      </TableCell>
                      <TableCell align="left">{data.amount}</TableCell>
                      <TableCell align="left">{data.timeStamp}</TableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
