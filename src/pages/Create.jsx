import { useState } from 'react';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const styles = {
  field: {
    my: '20px',
    display: 'block',
  },
};

const Create = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('reminders');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTitleError(false);
    setDetailsError(false);

    if (title === '') setTitleError(true);
    if (details === '') setDetailsError(true);

    if (title && details) {
      fetch(import.meta.env.VITE_API_SERVER, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, details, category }),
      })
        .then(() => navigate(`/`))
        .catch(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a new Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={styles.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          sx={styles.field}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <FormControl sx={styles.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminder"
            />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
