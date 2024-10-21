
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light?s=sharp-thin traffic-light}
 * @preview ![traffic-light](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/traffic-light.svg)
 */
const TrafficLight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 16l0 336c0 79.5 64.5 144 144 144s144-64.5 144-144l0-336L16 16zM0 0L16 0 304 0l16 0 0 16 0 336c0 88.4-71.6 160-160 160S0 440.4 0 352L0 16 0 0zM120 392a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm96 0a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zM160 216a40 40 0 1 0 0 80 40 40 0 1 0 0-80zm0 96a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM120 120a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm96 0a56 56 0 1 1 -112 0 56 56 0 1 1 112 0z" />
    </Icon>
);

export default TrafficLight;