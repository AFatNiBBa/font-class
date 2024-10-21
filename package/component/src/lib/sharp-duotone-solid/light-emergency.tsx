
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-emergency` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency?s=sharp-duotone-solid light-emergency}
 * @preview ![light-emergency](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/light-emergency.svg)
 */
const LightEmergency: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 192l0 160 320 0 0-160c0-88.4-71.6-160-160-160S64 103.6 64 192zm48 0c0-61.9 50.1-112 112-112l0 32c-44.2 0-80 35.8-80 80l-32 0z" />
        <path d="M448 352L0 352 0 480l448 0 0-128z" />
    </Icon>
);

export default LightEmergency;