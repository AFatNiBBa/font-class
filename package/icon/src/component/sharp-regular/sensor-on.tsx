
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-on` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-on?s=sharp-regular sensor-on}
 * @preview ![sensor-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sensor-on.svg)
 */
const SensorOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 80l0 352L48 432 48 80l352 0zM48 32L0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32zm96 96l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zm96 0l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zm357.3-20l20-13.3L590.7 54.7 570.7 68l-48 32-20 13.3 26.6 39.9 20-13.3 48-32zM536 232l-24 0 0 48 24 0 80 0 24 0 0-48-24 0-80 0zm13.3 140l-20-13.3-26.6 39.9 20 13.3 48 32 20 13.3 26.6-39.9-20-13.3-48-32z" />
    </Icon>
);

export default SensorOn;