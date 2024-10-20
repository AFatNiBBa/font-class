
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light-stop` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light-stop?s=thin traffic-light-stop}
 * @preview ![traffic-light-stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/traffic-light-stop.svg)
 */
const TrafficLightStop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M256 16c26.5 0 48 21.5 48 48l0 288c0 79.5-64.5 144-144 144S16 431.5 16 352L16 64c0-26.5 21.5-48 48-48l192 0zM64 0C28.7 0 0 28.7 0 64L0 352c0 88.4 71.6 160 160 160s160-71.6 160-160l0-288c0-35.3-28.7-64-64-64L64 0zm96 432a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm0-96a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm40-80a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zm-96 0a56 56 0 1 0 112 0 56 56 0 1 0 -112 0zm56-96a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm0-96a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0 40a16 16 0 1 0 0 32 16 16 0 1 0 0-32z" />
    </Icon>
);

export default TrafficLightStop;