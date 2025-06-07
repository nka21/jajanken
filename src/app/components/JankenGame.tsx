"use client";

import { useCallback, useState } from "react";
import { JankenScoreboard } from "@/components/JankenScoreboard";
import { JankenHand } from "@/components/JankenHand";
import { Choice, choices, ResultType, GameResult, resultMessages } from "@/types/janken";
import { JankenChoices } from "@/components/JankenChoices";
import { JankenResult } from "@/components/JankenResult";
import { JankenControls } from "@/components/JankenControls";

/**
 * 0 -> あいこ
 * 1 -> プレイヤーの負け
 * 2 -> プレイヤーの勝ち
 */
function calculateGameResult(player: Choice, computer: Choice): GameResult {
    return ((player.numericValue - computer.numericValue + 3) % 3) as GameResult;
}

/**
 * 出す手をランダムに選ぶ
 */
function getRandomChoice(): Choice {
    return choices[Math.floor(Math.random() * choices.length)];
}

export function JankenGame() {
    const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
    const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState<ResultType>("");

    const [score, setScore] = useState({ player: 0, computer: 0 });
    const [isPlaying, setIsPlaying] = useState(false);

    /**
     * ゲームを実行する関数
     */
    const playGame = useCallback((selected: Choice) => {
        setIsPlaying(true);
        setPlayerChoice(selected);
        setComputerChoice(null);

        setTimeout(() => {
            const computer = getRandomChoice();
            setComputerChoice(computer);
            const gameResult = calculateGameResult(selected, computer);

            setResult(resultMessages[gameResult]);

            // スコア更新
            if (gameResult === GameResult.WIN) {
                setScore((prev) => ({ ...prev, player: prev.player + 1 }));
            } else if (gameResult === GameResult.LOSE) {
                setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
            }

            setIsPlaying(false);
        }, 1000);
    }, []);

    /**
     * スコアはリセットせずに、UIのみをリセット
     */
    const resetGame = useCallback(() => {
        setPlayerChoice(null);
        setComputerChoice(null);
        setResult("");
        setIsPlaying(false);
    }, []);

    /**
     * スコア、UIともにリセット
     */
    const resetScore = useCallback(() => {
        setScore({ player: 0, computer: 0 });
        resetGame();
    }, [resetGame]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
            <section
                className="w-full max-w-md rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm"
                aria-label="じゃんけんゲーム"
            >
                <header>
                    <h1 className="mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-4xl font-bold text-transparent">
                        じゃじゃんけん
                    </h1>
                </header>

                <JankenScoreboard playerScore={score.player} computerScore={score.computer} />

                <section className="mb-8 text-center" aria-label="現在の対戦状況">
                    <div className="mb-6 flex items-center justify-center space-x-8">
                        <JankenHand label="あなた" choice={playerChoice} accentColor="blue" />
                        <span className="text-2xl font-bold text-gray-400" aria-label="対戦">
                            VS
                        </span>
                        <JankenHand
                            label="コンピューター"
                            choice={computerChoice}
                            isThinking={isPlaying}
                            accentColor="red"
                        />
                    </div>
                    <JankenResult result={result} />
                </section>

                <JankenChoices choices={choices} disabled={isPlaying} onSelect={playGame} />

                <JankenControls disabled={isPlaying} onRetry={resetGame} onReset={resetScore} />

                <footer className="mt-6 text-center text-sm text-gray-600">
                    <p>グー、チョキ、パーのいずれかを選んでゲームを開始！</p>
                </footer>
            </section>
        </main>
    );
}
