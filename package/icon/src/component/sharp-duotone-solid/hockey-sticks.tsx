
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hockey-sticks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-sticks?s=sharp-duotone-solid hockey-sticks}
 * @preview ![hockey-sticks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hockey-sticks.svg)
 */
const HockeySticks: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352l64 0 0 160L0 512 0 352zm96 0c52.1 0 104.1 0 156.2 0L419.4 17.7l57.2 28.6-224 448L243.8 512 224 512l-64 0-32 0c-10.7 0-21.3 0-32 0l0-32 0-128zm448 0l32 0 0 160-32 0 0-32 0-128z" />
        <path d="M337.9 395.3l49.5 99 8.8 17.7 19.8 0 64 0s0 0 0 0l64 0 0-32 0-128-156.2 0-14.1-28.2-35.8 71.6zM302.1 180.7l-81.5-163L163.4 46.3l103 205.9 35.8-71.6zM576 352l0 160 64 0 0-160-64 0zM96 352l-32 0 0 160 32 0 0-160z" />
    </Icon>
);

export default HockeySticks;