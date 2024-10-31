
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-parking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-parking?s=sharp-duotone-solid circle-parking}
 * @preview ![circle-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-parking.svg)
 */
const CircleParking: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm448 0A192 192 0 1 1 64 256a192 192 0 1 1 384 0z" />
        <path d="M176 128l32 0 80 0c53 0 96 43 96 96s-43 96-96 96l-48 0 0 32 0 32-64 0 0-32 0-64 0-128 0-32zm64 128l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0 64z" />
    </Icon>
);

export default CircleParking;