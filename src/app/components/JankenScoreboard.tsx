import { memo } from "react";

type ScoreDisplayProps = {
    label: string;
    score: number;
    color: string;
};

const ScoreDisplay = memo((props: ScoreDisplayProps) => {
    const { label, score, color } = props;

    return (
        <div className="text-center">
            <span className="text-sm text-gray-600">{label}</span>
            <span className={`block text-2xl font-bold ${color}`}>{score}</span>
        </div>
    );
});

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
            <ScoreDisplay label="あなた" score={playerScore} color="text-blue-600" />
            <span className="text-2xl font-bold text-gray-400" aria-label="対戦">
                VS
            </span>
            <ScoreDisplay label="コンピューター" score={computerScore} color="text-red-600" />
        </section>
    );
});
