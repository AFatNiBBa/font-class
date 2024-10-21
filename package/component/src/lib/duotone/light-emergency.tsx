
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-emergency` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency?s=duotone light-emergency}
 * @preview ![light-emergency](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/light-emergency.svg)
 */
const LightEmergency: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 192l0 160 320 0 0-160c0-88.4-71.6-160-160-160S64 103.6 64 192zm48 0c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
        <path d="M32 352c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L32 352z" />
    </Icon>
);

export default LightEmergency;