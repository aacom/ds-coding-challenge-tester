import React, { ReactEventHandler, useState } from "react";
import gql from "graphql-tag";
import Container from "@material-ui/core/Container";
import { Query, QueryResult } from "@apollo/react-components";
import { Instructor } from "./types";

import Table from "./components/Table";
import Modal from "./components/Modal";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const INSTRUCTORS_QUERY = gql`
  query($input: InstructorsInput!) {
    instructors(input: $input) {
      id
      name
      transmission
      vehicle
      revenue
      lessons {
        name
        price
      }
    }
  }
`;

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [instructor, setInstructor] = useState<Instructor>();
  const [limit, setLimit] = useState(15);

  const openModal = (instructor: Instructor) => {
    setInstructor(instructor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <FormControl style={{ alignSelf: "flex-end" }}>
          <InputLabel id="select-helper-label">Limit</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={limit}
            onChange={(
              event: React.ChangeEvent<{
                name?: string | undefined;
                value: unknown;
              }>
            ) => setLimit(event.target.value as number)}
          >
            <MenuItem value={-1}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
        <Query
          query={INSTRUCTORS_QUERY}
          variables={{
            input: { limit },
          }}
        >
          {({ data }: QueryResult<{ instructors: Instructor[] }>) => (
            <Table instructors={data?.instructors} openModal={openModal} />
          )}
        </Query>
      </Container>
      <Modal open={isModalOpen} onClose={closeModal} instructor={instructor} />
    </div>
  );
};

export default App;
