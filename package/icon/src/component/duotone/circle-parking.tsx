
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-parking` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-parking?s=duotone circle-parking}
 * @preview ![circle-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-parking.svg)
 */
const CircleParking: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm448 0A192 192 0 1 1 64 256a192 192 0 1 1 384 0z" />
        <path d="M240 192l0 64 48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0zm144 32c0 53-43 96-96 96l-48 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64 0-120c0-22.1 17.9-40 40-40l72 0c53 0 96 43 96 96z" />
    </Icon>
);

export default CircleParking;