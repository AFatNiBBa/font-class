
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-cloud` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-cloud?s=sharp-solid sensor-cloud}
 * @preview ![sensor-cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sensor-cloud.svg)
 */
const SensorCloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 32L0 32 0 480l224 0 0-48c0-44.7 26.2-83.3 64.1-101.3C290.9 271.3 339.9 224 400 224c17.2 0 33.5 3.9 48 10.8L448 32zM112 120l0 144 0 24-48 0 0-24 0-144 0-24 48 0 0 24zm96 0l0 144 0 24-48 0 0-24 0-144 0-24 48 0 0 24zm48 312l0 80 80 0 16 0 192 0 16 0 80 0 0-80c0-38.7-27.5-71-64-78.4l0-9.6c0-30.9-25.1-56-56-56c-18.1 0-34.1 8.6-44.4 21.8C464.8 278.5 435 256 400 256c-44.2 0-80 35.8-80 80l0 17.6c-36.5 7.4-64 39.7-64 78.4z" />
    </Icon>
);

export default SensorCloud;