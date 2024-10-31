
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sensor-triangle-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-triangle-exclamation?s=sharp-duotone-solid sensor-triangle-exclamation}
 * @preview ![sensor-triangle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sensor-triangle-exclamation.svg)
 */
const SensorTriangleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 61.2L237 480 0 480 0 32zM64 96l0 24 0 144 0 24 48 0 0-24 0-144 0-24L64 96zm96 0l0 24 0 144 0 24 48 0 0-24 0-144 0-24-48 0z" />
        <path d="M256 512L448 160 640 512l-384 0zM464 288l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16zM432 448l32 0 0-32-32 0 0 32z" />
    </Icon>
);

export default SensorTriangleExclamation;