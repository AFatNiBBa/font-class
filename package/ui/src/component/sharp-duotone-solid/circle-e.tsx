
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-e` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-e?s=sharp-duotone-solid circle-e}
 * @preview ![circle-e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-e.svg)
 */
const CircleE: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 144 0 24 0 0 48-24 0-120 0 0 56 88 0 24 0 0 48-24 0-88 0 0 56 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-104 0-104 0-24z" />
        <path d="M160 128l24 0 144 0 24 0 0 48-24 0-120 0 0 56 88 0 24 0 0 48-24 0-88 0 0 56 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-104 0-104 0-24z" />
    </Icon>
);

export default CircleE;