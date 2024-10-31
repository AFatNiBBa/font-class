
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-knight-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight-piece?s=sharp-duotone-solid chess-knight-piece}
 * @preview ![chess-knight-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-knight-piece.svg)
 */
const ChessKnightPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 477.4L0 512l320 0 0-34.6L272 416 48 416 0 477.4z" />
        <path d="M32 128l25.6-25.6L32 89.6 32 64l98.6 0C226.4 64 304 141.6 304 237.4c0 11.3-1.1 22.6-3.3 33.7L272 416 48 416l0-78.4 112-83.2 0-32L70.4 280 32 248l0-120zm60.8 44.8a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ChessKnightPiece;