
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook-piece` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook-piece?s=light chess-rook-piece}
 * @preview ![chess-rook-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chess-rook-piece.svg)
 */
const ChessRookPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 112c0-8.8 7.2-16 16-16l256 0c8.8 0 16 7.2 16 16l0 112c0 3.7-1.3 7.4-3.7 10.2l-35.9 43.1 4.4 74.6-32.1 0L232 272.9c-.2-4.1 1.1-8.1 3.7-11.2L272 218.2l0-90.2-48 0 0 24c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-24-64 0 0 24c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-24-48 0 0 90.2 36.3 43.6c2.6 3.1 3.9 7.1 3.7 11.2L83.3 352l-32.1 0 4.4-74.6L19.7 234.2c-2.4-2.9-3.7-6.5-3.7-10.2l0-112zm144 96c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM33.1 468.7c-.7 1.2-1.1 2.5-1.1 3.9c0 4.1 3.3 7.4 7.4 7.4l241.1 0c4.1 0 7.4-3.3 7.4-7.4c0-1.4-.4-2.7-1.1-3.9L254.2 416 65.8 416 33.1 468.7zM254.2 384c11.1 0 21.4 5.7 27.2 15.1l32.7 52.7c3.9 6.2 5.9 13.4 5.9 20.8c0 21.8-17.7 39.4-39.4 39.4L39.4 512C17.7 512 0 494.3 0 472.6c0-7.3 2.1-14.5 5.9-20.8l32.7-52.7c5.8-9.4 16.1-15.1 27.2-15.1l188.4 0z" />
    </Icon>
);

export default ChessRookPiece;