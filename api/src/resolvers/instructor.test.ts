import {
  getInstructors,
  getLessonsForInstructor,
  getRevenueForLessons,
} from "./instructor";

describe("getInstructors", () => {
  it("correctly fetches instructors", () => {
    const result = getInstructors();
    expect(result).toEqual([
      {
        id: 1,
        name: "James Morling",
        transmission: "Manual",
        vehicle: "Ford Fiesta",
        lessons: [
          {
            name: "James Jones",
            instructorId: 1,
            price: 25.0,
          },
          {
            name: "David Davies",
            instructorId: 1,
            price: 25.0,
          },
          {
            name: "Barry Davies",
            instructorId: 1,
            price: 22.0,
          },
        ],
        revenue: 72,
      },
      {
        id: 2,
        name: "Terry Cruz",
        transmission: "Manual",
        vehicle: "Ford Fiesta ST",
        lessons: [
          {
            name: "Kenny Buck",
            instructorId: 2,
            price: 29.5,
          },
        ],
        revenue: 29.5,
      },
      {
        id: 3,
        name: "Terry Bollea",
        transmission: "Automatic",
        vehicle: "Seat Ibiza",
        lessons: [
          {
            name: "Lance Archer",
            instructorId: 3,
            price: 19.99,
          },
        ],
        revenue: 19.99,
      },
    ]);
  });
});

describe("getLessonsForInstructor", () => {
  it("correctly gets lessons for an instructor", () => {
    const result = getLessonsForInstructor(1);
    expect(result).toEqual([
      {
        name: "James Jones",
        instructorId: 1,
        price: 25.0,
      },
      {
        name: "David Davies",
        instructorId: 1,
        price: 25.0,
      },
      {
        name: "Barry Davies",
        instructorId: 1,
        price: 22.0,
      },
    ]);
  });
});

describe("getRevenueForLessons", () => {
  it("correctly calculates revenue for lessons", () => {
    const result = getRevenueForLessons([
      {
        name: "James Jones",
        instructorId: 1,
        price: 25.0,
      },
      {
        name: "David Davies",
        instructorId: 1,
        price: 25.0,
      },
      {
        name: "Barry Davies",
        instructorId: 1,
        price: 22.0,
      },
    ]);
    expect(result).toEqual(72);
  });
});
