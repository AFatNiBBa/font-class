
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook-piece` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook-piece?s=sharp-solid chess-rook-piece}
 * @preview ![chess-rook-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-rook-piece.svg)
 */
const ChessRookPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M67.4 384L80 264 40 224 40 96l56 0 0 48 32 0 0-48 64 0 0 48 32 0 0-48 56 0 0 128-40 40 12.6 120L67.4 384zM136 248l0 40 48 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24zM16 512l0-32 48-64 192 0 48 64 0 32L16 512z" />
    </Icon>
);

export default ChessRookPiece;