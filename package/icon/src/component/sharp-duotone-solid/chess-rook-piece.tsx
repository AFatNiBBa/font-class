
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-rook-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook-piece?s=sharp-duotone-solid chess-rook-piece}
 * @preview ![chess-rook-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-rook-piece.svg)
 */
const ChessRookPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 480l48-64 224 0 48 64 0 32L0 512l0-32z" />
        <path d="M48 416L72 264 40 224 40 96l56 0 0 48 32 0 0-48 64 0 0 48 32 0 0-48 56 0 0 128-32 40 24 152L48 416zm88-168l0 40 48 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </Icon>
);

export default ChessRookPiece;