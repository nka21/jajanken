import { z } from "zod";

export enum GameResult {
    DRAW = 0,
    LOSE = 1,
    WIN = 2,
}

export enum HandValue {
    ROCK = 0,
    SCISSORS = 1,
    PAPER = 2,
}

export const ChoiceSchema = z.object({
    name: z.enum(["グー", "チョキ", "パー"]),
    emoji: z.string(),
    value: z.enum(["rock", "scissors", "paper"]),
    numericValue: z.nativeEnum(HandValue),
});

export type Choice = z.infer<typeof ChoiceSchema>;
export type ResultType = "" | "あなたの勝ち！" | "コンピューターの勝ち！" | "引き分け！";

export const choices: Choice[] = [
    { name: "グー", emoji: "✊", value: "rock", numericValue: HandValue.ROCK },
    { name: "チョキ", emoji: "✌️", value: "scissors", numericValue: HandValue.SCISSORS },
    { name: "パー", emoji: "✋", value: "paper", numericValue: HandValue.PAPER },
];

export const resultMessages: Record<GameResult, ResultType> = {
    [GameResult.DRAW]: "引き分け！",
    [GameResult.LOSE]: "コンピューターの勝ち！",
    [GameResult.WIN]: "あなたの勝ち！",
} as const;
