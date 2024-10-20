
import { Icon, generic } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=duotone franc-sign}
 * @preview ![franc-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/franc-sign.svg)
 */
const FrancSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 352c0 17.7 14.3 32 32 32l16 0 0-64-16 0c-17.7 0-32 14.3-32 32zm112-32l0 64 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0z" />
        <path d="M80 32C62.3 32 48 46.3 48 64l0 160 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-96 176 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
    </Icon>
);

export default FrancSign;