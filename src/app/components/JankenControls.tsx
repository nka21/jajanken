import { memo } from "react";

type JankenControlsProps = {
    disabled: boolean;
    onRetry: () => void;
    onReset: () => void;
};

export const JankenControls = memo((props: JankenControlsProps) => {
    const { disabled, onRetry, onReset } = props;

    return (
        <div className="flex space-x-4">
            <button
                type="button"
                onClick={onRetry}
                disabled={disabled}
                className="flex-1 rounded-xl bg-gray-500 px-4 py-3 font-semibold text-white transition-colors duration-200 hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
                もう一度
            </button>
            <button
                type="button"
                onClick={onReset}
                disabled={disabled}
                className="flex-1 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition-colors duration-200 hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
                スコアリセット
            </button>
        </div>
    );
});
