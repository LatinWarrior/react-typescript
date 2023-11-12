import { PropsWithChildren, ReactNode } from 'react';
import CourseGoal from './CourseGoal';
import { CourseGoalType } from './CourseGoalType';
import InfoBox from './InfoBox';

type CourseGoalListProps = PropsWithChildren<{
    goals: CourseGoalType[];
    onDeleteGoal: (id: number) => void;
}>;

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
    if (goals.length === 0) {
        return (
            <InfoBox mode='hint'>
                You have no course goals yet. Start adding some!
            </InfoBox>
        );
    }

    let warningBox: ReactNode;

    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode='warning' severity='medium'>
                You're collecting too many goals. Don't put too much on your
                plate.
            </InfoBox>
        );
    }

    return (
        <>
            {warningBox}
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
        </>
    );
};

export default CourseGoalList;
