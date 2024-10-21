
import { Icon, generic } from "../../index";

/**
 * A component that renders the `traffic-light` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light?s=sharp-duotone-solid traffic-light}
 * @preview ![traffic-light](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/traffic-light.svg)
 */
const TrafficLight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M112 112a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M320 0L0 0 0 352c0 88.4 71.6 160 160 160s160-71.6 160-160L320 0zM160 416a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm48-176a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-80a48 48 0 1 1 0-96 48 48 0 1 1 0 96z" />
    </Icon>
);

export default TrafficLight;