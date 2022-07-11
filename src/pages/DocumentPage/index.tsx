import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Todocuments } from "./ListDocument";
import "./style.css";

const DocumentPage = () => {
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([
    {
      id: 0,
      fileName: "Loading...",
      document: "#",
    },
  ]);
  const documents = [
    {
      id: 1,
      fileName: "HR-PARTNER-HƯỚNG-DẪN-SỬ-DỤNG-PHẦN-MỀM-BOOK-LỊCH-NGHỈ.pdf",
      document: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 2,
      fileName: "HR-PARTNER-HƯỚNG-DẪN-SỬ-DỤNG-PHẦN-MỀM-BOOK-LÀM.pdf",
      document: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    if (loading === false) {
      setValues(documents);
    }
  }, [loading]);
  return (
    <Grid container spacing={2}>
      {values.map((values: any, index: number) => (
        <Grid item key={index} xs={12}>
          <Todocuments data={values} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DocumentPage;
