
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=sharp-regular chess-pawn-piece}
 * @preview ![chess-pawn-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-pawn-piece.svg)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M128 144a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm73.4 144l22.6 0 0-48-12.8 0c8.2-14.1 12.8-30.5 12.8-48c0-53-43-96-96-96s-96 43-96 96c0 17.5 4.7 33.9 12.8 48L32 240l0 48 22.6 0-3.6 64 48.1 0 3.6-64 25.3 0 25.3 0 3.6 64 48.1 0-3.6-64zM53.8 464l17.8-32 112.9 0 17.8 32L53.8 464zM256 461.9L212.7 384 43.3 384 0 461.9 0 464l0 48 48 0 160 0 48 0 0-48 0-2.1z" />
    </Icon>
);

export default ChessPawnPiece;