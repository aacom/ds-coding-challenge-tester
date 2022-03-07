import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { Instructor, Lesson } from "../types";

type LessonModalProps = {
  open: boolean;
  onClose: () => void;
  instructor?: Instructor;
};

const Modal: React.FC<LessonModalProps> = ({ open, onClose, instructor }) => (
  <Dialog onClose={onClose} open={open}>
    <DialogTitle>
      <Typography variant="h5" component="h1">
        {instructor ? instructor.name : "The unknown instructor"}'s lessons
      </Typography>
    </DialogTitle>
    <DialogContent>
      {instructor &&
        instructor.lessons.map((lesson: Lesson) => (
          <Box display="flex" width="200px" justifyContent="space-between">
            <div>
              <Typography>{lesson.name}</Typography>
            </div>
            <div>
              <Typography>£{parseInt(lesson.price, 10).toFixed(2)}</Typography>
            </div>
          </Box>
        ))}
    </DialogContent>
  </Dialog>
);

export default Modal;
