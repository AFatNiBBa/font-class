
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=sharp-solid chess-pawn-piece}
 * @preview ![chess-pawn-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-pawn-piece.svg)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M176 240c19.4-14.6 32-37.8 32-64c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 26.2 12.6 49.4 32 64l-8 0-24 0 0 48 24 0 5.7 0L64 384l128 0-13.7-96 5.7 0 24 0 0-48-24 0-8 0zM0 512l256 0 0-32-48-64L48 416 0 480l0 32z" />
    </Icon>
);

export default ChessPawnPiece;