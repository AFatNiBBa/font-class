
import { Icon } from "../../index";

/**
 * A component that renders the `power-off` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/power-off?s=thin power-off}
 * @preview ![power-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/power-off.svg)
 */
const PowerOff: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 240c0 4.4 3.6 8 8 8s8-3.6 8-8L264 8zM157 71.1c3.9-2 5.5-6.9 3.4-10.8s-6.9-5.5-10.8-3.4C75 95.5 24 173.3 24 263.1c0 128.1 103.9 232 232 232s232-103.9 232-232c0-89.8-51-167.7-125.6-206.2c-3.9-2-8.8-.5-10.8 3.4s-.5 8.8 3.4 10.8c69.5 35.9 117 108.4 117 192c0 119.3-96.7 216-216 216s-216-96.7-216-216c0-83.6 47.5-156.1 117-192z" />
    </Icon>
);

export default PowerOff;