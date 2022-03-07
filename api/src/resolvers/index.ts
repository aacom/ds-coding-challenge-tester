import { getInstructors } from "./instructor";

export type InstructorsInput = {
  limit?: number;
};

type InstructorsArgs = {
  input: InstructorsInput;
};

const resolvers = {
  Query: {
    instructors: (
      parent: any,
      args: InstructorsArgs,
      context: any,
      info: any
    ) => getInstructors(args.input),
  },
};

export default resolvers;
