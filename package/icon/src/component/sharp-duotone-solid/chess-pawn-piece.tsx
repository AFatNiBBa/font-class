
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=sharp-duotone-solid chess-pawn-piece}
 * @preview ![chess-pawn-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-pawn-piece.svg)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 480l48-64 160 0 48 64 0 32L0 512l0-32z" />
        <path d="M176 240c19.4-14.6 32-37.8 32-64c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 26.2 12.6 49.4 32 64l-8 0-24 0 0 48 24 0 4.4 0L48 416l160 0L179.6 288l4.4 0 24 0 0-48-24 0-8 0z" />
    </Icon>
);

export default ChessPawnPiece;