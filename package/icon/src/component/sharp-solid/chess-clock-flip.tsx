
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock-flip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock-flip?s=sharp-solid chess-clock-flip}
 * @preview ![chess-clock-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-clock-flip.svg)
 */
const ChessClockFlip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 32l160 0 0 48-56 0 0 48 152 0 0 352L0 480 0 128l96 0 0-32 160 0 0 32 184 0 0-48-56 0 0-48zM288 304A112 112 0 1 0 64 304a112 112 0 1 0 224 0zm-41.4-48l-11.3 11.3-48 48L176 326.6 153.4 304l11.3-11.3 48-48L224 233.4 246.6 256zM464 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm16-176l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default ChessClockFlip;