
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-three` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three?s=sharp-duotone-solid clock-three}
 * @preview ![clock-three](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-three.svg)
 */
const ClockThree: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 96l48 0 0 24 0 112 80 0 24 0 0 48-24 0-104 0-24 0 0-24 0-136 0-24z" />
        <path d="M232 96l0 24 0 136 0 24 24 0 104 0 24 0 0-48-24 0-80 0 0-112 0-24-48 0z" />
    </Icon>
);

export default ClockThree;