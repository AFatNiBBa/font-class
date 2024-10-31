
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-dot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dot?s=sharp-duotone-solid circle-dot}
 * @preview ![circle-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-dot.svg)
 */
const CircleDot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm352 0a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
        <path d="M256 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" />
    </Icon>
);

export default CircleDot;