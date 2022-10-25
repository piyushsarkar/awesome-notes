import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';

import Masonry from '@mui/lab/Masonry';
import { Box, Container, Grid, Paper } from '@mui/material';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_SERVER)
      .then((res) => res.json())
      .then((data) => setNotes(data.reverse()));
  }, []);

  const handleDelete = async (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);

    await fetch(`${import.meta.env.VITE_API_SERVER}/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <Container>
      <Masonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={3}>
        {notes.map((note) => (
          <NoteCard note={note} handleDelete={handleDelete} />
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
