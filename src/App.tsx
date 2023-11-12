import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import NewGoal from './components/NewGoal';

import goalsImg from './assets/goals.jpg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';

type CourseGoal = {
    title: string;
    description: string;
    id: number;
};

export default function App() {
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    const handleAddGoal = (goal: string, summary: string) => {
        // ...
        setGoals((prevGoals) => {
            const newGoal: CourseGoal = {
                description: summary,
                id: Math.random(),
                title: goal,
            };
            return [...prevGoals, newGoal];
        });
    };

    const handleDeleteGoal = (id: number) => {
        setGoals((prevGoals) => prevGoals.filter((x) => x.id !== id));
    };

    return (
        <main>
            <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
                <h1>Your course goals</h1>
            </Header>
            {/* <button onClick={handleAddGoal}>Add Goal</button> */}
            <NewGoal onAddGoal={handleAddGoal} />
            <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
        </main>
    );
}
