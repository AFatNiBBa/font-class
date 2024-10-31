
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop-piece` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop-piece?s=sharp-solid chess-bishop-piece}
 * @preview ![chess-bishop-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-bishop-piece.svg)
 */
const ChessBishopPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M80 32l96 0 0 48-20.7 0c6.7 6.4 14.3 14.5 21.7 24.4l-44.3 44.3L121.4 160 144 182.6l11.3-11.3 38.8-38.8c8.2 17.1 13.9 37 13.9 59.5c0 26.3-13.6 40.5-26.3 48l2.3 0 24 0 0 48-24 0-5.7 0L192 384 64 384l13.7-96L72 288l-24 0 0-48 24 0 2.3 0C61.6 232.5 48 218.3 48 192c0-52.8 31.4-91.7 52.7-112L80 80l0-48zM43.9 416l4.1 0 160 0 4.1 0 2.4 3.4 40 56 1.5 2.1 0 2.6 0 24 0 8-8 0L8 512l-8 0 0-8 0-24 0-2.6 1.5-2.1 40-56 2.4-3.4z" />
    </Icon>
);

export default ChessBishopPiece;