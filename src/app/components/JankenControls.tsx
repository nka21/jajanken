import { memo } from "react";

type ControlButtonProps = {
    onClick: () => void;
    disabled: boolean;
    className: string;
    children: React.ReactNode;
};

const ControlButton = memo((props: ControlButtonProps) => {
    const { onClick, disabled, className, children } = props;

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`flex-1 rounded-xl px-4 py-3 font-semibold text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        >
            {children}
        </button>
    );
});

type JankenControlsProps = {
    disabled: boolean;
    onRetry: () => void;
    onReset: () => void;
};

export const JankenControls = memo((props: JankenControlsProps) => {
    const { disabled, onRetry, onReset } = props;

    return (
        <div className="flex space-x-4">
            <ControlButton
                onClick={onRetry}
                disabled={disabled}
                className="bg-gray-500 hover:bg-gray-600"
            >
                もう一度
            </ControlButton>
            <ControlButton
                onClick={onReset}
                disabled={disabled}
                className="bg-red-500 hover:bg-red-600"
            >
                スコアリセット
            </ControlButton>
        </div>
    );
});
