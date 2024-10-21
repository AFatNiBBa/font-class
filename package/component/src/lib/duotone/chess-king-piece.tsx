
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-king-piece` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king-piece?s=duotone chess-king-piece}
 * @preview ![chess-king-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chess-king-piece.svg)
 */
const ChessKingPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416 48 416 4.8 473.6C1.7 477.8 0 482.8 0 488z" />
        <path d="M128 0c8.8 0 16 7.2 16 16l0 16 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 32 51.8 0c11.2 0 20.2 9.1 20.2 20.2c0 2.5-.5 4.9-1.3 7.3L182.2 208l1.8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-2.7 0L208 416 48 416 74.7 256 72 256c-13.3 0-24-10.7-24-24s10.7-24 24-24l1.8 0L41.3 123.5c-.9-2.3-1.3-4.8-1.3-7.3C40 105.1 49.1 96 60.2 96L112 96l0-32L96 64c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 0-16c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default ChessKingPiece;