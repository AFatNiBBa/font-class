
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=light chess-pawn-piece}
 * @preview ![chess-pawn-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chess-pawn-piece.svg)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M176 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm16 80l-6.1 0 10.7 96-32.2 0-10.7-96L128 256l-25.7 0L91.6 352l-32.2 0 10.7-96L64 256c-8.8 0-16-7.2-16-16s7.2-16 16-16c-10-13.4-16-30-16-48c0-44.2 35.8-80 80-80s80 35.8 80 80c0 18-6 34.6-16 48c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-1.8 128c11.1 0 21.4 5.7 27.2 15.1l32.7 52.7c3.9 6.2 5.9 13.4 5.9 20.8c0 21.8-17.7 39.4-39.4 39.4L39.4 512C17.7 512 0 494.3 0 472.6c0-7.3 2.1-14.5 5.9-20.8l32.7-52.7c5.8-9.4 16.1-15.1 27.2-15.1l124.4 0zM33.1 468.7c-.7 1.2-1.1 2.5-1.1 3.9c0 4.1 3.3 7.4 7.4 7.4l177.1 0c4.1 0 7.4-3.3 7.4-7.4c0-1.4-.4-2.7-1.1-3.9L190.2 416 65.8 416 33.1 468.7z" />
    </Icon>
);

export default ChessPawnPiece;