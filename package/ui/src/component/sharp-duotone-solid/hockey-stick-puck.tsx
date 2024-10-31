
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hockey-stick-puck` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-stick-puck?s=sharp-duotone-solid hockey-stick-puck}
 * @preview ![hockey-stick-puck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hockey-stick-puck.svg)
 */
const HockeyStickPuck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352l64 0 0 160L0 512 0 352zm96 0c52.1 0 104.2 0 156.2 0L419.4 17.7l57.2 28.6-224 448L243.8 512 224 512l-64 0-32 0c-10.7 0-21.3 0-32 0l0-32 0-128z" />
        <path d="M96 352l-32 0 0 160 32 0 0-160zm544 64l-256 0 0 96 256 0 0-96z" />
    </Icon>
);

export default HockeyStickPuck;