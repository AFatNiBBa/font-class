
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-knight` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight?s=sharp-duotone-solid chess-knight}
 * @preview ![chess-knight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-knight.svg)
 */
const ChessKnight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 480l48-48 320 0 48 48 0 32L16 512l0-32z" />
        <path d="M64 80L96 48 64 32 64 0 207.9 0C322.8 0 416 93.2 416 208.1c0 10.6-.8 21.2-2.4 31.6L384 432 64 432l0-80L224 248l0-40L112 280 64 240 64 80zm76 56a20 20 0 1 0 0-40 20 20 0 1 0 0 40z" />
    </Icon>
);

export default ChessKnight;