
import { Icon } from "../../index";

/**
 * A component that renders the `chess-board` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-board?s=light chess-board}
 * @preview ![chess-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chess-board.svg)
 */
const ChessBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm88 0l64 0 72 0 72 0 64 0c13.3 0 24 10.7 24 24l0 64 0 72 0 72 0 64c0 13.3-10.7 24-24 24l-64 0-72 0-72 0-64 0c-13.3 0-24-10.7-24-24l0-64 0-72 0-72 0-64c0-13.3 10.7-24 24-24zm8 72l40 0 0-40-40 0 0 40zm72 0l40 0 0-40-40 0 0 40zm72 0l40 0 0-40-40 0 0 40zm72 0l40 0 0-40-40 0 0 40zm0 32l0 40 40 0 0-40-40 0zm0 72l0 40 40 0 0-40-40 0zm0 72l0 40 40 0 0-40-40 0zm-32 0l-40 0 0 40 40 0 0-40zm-72 0l-40 0 0 40 40 0 0-40zm-72 0l-40 0 0 40 40 0 0-40zm0-32l0-40-40 0 0 40 40 0zm0-72l0-40-40 0 0 40 40 0zm32 0l40 0 0-40-40 0 0 40zm72 0l40 0 0-40-40 0 0 40zm0 32l0 40 40 0 0-40-40 0zm-32 0l-40 0 0 40 40 0 0-40z" />
    </Icon>
);

export default ChessBoard;