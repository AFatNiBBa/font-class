
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook?s=sharp-solid chess-rook}
 * @preview ![chess-rook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-rook.svg)
 */
const ChessRook: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 208L32 32l96 0 0 64 48 0 0-64 96 0 0 64 48 0 0-64 96 0 0 176-64 48 16 144L80 400 96 256 32 208zm160 16l0 64 64 0 0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zM16 512l0-32 48-48 320 0 48 48 0 32L16 512z" />
    </Icon>
);

export default ChessRook;