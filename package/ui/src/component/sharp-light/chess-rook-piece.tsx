
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook-piece` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook-piece?s=sharp-light chess-rook-piece}
 * @preview ![chess-rook-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-rook-piece.svg)
 */
const ChessRookPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 144l0-16-48 0 0 90.2 36.3 43.6 4.1 4.9-.4 6.3L83.3 352l-32.1 0 4.4-74.6L19.7 234.2 16 229.8l0-5.8 0-112 0-16 16 0 64 0 32 0 64 0 32 0 64 0 16 0 0 16 0 112 0 5.8-3.7 4.4-35.9 43.1 4.4 74.6-32.1 0L232 272.9l-.4-6.3 4.1-4.9L272 218.2l0-90.2-48 0 0 16 0 16-32 0 0-16 0-16-64 0 0 16 0 16-32 0 0-16zM32 480l256 0 0-16.7L255.2 416 64.8 416 32 463.3 32 480zM0 480l0-26.7L48 384l224 0 48 69.3 0 26.7 0 32-32 0L32 512 0 512l0-32zM176 224l0 32 0 16-32 0 0-16 0-32 0-16 32 0 0 16z" />
    </Icon>
);

export default ChessRookPiece;