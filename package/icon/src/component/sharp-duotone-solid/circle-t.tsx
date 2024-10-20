
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=sharp-duotone-solid circle-t}
 * @preview ![circle-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-t.svg)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 144l24 0 104 0 104 0 24 0 0 48-24 0-80 0 0 168 0 24-48 0 0-24 0-168-80 0-24 0 0-48z" />
        <path d="M128 144l24 0 104 0 104 0 24 0 0 48-24 0-80 0 0 168 0 24-48 0 0-24 0-168-80 0-24 0 0-48z" />
    </Icon>
);

export default CircleT;