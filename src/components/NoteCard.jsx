import { DeleteOutlined, Notes } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import { blue, green, pink, yellow } from '@mui/material/colors';

const categoryColor = {
  reminders: blue[500],
  todos: pink[500],
  work: yellow[500],
  money: green[700],
};

const NoteCard = ({ note, handleDelete }) => {
  return (
    <Card elevation={1}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: categoryColor[note.category] || blue[500] }}
            aria-label="category"
          >
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="delete" onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default NoteCard;
