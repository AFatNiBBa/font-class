
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sensor-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-on?s=sharp-duotone-solid sensor-on}
 * @preview ![sensor-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sensor-on.svg)
 */
const SensorOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 96c16 0 32 0 48 0l0 24 0 144 0 24c-16 0-32 0-48 0l0-24 0-144 0-24zm80 0c16 0 32 0 48 0l0 24 0 144 0 24c-16 0-32 0-48 0l0-24 0-144 0-24zm80 0c16 0 32 0 48 0l0 24 0 144 0 24c-16 0-32 0-48 0l0-24 0-144 0-24z" />
        <path d="M597.3 108l20-13.3L590.7 54.7 570.7 68l-48 32-20 13.3 26.6 39.9 20-13.3 48-32zM536 232l-24 0 0 48 24 0 80 0 24 0 0-48-24 0-80 0zm13.3 140l-20-13.3-26.6 39.9 20 13.3 48 32 20 13.3 26.6-39.9-20-13.3-48-32zM112 120l0-24L64 96l0 24 0 144 0 24 48 0 0-24 0-144zm80 0l0-24-48 0 0 24 0 144 0 24 48 0 0-24 0-144zm80 0l0-24-48 0 0 24 0 144 0 24 48 0 0-24 0-144z" />
    </Icon>
);

export default SensorOn;