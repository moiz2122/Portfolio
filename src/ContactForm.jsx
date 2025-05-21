import { TextField, Button } from "@mui/material";

export function ContactForm() {
  return (
    <form>
      <TextField label="Name" variant="outlined" fullWidth margin="normal" />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary">
        Send
      </Button>
    </form>
  );
}
