
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light?s=sharp-regular traffic-light}
 * @preview ![traffic-light](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/traffic-light.svg)
 */
const TrafficLight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 48l0 304c0 61.9 50.1 112 112 112s112-50.1 112-112l0-304L48 48zM0 0L48 0 272 0l48 0 0 48 0 304c0 88.4-71.6 160-160 160S0 440.4 0 352L0 48 0 0zM160 424a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm48-168a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-72a48 48 0 1 1 0-96 48 48 0 1 1 0 96z" />
    </Icon>
);

export default TrafficLight;