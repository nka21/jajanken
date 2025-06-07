import { memo, useCallback } from "react";
import { Choice } from "@/types/janken";

type ChoiceButtonProps = {
    choice: Choice;
    disabled: boolean;
    onSelect: (choice: Choice) => void;
};

const ChoiceButton = memo((props: ChoiceButtonProps) => {
    const { choice, disabled, onSelect } = props;

    const handleClick = useCallback(() => {
        if (!disabled) {
            onSelect(choice);
        }
    }, [choice, onSelect]);

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={disabled}
            className="rounded-2xl border-2 border-gray-200 bg-gradient-to-b from-white to-gray-100 p-4 transition-all duration-200 hover:scale-105 hover:from-gray-50 hover:to-gray-200 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={choice.name}
        >
            <span className="mb-2 block text-4xl">{choice.emoji}</span>
            <span className="text-sm font-semibold text-gray-700">{choice.name}</span>
        </button>
    );
});

type JankenChoicesProps = {
    choices: Choice[];
    disabled: boolean;
    onSelect: (choice: Choice) => void;
};

export const JankenChoices = memo((props: JankenChoicesProps) => {
    const { choices, disabled, onSelect } = props;

    return (
        <nav aria-label="じゃんけんの手の選択" className="mb-6 grid grid-cols-3 gap-4">
            {choices.map((choice) => (
                <ChoiceButton
                    key={choice.value}
                    choice={choice}
                    disabled={disabled}
                    onSelect={onSelect}
                />
            ))}
        </nav>
    );
});
