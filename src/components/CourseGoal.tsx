// import { type PropsWithChildren, type ReactNode } from 'react';
// import { type FC, type PropsWithChildren } from 'react';
import { type PropsWithChildren } from 'react';

// Also acceptable.
// type CourseGoalProps = {
//     title: string;
//     description: string;
// };

// Also acceptable.
// interface CourseGoalProps {
//     title: string;
//     children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;

// const CourseGoals: FC<CourseGoalProps> = ({ title, children }: CourseGoalProps) => {
const CourseGoal = ({ title, id, children, onDelete }: CourseGoalProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
};

export default CourseGoal;
