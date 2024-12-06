import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function AlignedButtons() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </>
  );
}
