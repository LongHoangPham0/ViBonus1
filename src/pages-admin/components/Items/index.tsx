import React from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridColumns,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import "./styles.css";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const Items = () => {
  ///searching bar
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.action.disabledBackground, 0.15),
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

  ///divider css style
  const style = {
    width: "100%",
    maxWidth: 1500,
    bgcolor: "background.paper",
  };

  ///pagination
  const [pageSize, setPageSize] = React.useState(5);

  /// table data
  const initialRows = [
    {
      id: 1,
      name: "@johnny",
      username: "@johny",
      postalcodes: 196165,
      communityname: "Food",
      createdOn: "02 Jan 2022, 11:02 ",
    },
    {
      id: 2,
      name: "@johnny",
      username: "@johny",
      postalcodes: 196165,
      communityname: "Food",
      createdOn: "02 Jan 2022, 11:02 ",
    },
    {
      id: 3,
      name: "@johnny",
      username: "@johny",
      postalcodes: 196165,
      communityname: "Food",
      createdOn: "02 Jan 2022, 11:02 ",
    },

    {
      id: 4,
      name: "@johnny",
      username: "@johny",
      postalcodes: 196165,
      communityname: "Food",
      createdOn: "02 Jan 2022, 11:02 ",
    },
    {
      id: 5,
      name: "@johnny",
      username: "@johny",
      postalcodes: 196165,
      communityname: "Food",
      createdOn: "02 Jan 2022, 11:02 ",
    },

    {
      id: 6,
      name: "@johnny",
      username: "@johny",
      postalcodes: 196165,
      communityname: "Food",
      createdOn: "02 Jan 2022, 11:02 ",
    },
    {
      id: 7,
      name: "@johnny",
      username: "@johny",
      postalcodes: 196165,
      communityname: "Food",
      createdOn: "02 Jan 2022, 11:02 ",
    },
    {
      id: 8,
      name: "@johnny",
      username: "@johny",
      postalcodes: 196165,
      communityname: "Food",
      createdOn: "02 Jan 2022, 11:02 ",
    },
    {
      id: 9,
      name: "@johnny",
      username: "@johny",
      postalcodes: 196165,
      communityname: "Food",
      createdOn: "02 Jan 2022, 11:02 ",
    },
    {
      id: 10,
      name: "@johnny",
      username: "@johny",
      postalcodes: 196165,
      communityname: "Food",
      createdOn: "02 Jan 2022, 11:02 ",
    },
  ];

  type Row = typeof initialRows[number];

  const [rows, setRows] = React.useState<Row[]>(initialRows);

  // const deleteUser = React.useCallback(
  //   (id: GridRowId) => () => {
  //     setTimeout(() => {
  //       setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  //     });
  //   },
  //   []
  // );
  const duplicateUser = React.useCallback(
    (id: GridRowId) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id)!;
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
      });
    },
    []
  );

  const columns = React.useMemo<GridColumns<Row>>(
    () => [
      { field: "id", type: "number", flex: 0.2 },
      { field: "name", type: "string", flex: 0.5 },
      { field: "username", type: "string", flex: 0.5 },
      { field: "postalcodes", type: "string", flex: 0.5 },
      { field: "communityname", type: "string", flex: 0.5 },
      { field: "createdOn", type: "string", flex: 0.5 },

      {
        field: "actions",
        type: "actions",
        width: 80,
        flex: 0.5,
        getActions: (params) => [
          <GridActionsCellItem
            icon={
              <svg
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1666 5.24002C20.1674 5.10841 20.1422 4.97795 20.0924 4.85611C20.0427 4.73427 19.9693 4.62346 19.8766 4.53002L15.6366 0.290017C15.5432 0.197335 15.4324 0.12401 15.3105 0.0742455C15.1887 0.0244809 15.0583 -0.000744179 14.9266 1.67143e-05C14.795 -0.000744179 14.6646 0.0244809 14.5427 0.0742455C14.4209 0.12401 14.3101 0.197335 14.2166 0.290017L11.3866 3.12002L0.456643 14.05C0.363961 14.1435 0.290636 14.2543 0.240871 14.3761C0.191107 14.4979 0.165882 14.6284 0.166643 14.76V19C0.166643 19.2652 0.271999 19.5196 0.459536 19.7071C0.647072 19.8947 0.901426 20 1.16664 20H5.40664C5.54657 20.0076 5.68654 19.9857 5.81746 19.9358C5.94839 19.8858 6.06735 19.8089 6.16664 19.71L17.0366 8.78002L19.8766 6.00002C19.9679 5.9031 20.0423 5.79155 20.0966 5.67002C20.1063 5.59031 20.1063 5.50973 20.0966 5.43002C20.1013 5.38347 20.1013 5.33657 20.0966 5.29002L20.1666 5.24002ZM4.99664 18H2.16664V15.17L12.0966 5.24002L14.9266 8.07002L4.99664 18ZM16.3366 6.66002L13.5066 3.83002L14.9266 2.42002L17.7466 5.24002L16.3366 6.66002Z"
                  fill="#007BFF"
                />
              </svg>
            }
            label="Edit"
            // onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            icon={
              <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1666 7H9.16663V5C9.16663 4.73478 9.06127 4.48043 8.87373 4.29289C8.6862 4.10536 8.43184 4 8.16663 4C7.90141 4 7.64706 4.10536 7.45952 4.29289C7.27198 4.48043 7.16663 4.73478 7.16663 5V7H5.16663C4.90141 7 4.64706 7.10536 4.45952 7.29289C4.27198 7.48043 4.16663 7.73478 4.16663 8C4.16663 8.26522 4.27198 8.51957 4.45952 8.70711C4.64706 8.89464 4.90141 9 5.16663 9H7.16663V11C7.16663 11.2652 7.27198 11.5196 7.45952 11.7071C7.64706 11.8946 7.90141 12 8.16663 12C8.43184 12 8.6862 11.8946 8.87373 11.7071C9.06127 11.5196 9.16663 11.2652 9.16663 11V9H11.1666C11.4318 9 11.6862 8.89464 11.8737 8.70711C12.0613 8.51957 12.1666 8.26522 12.1666 8C12.1666 7.73478 12.0613 7.48043 11.8737 7.29289C11.6862 7.10536 11.4318 7 11.1666 7ZM16.1666 13V3C16.1666 2.20435 15.8506 1.44129 15.2879 0.87868C14.7253 0.316071 13.9623 0 13.1666 0H3.16663C2.37098 0 1.60791 0.316071 1.04531 0.87868C0.482697 1.44129 0.166626 2.20435 0.166626 3V13C0.166626 13.7956 0.482697 14.5587 1.04531 15.1213C1.60791 15.6839 2.37098 16 3.16663 16H13.1666C13.9623 16 14.7253 15.6839 15.2879 15.1213C15.8506 14.5587 16.1666 13.7956 16.1666 13ZM2.16663 13V3C2.16663 2.73478 2.27198 2.48043 2.45952 2.29289C2.64706 2.10536 2.90141 2 3.16663 2H13.1666C13.4318 2 13.6862 2.10536 13.8737 2.29289C14.0613 2.48043 14.1666 2.73478 14.1666 3V13C14.1666 13.2652 14.0613 13.5196 13.8737 13.7071C13.6862 13.8946 13.4318 14 13.1666 14H3.16663C2.90141 14 2.64706 13.8946 2.45952 13.7071C2.27198 13.5196 2.16663 13.2652 2.16663 13ZM19.1666 4C18.9014 4 18.6471 4.10536 18.4595 4.29289C18.272 4.48043 18.1666 4.73478 18.1666 5V15C18.1666 15.7956 17.8506 16.5587 17.2879 17.1213C16.7253 17.6839 15.9623 18 15.1666 18H5.16663C4.90141 18 4.64706 18.1054 4.45952 18.2929C4.27198 18.4804 4.16663 18.7348 4.16663 19C4.16663 19.2652 4.27198 19.5196 4.45952 19.7071C4.64706 19.8946 4.90141 20 5.16663 20H15.1666C16.4927 20 17.7645 19.4732 18.7022 18.5355C19.6398 17.5979 20.1666 16.3261 20.1666 15V5C20.1666 4.73478 20.0613 4.48043 19.8737 4.29289C19.6862 4.10536 19.4318 4 19.1666 4Z"
                  fill="#007BFF"
                />
              </svg>
            }
            label="Addbook"
            // onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            icon={
              <svg
                width={19}
                height={4}
                viewBox="0 0 19 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16663 0C8.06663 0 7.16663 0.9 7.16663 2C7.16663 3.1 8.06663 4 9.16663 4C10.2666 4 11.1666 3.1 11.1666 2C11.1666 0.9 10.2666 0 9.16663 0ZM2.16663 0C1.06663 0 0.166626 0.9 0.166626 2C0.166626 3.1 1.06663 4 2.16663 4C3.26663 4 4.16663 3.1 4.16663 2C4.16663 0.9 3.26663 0 2.16663 0ZM16.1666 0C15.0666 0 14.1666 0.9 14.1666 2C14.1666 3.1 15.0666 4 16.1666 4C17.2666 4 18.1666 3.1 18.1666 2C18.1666 0.9 17.2666 0 16.1666 0Z"
                  fill="#959595"
                />
              </svg>
            }
            label="Duplicate User"
            onClick={duplicateUser(params.id)}
            // showInMenu
          />,
        ],
      },
    ],
    // [deleteUser, duplicateUser]
    [duplicateUser]
  );

  return (
    <Box
      sx={{
        backgroundColor: "#F4F6F9",
        padding: "20px",
        paddingBottom: "50px",
        margin: "-20px",
      }}
    >
      <h1 className="h1"> Items</h1>

      <Box
        sx={{
          backgroundColor: "white",
          border: " 1px solid #E1E1E8",
          borderTopRightRadius: " 10px",
          borderTopLeftRadius: " 10px",
          
          
        }}
      >
        <Toolbar sx={{ display:"flex", justifyContent:"space-between", padding: "0px !important" }} >
          
          <Grid item sx={{right:"0"  }} justifyContent="space-between" alignItems="center">
            <Search >
              <SearchIconWrapper sx={{ left: "10px", width: "430px" }}>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ width: "245px", right: "10px" }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>

          <Grid item xs={8} >
            <Stack sx={{ padding: "10px" }} direction="row" spacing={3}>
              <Button sx={{}} variant="contained" color="success">
                <AddIcon />
                Create
              </Button>
            </Stack>
          </Grid>
        </Toolbar>

        <Divider sx={style} />

        <Box>
          <DataGrid
            sx={{
              marginTop: "30px",
              // width: "1470px",
              // maxWidth: "500px",
              backgroundColor: "white",
            }}
            columns={columns}
            rows={rows}
            autoHeight
            disableColumnFilter
            disableSelectionOnClick
            showCellRightBorder
            showColumnRightBorder
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            {...initialRows}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Items;
