
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-o` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-o?s=duotone circle-o}
 * @preview ![circle-o](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-o.svg)
 */
const CircleO: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm384 0a128 128 0 1 1 -256 0 128 128 0 1 1 256 0zm-208 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M256 176a80 80 0 1 0 0 160 80 80 0 1 0 0-160zm128 80a128 128 0 1 1 -256 0 128 128 0 1 1 256 0z" />
    </Icon>
);

export default CircleO;