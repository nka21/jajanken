import { memo } from "react";

type JankenScoreboardProps = {
    playerScore: number;
    computerScore: number;
};

export const JankenScoreboard = memo((props: JankenScoreboardProps) => {
    const { playerScore, computerScore } = props;

    return (
        <section
            aria-label="スコアボード"
            className="mb-6 flex items-center justify-between rounded-xl bg-gray-100 p-4"
        >
            <div className="text-center">
                <span className="text-sm text-gray-600">あなた</span>
                <span className="block text-2xl font-bold text-blue-600">{playerScore}</span>
            </div>
            <span className="text-2xl font-bold text-gray-400" aria-label="対戦">
                VS
            </span>
            <div className="text-center">
                <span className="text-sm text-gray-600">コンピューター</span>
                <span className="block text-2xl font-bold text-red-600">{computerScore}</span>
            </div>
        </section>
    );
});
