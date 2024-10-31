
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-cloud` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-cloud?s=regular sensor-cloud}
 * @preview ![sensor-cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sensor-cloud.svg)
 */
const SensorCloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 80l320 0c8.8 0 16 7.2 16 16l0 128c17.2 0 33.5 3.9 48 10.8L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l170.8 0c-6.9-14.5-10.8-30.8-10.8-48L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16zm80 72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zm96 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zm96 360l224 0c44.2 0 80-35.8 80-80c0-39-27.9-71.5-64.8-78.6c.5-3.1 .8-6.2 .8-9.4c0-30.9-25.1-56-56-56c-18.1 0-34.1 8.6-44.4 21.8C464.8 278.5 435 256 400 256c-44.2 0-80 35.8-80 80c0 5.9 .6 11.7 1.9 17.2C284.4 359.9 256 392.6 256 432c0 44.2 35.8 80 80 80z" />
    </Icon>
);

export default SensorCloud;