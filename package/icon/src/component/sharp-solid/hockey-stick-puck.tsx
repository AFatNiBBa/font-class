
import { Icon } from "../../index";

/**
 * A component that renders the `hockey-stick-puck` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-stick-puck?s=sharp-solid hockey-stick-puck}
 * @preview ![hockey-stick-puck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hockey-stick-puck.svg)
 */
const HockeyStickPuck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 352l0 128 0 32 32 0 32 0 64 0 19.8 0 8.8-17.7 224-448L419.4 17.7 252.2 352 96 352zM0 352L0 512l64 0 0-160L0 352zm640 64l-256 0 0 96 256 0 0-96z" />
    </Icon>
);

export default HockeyStickPuck;