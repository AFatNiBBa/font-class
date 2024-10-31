
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-right?s=sharp-duotone-solid circle-right}
 * @preview ![circle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-right.svg)
 */
const CircleRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM128 208l0 96 128 0 0 80 32 0L416 256 288 128l-32 0 0 80-128 0z" />
        <path d="M256 304l0 80 32 0L416 256 288 128l-32 0 0 80-128 0 0 96 128 0z" />
    </Icon>
);

export default CircleRight;