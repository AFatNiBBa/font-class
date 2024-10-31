
import { Icon } from "../../index";

/**
 * A component that renders the `hockey-stick-puck` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-stick-puck?s=sharp-light hockey-stick-puck}
 * @preview ![hockey-stick-puck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hockey-stick-puck.svg)
 */
const HockeyStickPuck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320.9 320L481.8 8.7l28.4 14.7-248 480-4.5 8.7-9.7 0L16 512 0 512l0-16L0 336l0-16 16 0 304.9 0zm-16.5 32L128 352l0 128 110.3 0 66.1-128zM32 352l0 128 64 0 0-128-64 0zm384 80l0 48 192 0 0-48-192 0zm-32-32l32 0 192 0 32 0 0 32 0 48 0 32-32 0-192 0-32 0 0-32 0-48 0-32z" />
    </Icon>
);

export default HockeyStickPuck;