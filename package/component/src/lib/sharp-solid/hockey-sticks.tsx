
import { Icon } from "../../index";

/**
 * A component that renders the `hockey-sticks` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-sticks?s=sharp-solid hockey-sticks}
 * @preview ![hockey-sticks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hockey-sticks.svg)
 */
const HockeySticks: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M337.1 393.7l50.3 100.6 8.8 17.7 19.8 0 64 0s0 0 0 0l64 0 0-32 0-128-156.2 0-14.9-29.9-35.8 71.6zM267.2 253.9l35.8-71.6L220.6 17.7 163.4 46.3 267.2 253.9zM576 352l0 160 64 0 0-160-64 0zM96 352l0 128 0 32 32 0 32 0 64 0 19.8 0 8.8-17.7 224-448L419.4 17.7 252.2 352 96 352zM0 352L0 512l64 0 0-160L0 352z" />
    </Icon>
);

export default HockeySticks;