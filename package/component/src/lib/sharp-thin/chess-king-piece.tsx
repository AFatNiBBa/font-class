
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king-piece` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king-piece?s=sharp-thin chess-king-piece}
 * @preview ![chess-king-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-king-piece.svg)
 */
const ChessKingPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M136 8l0-8L120 0l0 8 0 24L88 32l-8 0 0 16 8 0 32 0 0 48L56 96 40 96l0 16 0 16 36.9 96L64 224l-8 0 0 16 8 0 14.7 0-23 144 16.2 0 23-144 66.2 0 23 144 16.2 0-23-144 14.7 0 8 0 0-16-8 0-12.9 0L216 128l0-16 0-16-16 0-64 0 0-48 32 0 8 0 0-16-8 0-32 0 0-24zM120 112l16 0 64 0 0 13-38.1 99-67.9 0L56 125l0-13 64 0zM48 416l-3.7 0-2.4 2.9-40 48L0 469.1 0 472l0 32 0 8 8 0 240 0 8 0 0-8 0-32 0-2.9-1.9-2.2-40-48-2.4-2.9-3.7 0L48 416zM16 474.9L51.7 432l152.5 0L240 474.9l0 21.1L16 496l0-21.1z" />
    </Icon>
);

export default ChessKingPiece;