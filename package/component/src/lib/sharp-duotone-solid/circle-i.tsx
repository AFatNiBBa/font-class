
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-i` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-i?s=sharp-duotone-solid circle-i}
 * @preview ![circle-i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-i.svg)
 */
const CircleI: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 72 0 72 0 24 0 0 48-24 0-48 0 0 160 48 0 24 0 0 48-24 0-48 0-48 0-48 0-24 0 0-48 24 0 48 0 0-160-48 0-24 0 0-48z" />
        <path d="M160 128l24 0 72 0 72 0 24 0 0 48-24 0-48 0 0 160 48 0 24 0 0 48-24 0-48 0-48 0-48 0-24 0 0-48 24 0 48 0 0-160-48 0-24 0 0-48z" />
    </Icon>
);

export default CircleI;