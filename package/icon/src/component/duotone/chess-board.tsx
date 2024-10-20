
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-board` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-board?s=duotone chess-board}
 * @preview ![chess-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chess-board.svg)
 */
const ChessBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM384 96l0 320L64 416 64 96l320 0z" />
        <path d="M192 96l-64 0 0 64-64 0 0 64 64 0 0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0 0-64zm0 128l-64 0 0-64 64 0 0 64zm64 0l0 64 64 0 0 64-64 0 0-64-64 0 0 64-64 0 0-64 64 0 0-64 64 0zm0 0l0-64 64 0 0 64-64 0z" />
    </Icon>
);

export default ChessBoard;