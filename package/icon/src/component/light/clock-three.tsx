
import { Icon } from "../../index";

/**
 * A component that renders the `clock-three` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three?s=light clock-three}
 * @preview ![clock-three](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clock-three.svg)
 */
const ClockThree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112l0 144c0 8.8 7.2 16 16 16l112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0 0-128c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
    </Icon>
);

export default ClockThree;