import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';

import Masonry from '@mui/lab/Masonry';
import { Typography } from '@mui/material';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_SERVER)
      .then((res) => res.json())
      .then((data) => {
        setNotes(data.reverse());
        setIsPending(false);
      });
  }, []);

  const handleDelete = async (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);

    await fetch(`${import.meta.env.VITE_API_SERVER}/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <>
      {isPending && (
        <Typography variant="h5" color="textSecondary">
          Loading...
        </Typography>
      )}
      <Masonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={3} sx={{ m: 0 }}>
        {notes.map((note) => (
          <NoteCard note={note} key={note.id} handleDelete={handleDelete} />
        ))}
      </Masonry>
    </>
  );
};

export default Notes;
