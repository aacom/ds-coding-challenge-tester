import { InstructorsInput } from ".";
import { default as instructorData } from "../data/instructors.json";
import { default as lessonData } from "../data/lessons.json";

type Lesson = {
  name: string;
  instructorId: number;
  price: number;
};

type Instructor = {
  id: number;
  name: string;
  transmission: string;
  vehicle: string;
  lessons: Lesson[] | [];
  revenue: number | 0;
};

export const getInstructors = (input: InstructorsInput): Instructor[] => {
  console.log({ input });
  let mappedInstructors = instructorData.map((instructor: Instructor) => {
    const lessons = getLessonsForInstructor(instructor.id);
    return {
      ...instructor,
      lessons,
      revenue: getRevenueForLessons(lessons),
    };
  });
  if (input?.limit) {
    mappedInstructors = mappedInstructors.slice(0, input.limit);
  }
  return mappedInstructors;
};

export const getLessonsForInstructor = (id: number): Lesson[] =>
  lessonData.filter(({ instructorId }: Lesson) => instructorId === id);

export const getRevenueForLessons = (lessons: Lesson[]): number =>
  lessons.reduce((total: number, lesson: Lesson) => total + lesson.price, 0);
