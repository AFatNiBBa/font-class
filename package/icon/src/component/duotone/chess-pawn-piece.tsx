
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=duotone chess-pawn-piece}
 * @preview ![chess-pawn-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chess-pawn-piece.svg)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416 48 416 4.8 473.6C1.7 477.8 0 482.8 0 488z" />
        <path d="M176 240c19.4-14.6 32-37.8 32-64c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 26.2 12.6 49.4 32 64l-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l4.4 0L48 416l160 0L179.6 288l4.4 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0z" />
    </Icon>
);

export default ChessPawnPiece;