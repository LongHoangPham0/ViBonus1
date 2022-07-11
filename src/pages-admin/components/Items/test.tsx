import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.css";

const Items = () => {
  ///searching bar
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.action.selected, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.action.selected, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  ///table pagination
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: any, newPag: any) => {
    setPage(newPag);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  /// table
  const items = [
    {
      img: 1,
      name: "@johnny",
      description: "@johny",
      point: 196165,
      quantity: "Food",
      createdon: "02 Jan 2022, 11:02 ",
    },
    {
      img: 2,
      name: "@johnny",
      description: "@johny",
      point: 196165,
      quantity: "Food",
      createdon: "02 Jan 2022, 11:02 ",
    },
    {
      img: 3,
      name: "@johnny",
      description: "@johny",
      point: 196165,
      quantity: "Food",
      createdon: "02 Jan 2022, 11:02 ",
    },
    {
      img: 4,
      name: "@johnny",
      description: "@johny",
      point: 196165,
      quantity: "Food",
      createdon: "02 Jan 2022, 11:02 ",
    },
    {
      img: 5,
      name: "@johnny",
      description: "@johny",
      point: 196165,
      quantity: "Food",
      createdon: "02 Jan 2022, 11:02 ",
    },
    {
      img: 6,
      name: "@johnny",
      description: "@johny",
      point: 196165,
      quantity: "Food",
      createdon: "02 Jan 2022, 11:02 ",
    },
    {
      img: 7,
      name: "@johnny",
      description: "@johny",
      point: 196165,
      quantity: "Food",
      createdon: "02 Jan 2022, 11:02 ",
    },
    {
      img: 8,
      name: "@johnny",
      description: "@johny",
      point: 196165,
      quantity: "Food",
      createdon: "02 Jan 2022, 11:02 ",
    },
    {
      img: 9,
      name: "@johnny",
      description: "@johny",
      point: 196165,
      quantity: "Food",
      createdon: "02 Jan 2022, 11:02 ",
    },
    {
      img: 10,
      name: "@johnny",
      description: "@johny",
      point: 196165,
      quantity: "Food",
      createdon: "02 Jan 2022, 11:02 ",
    },
  ];
  const rows = [...items];

  const baseColumnOptions = {
    hideable: false,
  };

  const columns = [
    {
      field: "img",
      headerName: "IMG",
      ...baseColumnOptions,
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      ...baseColumnOptions,
      flex: 1,
      sortable: false,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      ...baseColumnOptions,
    },
    {
      field: "point",
      headerName: "Point",
      flex: 1,
      ...baseColumnOptions,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      ...baseColumnOptions,
    },
    {
      field: "createdon",
      headerName: "Created on",
      flex: 1,
      ...baseColumnOptions,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      ...baseColumnOptions,
    },
  ];

  return (
    <div className="contain">
      <h1 className="h1"> Items</h1>
      <Box sx={{ width: "100%" }}>
        <Toolbar sx={{ padding: "0px !important" }}>
          <Search>
            <SearchIconWrapper sx={{ left: "10px", width: "650px" }}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ width: "350px", right: "10px" }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </Box>

      <Box>
        <DataGrid
          autoHeight
          disableExtendRowFullWidth
          disableColumnFilter
          disableSelectionOnClick
          hideFooter
          showCellRightBorder
          showColumnRightBorder
          columns={columns}
          rows={rows}
        />
      </Box>

      <div className="footer">
        <Box sx={{ flexGrow: 0 }}>
          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </div>
    </div>
  );
};

export default Items;
