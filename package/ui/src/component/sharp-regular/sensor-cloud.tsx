
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-cloud` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-cloud?s=sharp-regular sensor-cloud}
 * @preview ![sensor-cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sensor-cloud.svg)
 */
const SensorCloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 80l352 0 0 144c17.2 0 33.5 3.9 48 10.8L448 80l0-48-48 0L48 32 0 32 0 80 0 432l0 48 48 0 176 0 0-48L48 432 48 80zm96 72l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm96 0l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm16 280l0 80 80 0 16 0 192 0 16 0 80 0 0-80c0-38.7-27.5-71-64-78.4l0-9.6c0-30.9-25.1-56-56-56c-18.1 0-34.1 8.6-44.4 21.8C464.8 278.5 435 256 400 256c-44.2 0-80 35.8-80 80l0 17.6c-36.5 7.4-64 39.7-64 78.4z" />
    </Icon>
);

export default SensorCloud;