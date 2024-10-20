
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king-piece` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king-piece?s=sharp-solid chess-king-piece}
 * @preview ![chess-king-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-king-piece.svg)
 */
const ChessKingPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M144 16l0-16L112 0l0 16 0 16L96 32 80 32l0 32 16 0 16 0 0 32L40 96l0 32 28.6 80L48 208l0 48 24 0 5.8 0L60.4 384l135.3 0L178.2 256l5.8 0 24 0 0-48-20.6 0L216 128l0-32-72 0 0-32 16 0 16 0 0-32-16 0-16 0 0-16zM43.9 416l-2.4 3.4-40 56L0 477.4 0 480l0 24 0 8 8 0 240 0 8 0 0-8 0-24 0-2.6-1.5-2.1-40-56-2.4-3.4-4.1 0L48 416l-4.1 0z" />
    </Icon>
);

export default ChessKingPiece;