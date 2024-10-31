
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-rook-piece` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook-piece?s=duotone chess-rook-piece}
 * @preview ![chess-rook-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chess-rook-piece.svg)
 */
const ChessRookPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L272 416 48 416 4.8 473.6C1.7 477.8 0 482.8 0 488z" />
        <path d="M48 416L72 264 47 232.8c-4.5-5.7-7-12.7-7-20L40 112c0-8.8 7.2-16 16-16l24 0c8.8 0 16 7.2 16 16l0 24c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-24c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 24c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-24c0-8.8 7.2-16 16-16l24 0c8.8 0 16 7.2 16 16l0 100.8c0 7.3-2.5 14.3-7 20L248 264l24 152L48 416zm88-135.1c0 3.9 3.2 7.1 7.1 7.1l33.8 0c3.9 0 7.1-3.2 7.1-7.1l0-32.9c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 32.9z" />
    </Icon>
);

export default ChessRookPiece;