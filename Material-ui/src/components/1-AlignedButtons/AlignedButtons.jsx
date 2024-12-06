import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Divider from "@mui/material/Divider";

import PersonIcon from "@mui/icons-material/Person";
export default function AlignedButtons() {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = () => {
    setIsDisabled(true);
  };
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Button
          color="secondary"
          onClick={handleClick}
          disabled={isDisabled}
          variant="text"
        >
          Text
        </Button>
        <Button color="success" startIcon={<PersonIcon />} variant="contained">
          Contained
        </Button>
        <Button
          target="blank"
          color="error"
          href="https://www.blackbox.ai/"
          variant="outlined"
        >
          Outlined
        </Button>
      </Stack>
    </>
  );
}
