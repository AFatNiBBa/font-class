
import { Icon } from "../../index";

/**
 * A component that renders the `power-off` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/power-off?s=sharp-light power-off}
 * @preview ![power-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/power-off.svg)
 */
const PowerOff: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16l0-16L240 0l0 16 0 256 0 16 32 0 0-16 0-256zM56 256c0-77.4 43.9-144.5 108.3-177.8L149.6 49.8C75 88.3 24 166.2 24 256c0 128.1 103.9 232 232 232s232-103.9 232-232c0-89.8-51-167.7-125.6-206.2L347.7 78.2C412.1 111.5 456 178.6 456 256c0 110.5-89.5 200-200 200S56 366.5 56 256z" />
    </Icon>
);

export default PowerOff;