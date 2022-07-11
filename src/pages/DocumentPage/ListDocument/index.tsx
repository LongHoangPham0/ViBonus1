import { Paper, Stack, Avatar, Link } from "@mui/material";
import DocumentLogo from "../../../assets/images/DocumentLogo.svg";

interface DocumentPages {
  id: number;
  fileName: string;
  document: string;
}
interface Props {
  data: DocumentPages;
}

export const Todocuments = ({ data }: Props) => {
  return (
    <Paper sx={{ borderRadius: 4, padding: 2 }} elevation={0}>
      <Stack direction="row" alignItems="center" spacing={3}>
        <Avatar
          alt="Document"
          src={DocumentLogo}
          variant="rounded"
          sx={{ width: 67, height: 67 }}
        />
        <Link
          href={data.document}
          sx={{
            typography: { xs: "body2", sm: "subtitle2", md: "subtitle1" },
            color: "black",
          }}
          underline="hover"
        >
          <b>{data.fileName}</b>
        </Link>
      </Stack>
    </Paper>
  );
};
