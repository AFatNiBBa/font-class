
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king?s=sharp-solid chess-king}
 * @preview ![chess-king](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-king.svg)
 */
const ChessKing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 0l0 32 0 16 16 0 32 0 0 64-32 0-16 0 0 48 192 0 0 48L368 400 80 400 0 208l0-48 192 0 0-48-16 0-32 0 0-64 32 0 16 0 0-16 0-32 64 0zM32 512l0-32 48-48 288 0 48 48 0 32L32 512z" />
    </Icon>
);

export default ChessKing;