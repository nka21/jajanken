import { memo, useMemo } from "react";

type JankenResultProps = {
    result: string;
};

export const JankenResult = memo((props: JankenResultProps) => {
    const { result } = props;

    if (!result) return null;

    const colorClass = useMemo(() => {
        if (result.includes("あなたの勝ち")) return "bg-green-100 text-green-700";
        if (result.includes("コンピューターの勝ち")) return "bg-red-100 text-red-700";
        return "bg-yellow-100 text-yellow-700";
    }, [result]);

    return (
        <output
            aria-live="polite"
            className={`mb-4 rounded-xl p-3 text-2xl font-bold ${colorClass}`}
        >
            {result}
        </output>
    );
});
