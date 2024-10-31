
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-rook` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook?s=sharp-duotone-solid chess-rook}
 * @preview ![chess-rook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-rook.svg)
 */
const ChessRook: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 480l48-48 288 0 48 48 0 32L32 512l0-32z" />
        <path d="M32 32l0 176 64 48L80 432l288 0L352 256l64-48 0-176-96 0 0 64-48 0 0-64-96 0 0 64-48 0 0-64L32 32zM224 192c17.7 0 32 14.3 32 32l0 64-64 0 0-64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default ChessRook;