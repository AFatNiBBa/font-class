
import { Icon } from "../../index";

/**
 * A component that renders the `sensor` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor?s=sharp-light sensor}
 * @preview ![sensor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sensor.svg)
 */
const Sensor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM128 144l0 128 0 16-32 0 0-16 0-128 0-16 32 0 0 16zm64 0l0 128 0 16-32 0 0-16 0-128 0-16 32 0 0 16z" />
    </Icon>
);

export default Sensor;