
import { Icon, generic } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=sharp-duotone-solid franc-sign}
 * @preview ![franc-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/franc-sign.svg)
 */
const FrancSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 64 48 0 0-64L0 320zm112 0l0 64 112 0 0-64-112 0z" />
        <path d="M80 32L48 32l0 32 0 128 0 64 0 192 0 32 64 0 0-32 0-192 176 0 0-64-176 0 0-96 176 0 32 0 0-64-32 0L80 32z" />
    </Icon>
);

export default FrancSign;