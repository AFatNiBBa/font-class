
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light-stop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light-stop?s=sharp-solid traffic-light-stop}
 * @preview ![traffic-light-stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/traffic-light-stop.svg)
 */
const TrafficLightStop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M320 0L0 0 0 352c0 88.4 71.6 160 160 160s160-71.6 160-160L320 0zM136 368a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm72 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM160 216a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 72a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm0-128a48 48 0 1 1 0-96 48 48 0 1 1 0 96z" />
    </Icon>
);

export default TrafficLightStop;