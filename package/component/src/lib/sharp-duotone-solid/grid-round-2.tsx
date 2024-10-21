
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid-round-2` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-round-2?s=sharp-duotone-solid grid-round-2}
 * @preview ![grid-round-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grid-round-2.svg)
 */
const GridRound_2: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 384a96 96 0 1 0 192 0A96 96 0 1 0 32 384zM288 128a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
        <path d="M128 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192zM384 288a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" />
    </Icon>
);

export default GridRound_2;