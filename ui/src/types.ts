
export interface Lesson {
    name: string;
    instructorId: number;
    price: string;
}

export interface Instructor {
    id: number;
    name: string;
    transmission: string;
    vehicle: string;
    lessons: Lesson[];
    revenue: number;
}
