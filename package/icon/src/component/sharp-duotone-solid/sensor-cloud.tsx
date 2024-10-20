
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sensor-cloud` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-cloud?s=sharp-duotone-solid sensor-cloud}
 * @preview ![sensor-cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sensor-cloud.svg)
 */
const SensorCloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 202.8c-14.5-6.9-30.8-10.8-48-10.8c-60.1 0-109.1 47.3-111.9 106.7C250.2 348.7 224 387.3 224 432l0 48L0 480 0 32zM64 96l0 24 0 144 0 24 48 0 0-24 0-144 0-24L64 96zm96 0l0 24 0 144 0 24 48 0 0-24 0-144 0-24-48 0z" />
        <path d="M320 353.6c-36.5 7.4-64 39.7-64 78.4l0 80 80 0 16 0 192 0 16 0 80 0 0-80c0-38.7-27.5-71-64-78.4l0-9.6c0-30.9-25.1-56-56-56c-18.1 0-34.1 8.6-44.4 21.8C464.8 278.5 435 256 400 256c-44.2 0-80 35.8-80 80l0 17.6z" />
    </Icon>
);

export default SensorCloud;