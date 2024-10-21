
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-bishop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop?s=sharp-duotone-solid chess-bishop}
 * @preview ![chess-bishop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-bishop.svg)
 */
const ChessBishop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 480l48-48 16 0 192 0 16 0 48 48 0 32L0 512l0-32z" />
        <path d="M96 0l32 0 64 0 32 0 0 64-27 0c22.3 21.4 50.8 52.7 73.8 90.6L164.7 260.7 153.4 272 176 294.6l11.3-11.3 99.4-99.4C301.8 215.6 312 250.7 312 288c0 47.4-30.8 72.3-56 84.7l0 59.3L64 432l0-59.3C38.8 360.3 8 335.4 8 288C8 190.2 78.1 107.2 123 64L96 64 96 0z" />
    </Icon>
);

export default ChessBishop;