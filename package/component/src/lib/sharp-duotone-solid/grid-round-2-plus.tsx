
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid-round-2-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-round-2-plus?s=sharp-duotone-solid grid-round-2-plus}
 * @preview ![grid-round-2-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grid-round-2-plus.svg)
 */
const GridRound_2Plus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 128A96 96 0 1 1 32 128a96 96 0 1 1 192 0zm0 256A96 96 0 1 1 32 384a96 96 0 1 1 192 0zM480 128a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
        <path d="M408 296c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64z" />
    </Icon>
);

export default GridRound_2Plus;