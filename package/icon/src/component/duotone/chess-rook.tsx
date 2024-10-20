
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-rook` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook?s=duotone chess-rook}
 * @preview ![chess-rook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chess-rook.svg)
 */
const ChessRook: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 489.4C32 501.9 42.1 512 54.6 512l338.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L368 432 80 432 38.6 473.4c-4.2 4.2-6.6 10-6.6 16z" />
        <path d="M32 48l0 144c0 10.1 4.7 19.6 12.8 25.6L96 256 80 432l288 0L352 256l51.2-38.4c8.1-6 12.8-15.5 12.8-25.6l0-144c0-8.8-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16l0 40c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-40c0-8.8-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16l0 40c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-40c0-8.8-7.2-16-16-16L48 32c-8.8 0-16 7.2-16 16zM192 304l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default ChessRook;