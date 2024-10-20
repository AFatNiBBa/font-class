
import { Icon, generic } from "../../index";

/**
 * A component that renders the `power-off` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/power-off?s=sharp-duotone-solid power-off}
 * @preview ![power-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/power-off.svg)
 */
const PowerOff: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 0l0 32 0 224 0 32 64 0 0-32 0-224 0-32L224 0z" />
        <path d="M143.5 120.6C104.7 152.9 80 201.6 80 256c0 97.2 78.8 176 176 176s176-78.8 176-176c0-54.4-24.7-103.1-63.5-135.4l40.9-49.2C462.2 115.4 496 181.8 496 256c0 132.5-107.5 240-240 240S16 388.5 16 256c0-74.2 33.7-140.6 86.6-184.6l40.9 49.2z" />
    </Icon>
);

export default PowerOff;