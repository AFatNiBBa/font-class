
import { Icon } from "../../index";

/**
 * A component that renders the `power-off` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/power-off?s=light power-off}
 * @preview ![power-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/power-off.svg)
 */
const PowerOff: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16s16-7.2 16-16l0-256zM164.3 78.2c7.8-4.1 10.9-13.7 6.9-21.6s-13.7-10.9-21.6-6.9C75 88.3 24 166.2 24 256c0 128.1 103.9 232 232 232s232-103.9 232-232c0-89.8-51-167.7-125.6-206.2c-7.8-4.1-17.5-1-21.6 6.9s-1 17.5 6.9 21.6C412.1 111.5 456 178.6 456 256c0 110.5-89.5 200-200 200S56 366.5 56 256c0-77.4 43.9-144.5 108.3-177.8z" />
    </Icon>
);

export default PowerOff;