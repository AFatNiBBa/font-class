
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-king-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king-piece?s=sharp-duotone-solid chess-king-piece}
 * @preview ![chess-king-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-king-piece.svg)
 */
const ChessKingPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 480l0 32 256 0 0-32-48-64L48 416 0 480z" />
        <path d="M144 0l0 16 0 16 16 0 16 0 0 32-16 0-16 0 0 32 72 0 0 24-25.9 88 17.9 0 0 48-24 0-8 0 32 160L48 416 80 256l-8 0-24 0 0-48 17.9 0L40 120l0-24 72 0 0-32L96 64 80 64l0-32 16 0 16 0 0-16 0-16 32 0z" />
    </Icon>
);

export default ChessKingPiece;