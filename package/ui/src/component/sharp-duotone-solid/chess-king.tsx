
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-king` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king?s=sharp-duotone-solid chess-king}
 * @preview ![chess-king](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-king.svg)
 */
const ChessKing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 480l48-48 288 0 48 48 0 32L32 512l0-32z" />
        <path d="M256 32l0-32L192 0l0 32 0 16-16 0-32 0 0 64 32 0 16 0 0 48L0 160l0 48L80 432l288 0 80-224 0-48-192 0 0-48 16 0 32 0 0-64-32 0-16 0 0-16z" />
    </Icon>
);

export default ChessKing;