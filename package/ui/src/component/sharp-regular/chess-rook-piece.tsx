
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook-piece` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook-piece?s=sharp-regular chess-rook-piece}
 * @preview ![chess-rook-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-rook-piece.svg)
 */
const ChessRookPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 96l24 0 240 0 24 0 0 24 0 104 0 8.7-5.6 6.7-33.9 40.7 4.2 71.9-48.1 0L216 273.4l-.6-9.5 6.1-7.3L256 215.3l0-71.3-40 0 0 16 0 16-32 0 0-16 0-16-48 0 0 16 0 16-32 0 0-16 0-16-40 0 0 71.3 34.4 41.3 6.1 7.3-.6 9.5L99.3 352l-48.1 0 4.2-71.9L21.6 239.4 16 232.7l0-8.7 0-104 0-24zM136 248c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40-48 0 0-40zM53.8 464l212.5 0-17.8-32L71.5 432 53.8 464zM320 461.9l0 2.1 0 48-48 0L48 512 0 512l0-48 0-2.1L43.3 384l233.4 0L320 461.9z" />
    </Icon>
);

export default ChessRookPiece;