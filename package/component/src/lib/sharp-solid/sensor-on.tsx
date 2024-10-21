
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-on` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-on?s=sharp-solid sensor-on}
 * @preview ![sensor-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sensor-on.svg)
 */
const SensorOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM112 96L64 96l0 24 0 144 0 24 48 0 0-24 0-144 0-24zm96 0l-48 0 0 24 0 144 0 24 48 0 0-24 0-144 0-24zm389.3 12l-48 32-20 13.3-26.6-39.9 20-13.3 48-32 20-13.3 26.6 39.9-20 13.3zM536 232l80 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0zm13.3 140l48 32 20 13.3-26.6 39.9-20-13.3-48-32-20-13.3 26.6-39.9 20 13.3z" />
    </Icon>
);

export default SensorOn;