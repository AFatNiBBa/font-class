
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock-flip` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock-flip?s=solid chess-clock-flip}
 * @preview ![chess-clock-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chess-clock-flip.svg)
 */
const ChessClockFlip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 56c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 48 88 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l32 0 0-16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16l0 16 184 0 0-48-32 0c-13.3 0-24-10.7-24-24zM288 304A112 112 0 1 0 64 304a112 112 0 1 0 224 0zm-52.7-59.3c6.2 6.2 6.2 16.4 0 22.6l-48 48c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l48-48c6.2-6.2 16.4-6.2 22.6 0zM464 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm16-176l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default ChessClockFlip;