
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-bishop-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop-piece?s=sharp-duotone-solid chess-bishop-piece}
 * @preview ![chess-bishop-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-bishop-piece.svg)
 */
const ChessBishopPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 480l0 32 256 0 0-32-48-64L48 416 0 480z" />
        <path d="M176 32L80 32l0 48 20.7 0C79.4 100.3 48 139.2 48 192c0 26.3 13.6 40.5 26.3 48L72 240l-24 0 0 48 24 0 4.4 0L48 416l160 0L179.6 288l4.4 0 24 0 0-48-24 0-2.3 0c12.7-7.5 26.3-21.7 26.3-48c0-25.9-7.5-48.4-17.7-67l-48.6 48.6-5.7 5.7L124.7 168l5.7-5.7L181.7 111c-8.7-12.8-18.3-23.3-26.4-31L176 80l0-48z" />
    </Icon>
);

export default ChessBishopPiece;