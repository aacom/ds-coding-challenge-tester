import React from "react";
import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";

import { Instructor } from "../types";

type InstructorTableProps = {
  instructors?: Instructor[];
  openModal: (row: Instructor) => void;
};

const Table: React.FC<InstructorTableProps> = ({
  instructors = [],
  openModal = () => {},
}) => (
  <TableContainer>
    <MuiTable>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Transmission</TableCell>
          <TableCell>Vehicle</TableCell>
          <TableCell>Revenue</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {instructors.map((row: Instructor) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.transmission}</TableCell>
            <TableCell>{row.vehicle}</TableCell>
            <TableCell>£{row.revenue.toFixed(2)}</TableCell>
            <TableCell>
              <Button variant="contained" onClick={() => openModal(row)}>
                Open Modal
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  </TableContainer>
);

export default Table;
