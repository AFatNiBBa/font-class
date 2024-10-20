
import { Icon } from "../../index";

/**
 * A component that renders the `chess-board` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-board?s=sharp-regular chess-board}
 * @preview ![chess-board](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-board.svg)
 */
const ChessBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM128 96l0 64 64 0 0-64 64 0 0 64 64 0 0-64 64 0 0 64-64 0 0 64 64 0 0 64-64 0 0 64 64 0 0 64-64 0 0-64-64 0 0 64-64 0 0-64-64 0 0 64-64 0 0-64 64 0 0-64-64 0 0-64 64 0 0-64-64 0 0-64 64 0zm64 128l64 0 0-64-64 0 0 64zm0 64l0-64-64 0 0 64 64 0zm64 0l-64 0 0 64 64 0 0-64zm0 0l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default ChessBoard;