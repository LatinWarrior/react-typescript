import { PropsWithChildren } from 'react';
import CourseGoal from './CourseGoal';
import { CourseGoalType } from './CourseGoalType';

type CourseGoalListProps = PropsWithChildren<{
    goals: CourseGoalType[];
    onDeleteGoal: (id: number) => void;
}>;

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
    return (
        <ul>
            {goals.map((goal: CourseGoalType) => (
                <li key={goal.id}>
                    <CourseGoal
                        id={goal.id}
                        title={goal.title}
                        onDelete={onDeleteGoal}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    );
};

export default CourseGoalList;
