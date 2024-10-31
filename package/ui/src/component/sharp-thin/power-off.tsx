
import { Icon } from "../../index";

/**
 * A component that renders the `power-off` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/power-off?s=sharp-thin power-off}
 * @preview ![power-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/power-off.svg)
 */
const PowerOff: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8l0-8L248 0l0 8 0 240 0 8 16 0 0-8L264 8zM40 263.1c0-83.6 47.5-156.1 117-192l-7.3-14.2C75 95.5 24 173.3 24 263.1c0 128.1 103.9 232 232 232s232-103.9 232-232c0-89.8-51-167.7-125.6-206.2L355 71.1c69.5 35.9 117 108.4 117 192c0 119.3-96.7 216-216 216s-216-96.7-216-216z" />
    </Icon>
);

export default PowerOff;