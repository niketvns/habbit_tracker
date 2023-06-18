import {v4 as uuid} from "uuid";

export const allHabits = [
    {
        id: uuid(),
        thumbnail: "habit1.jpg",
        name: "Exercise",
        start: "2023-06-01",
        repeat: "Daily",
        category: 'home',
        goal: "Stay fit and healthy",
        timeOfDay: "morning"
    },
    {
        id: uuid(),
        thumbnail: "habit2.jpg",
        name: "Meditation",
        start: "2023-06-02",
        repeat: "Daily",
        category: 'home',
        goal: "Find inner peace",
        timeOfDay: "morning"
    },
    {
        id: uuid(),
        thumbnail: "habit3.jpg",
        name: "Reading",
        start: "2023-06-03",
        repeat: "Weekly",
        category: 'home',
        goal: "Read 2 books per month",
        timeOfDay: "evening"
    },
    // Add more habit objects as needed
];
