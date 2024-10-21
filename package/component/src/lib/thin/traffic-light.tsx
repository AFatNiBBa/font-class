
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light?s=thin traffic-light}
 * @preview ![traffic-light](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/traffic-light.svg)
 */
const TrafficLight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 288c0 79.5 64.5 144 144 144s144-64.5 144-144l0-288c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L256 0c35.3 0 64 28.7 64 64l0 288c0 88.4-71.6 160-160 160S0 440.4 0 352L0 64zM120 392a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm96 0a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zM160 216a40 40 0 1 0 0 80 40 40 0 1 0 0-80zm0 96a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM120 120a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm96 0a56 56 0 1 1 -112 0 56 56 0 1 1 112 0z" />
    </Icon>
);

export default TrafficLight;