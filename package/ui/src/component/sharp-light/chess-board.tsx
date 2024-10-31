
import { Icon } from "../../index";

/**
 * A component that renders the `chess-board` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-board?s=sharp-light chess-board}
 * @preview ![chess-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-board.svg)
 */
const ChessBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM80 96l72 0 72 0 72 0 72 0 16 0 0 16 0 72 0 72 0 72 0 72 0 16-16 0-72 0-72 0-72 0-72 0-16 0 0-16 0-72 0-72 0-72 0-72 0-16 16 0zm16 72l40 0 0-40-40 0 0 40zm72 0l40 0 0-40-40 0 0 40zm72 0l40 0 0-40-40 0 0 40zm72 0l40 0 0-40-40 0 0 40zm0 32l0 40 40 0 0-40-40 0zm0 72l0 40 40 0 0-40-40 0zm0 72l0 40 40 0 0-40-40 0zm-32 0l-40 0 0 40 40 0 0-40zm-72 0l-40 0 0 40 40 0 0-40zm-72 0l-40 0 0 40 40 0 0-40zm0-32l0-40-40 0 0 40 40 0zm0-72l0-40-40 0 0 40 40 0zm32 0l40 0 0-40-40 0 0 40zm72 0l40 0 0-40-40 0 0 40zm0 32l0 40 40 0 0-40-40 0zm-32 0l-40 0 0 40 40 0 0-40z" />
    </Icon>
);

export default ChessBoard;