
import { Icon, generic } from "../../index";

/**
 * A component that renders the `whiskey-glass-ice` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass-ice?s=sharp-duotone-solid whiskey-glass-ice}
 * @preview ![whiskey-glass-ice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/whiskey-glass-ice.svg)
 */
const WhiskeyGlassIce: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L9.1 96 64 480l384 0L502.9 96 512 32l-64.6 0L64.6 32 0 32zM73.8 96l364.4 0c-4.6 32-9.1 64-13.7 96l-32 224-273 0-32-224c-4.6-32-9.1-64-13.7-96z" />
        <path d="M87.5 192l32 224 273 0 32-224-337 0zM256 320l64-64 64 64-64 64-64-64zm0-96l0 50.7-22.6 22.6L210.7 320l16 16L144 336l0-112 112 0z" />
    </Icon>
);

export default WhiskeyGlassIce;