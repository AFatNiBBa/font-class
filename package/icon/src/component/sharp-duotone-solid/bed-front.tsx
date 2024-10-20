
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-front` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-front?s=sharp-duotone-solid bed-front}
 * @preview ![bed-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bed-front.svg)
 */
const BedFront: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l32 0 48 0 160 0 32 0 160 0 48 0 32 0 0 32 0 64 0 32-32 0L32 352 0 352l0-32 0-64 0-32z" />
        <path d="M480 32L32 32l0 192 48 0 0-96 160 0 0 96 32 0 0-96 160 0 0 96 48 0 0-192zM32 352L0 352l0 32 0 64 0 32 64 0 0-32 0-32 384 0 0 32 0 32 64 0 0-32 0-64 0-32-32 0L32 352z" />
    </Icon>
);

export default BedFront;