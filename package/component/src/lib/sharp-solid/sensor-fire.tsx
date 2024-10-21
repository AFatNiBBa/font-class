
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-fire` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-fire?s=sharp-solid sensor-fire}
 * @preview ![sensor-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sensor-fire.svg)
 */
const SensorFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 32L0 32 0 480l336.8 0C306.5 446.1 288 401.3 288 352.2c0-56.8 36.1-108.8 71.8-150.1c26.7-30.8 56.6-57.5 88.2-83.1l0-87zM112 120l0 144 0 24-48 0 0-24 0-144 0-24 48 0 0 24zm96 0l0 144 0 24-48 0 0-24 0-144 0-24 48 0 0 24zm240 40c-42.7 26.7-128 102.4-128 192c0 88.4 71.6 160 160 160s160-71.6 160-160c0-26.7-19.2-96-96-160l-32 32-64-64zm96 240.2c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-48 64-96 64-96s64 48 64 96z" />
    </Icon>
);

export default SensorFire;