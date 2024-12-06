// import React from 'react'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Textarea from "@mui/joy/Textarea";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

export default function GridTextFields() {
  return (
    <Container fixed>
      <h1 style={{ textAlign: "center" }}>create your account</h1>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 2, md: 1 }}
      >
        <TextField
          label="Full Name"
          type="text"
          tyvariant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Username"
          type="text"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          type="number"
          label="Age"
          variant="outlined"
          fullWidth
          required
        />
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 2, md: 1 }}
      >
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          required
        />
      </Stack>

      <Textarea
        placeholder="Bio"
        minRows={2}
        sx={{
          "--Textarea-focusedInset": "var(--any, )",
          "--Textarea-focusedThickness": "0.25rem",
          "--Textarea-focusedHighlight": "#86b7fe",
          "&::before": {
            transition: "box-shadow .15s ease-in-out",
          },
          "&:focus-within": {
            borderColor: "#86b7fe",
          },
        }}
      />
      <Container>
        <Button fullWidth variant="contained" color="secondary">
          Sign up
        </Button>
      </Container>
    </Container>
  );
}
