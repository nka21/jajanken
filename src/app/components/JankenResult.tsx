import { memo } from "react";

type JankenResultProps = {
    result: string;
};

export const JankenResult = memo((props: JankenResultProps) => {
    const { result } = props;

    if (!result) return null;
    const color = result.includes("あなたの勝ち")
        ? "bg-green-100 text-green-700"
        : result.includes("コンピューターの勝ち")
          ? "bg-red-100 text-red-700"
          : "bg-yellow-100 text-yellow-700";
    return (
        <output aria-live="polite" className={`mb-4 rounded-xl p-3 text-2xl font-bold ${color}`}>
            {result}
        </output>
    );
});
