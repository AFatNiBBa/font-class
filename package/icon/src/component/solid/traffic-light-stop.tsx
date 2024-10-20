
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light-stop` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light-stop?s=solid traffic-light-stop}
 * @preview ![traffic-light-stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/traffic-light-stop.svg)
 */
const TrafficLightStop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 88.4 71.6 160 160 160s160-71.6 160-160l0-288c0-35.3-28.7-64-64-64L64 0zm72 368a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm72 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM160 216a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 72a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm0-128a48 48 0 1 1 0-96 48 48 0 1 1 0 96z" />
    </Icon>
);

export default TrafficLightStop;