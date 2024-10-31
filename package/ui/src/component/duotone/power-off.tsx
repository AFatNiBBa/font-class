
import { Icon, generic } from "../../index";

/**
 * A component that renders the `power-off` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/power-off?s=duotone power-off}
 * @preview ![power-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/power-off.svg)
 */
const PowerOff: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M147.7 75.5c11.3 13.6 9.4 33.8-4.1 45.1C104.7 152.9 80 201.6 80 256c0 97.2 78.8 176 176 176s176-78.8 176-176c0-54.4-24.7-103.1-63.5-135.4c-13.6-11.3-15.4-31.5-4.1-45.1s31.5-15.4 45.1-4.1C462.2 115.4 496 181.8 496 256c0 132.5-107.5 240-240 240S16 388.5 16 256c0-74.2 33.7-140.6 86.6-184.6c13.6-11.3 33.8-9.4 45.1 4.1z" />
    </Icon>
);

export default PowerOff;