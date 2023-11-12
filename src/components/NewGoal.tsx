import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        // Prevent default behavior.
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = goal.current!.value;

        // Clear the input values.
        event.currentTarget.reset();

        onAddGoal(enteredGoal, enteredSummary);

        // One way of doing this.
        // new FormData(event.currentTarget);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='goal'>Your Goal</label>
                <input type='text' id='goal' ref={goal} />
            </p>
            <p>
                <label htmlFor='summary'>Short Summary</label>
                <input type='text' id='summary' ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
};

export default NewGoal;
