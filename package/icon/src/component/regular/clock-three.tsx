
import { Icon } from "../../index";

/**
 * A component that renders the `clock-three` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three?s=regular clock-three}
 * @preview ![clock-three](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-three.svg)
 */
const ClockThree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 13.3 10.7 24 24 24l104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0 0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </Icon>
);

export default ClockThree;