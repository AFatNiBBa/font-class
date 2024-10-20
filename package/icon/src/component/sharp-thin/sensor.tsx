
import { Icon } from "../../index";

/**
 * A component that renders the `sensor` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor?s=sharp-thin sensor}
 * @preview ![sensor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sensor.svg)
 */
const Sensor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm96 72l0 176 0 8-16 0 0-8 0-176 0-8 16 0 0 8zm64 0l0 176 0 8-16 0 0-8 0-176 0-8 16 0 0 8z" />
    </Icon>
);

export default Sensor;