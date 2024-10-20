
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-board` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-board?s=sharp-duotone-solid chess-board}
 * @preview ![chess-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-board.svg)
 */
const ChessBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M448 32L0 32 0 480l448 0 0-448zM384 96l0 320L64 416 64 96l320 0z" />
        <path d="M192 96l-64 0 0 64-64 0 0 64 64 0 0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0 0-64zm0 128l-64 0 0-64 64 0 0 64zm64 0l0 64 64 0 0 64-64 0 0-64-64 0 0 64-64 0 0-64 64 0 0-64 64 0zm0 0l0-64 64 0 0 64-64 0z" />
    </Icon>
);

export default ChessBoard;