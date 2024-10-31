
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light-go` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light-go?s=light traffic-light-go}
 * @preview ![traffic-light-go](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/traffic-light-go.svg)
 */
const TrafficLightGo: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 288c0 70.7 57.3 128 128 128s128-57.3 128-128l0-288c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L256 0c35.3 0 64 28.7 64 64l0 288c0 88.4-71.6 160-160 160S0 440.4 0 352L0 64zM160 448a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-216a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 80a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM136 120a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm80 0a56 56 0 1 1 -112 0 56 56 0 1 1 112 0z" />
    </Icon>
);

export default TrafficLightGo;