
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king-piece` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king-piece?s=thin chess-king-piece}
 * @preview ![chess-king-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chess-king-piece.svg)
 */
const ChessKingPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M136 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 24L88 32c-4.4 0-8 3.6-8 8s3.6 8 8 8l32 0 0 48L72 96c-17.7 0-32 14.3-32 32l0 1.6c0 4.2 .8 8.4 2.5 12.3L76.7 224 64 224c-4.4 0-8 3.6-8 8s3.6 8 8 8l14.7 0-23 144 16.2 0 23-144 66.2 0 23 144 16.2 0-23-144 14.7 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-12.7 0 34.2-82.1c1.6-3.9 2.5-8.1 2.5-12.3l0-1.6c0-17.7-14.3-32-32-32l-48 0 0-48 32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-32 0 0-24zm62.8 127.8L162 224l-68 0L57.2 135.8c-.8-2-1.2-4-1.2-6.2l0-1.6c0-8.8 7.2-16 16-16l112 0c8.8 0 16 7.2 16 16l0 1.6c0 2.1-.4 4.2-1.2 6.2zM56.2 416c-7.8 0-15 3.7-19.5 10.1L4.5 471.2C1.6 475.2 0 480.1 0 485.1L0 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24l0-2.9c0-5-1.6-9.9-4.5-13.9l-32.2-45.1c-4.5-6.3-11.8-10.1-19.5-10.1L56.2 416zm-6.5 19.4c1.5-2.1 3.9-3.4 6.5-3.4l143.5 0c2.6 0 5 1.2 6.5 3.4l32.2 45.1c1 1.4 1.5 3 1.5 4.6l0 2.9c0 4.4-3.6 8-8 8L24 496c-4.4 0-8-3.6-8-8l0-2.9c0-1.7 .5-3.3 1.5-4.6l32.2-45.1z" />
    </Icon>
);

export default ChessKingPiece;