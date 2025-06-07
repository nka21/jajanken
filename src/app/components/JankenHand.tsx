import { memo } from "react";
import type { Choice } from "@/types/janken";

type JankenHandProps = {
    label: string;
    choice?: Choice | null;
    isThinking?: boolean;
    accentColor?: "blue" | "red";
};

export const JankenHand = memo((props: JankenHandProps) => {
    const { label, choice, isThinking, accentColor } = props;

    const borderColor =
        accentColor === "blue" ? "border-blue-200 bg-blue-100" : "border-red-200 bg-red-100";

    return (
        <article className="text-center" aria-label={label}>
            <p className="mb-2 text-sm text-gray-600">{label}</p>
            <div
                className={`flex h-20 w-20 items-center justify-center rounded-full border-4 text-4xl ${borderColor} ${isThinking ? "animate-pulse" : ""}`}
            >
                {isThinking ? "🤔" : choice ? choice.emoji : "❓"}
            </div>
        </article>
    );
});
