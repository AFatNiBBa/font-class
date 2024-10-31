
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=sharp-light chess-pawn-piece}
 * @preview ![chess-pawn-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-pawn-piece.svg)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M176 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm16 80l-6.1 0 10.7 96-32.2 0-10.7-96L128 256l-25.7 0L91.7 352l-32.2 0 10.7-96L64 256l-16 0 0-32 16 0c-10-13.4-16-30-16-48c0-44.2 35.8-80 80-80s80 35.8 80 80c0 18-6 34.6-16 48l16 0 0 32-16 0zM32 480l192 0 0-16.7L191.2 416 64.8 416 32 463.3 32 480zM0 480l0-26.7L48 384l160 0 48 69.3 0 26.7 0 32-32 0L32 512 0 512l0-32z" />
    </Icon>
);

export default ChessPawnPiece;