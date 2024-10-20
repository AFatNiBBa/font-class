
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-l` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-l?s=sharp-duotone-solid circle-l}
 * @preview ![circle-l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-l.svg)
 */
const CircleL: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l48 0 0 24 0 184 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-208 0-24z" />
        <path d="M208 128l0 24 0 184 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-208 0-24 48 0z" />
    </Icon>
);

export default CircleL;