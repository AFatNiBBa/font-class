
import { Icon, generic } from "../../index";

/**
 * A component that renders the `florin-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/florin-sign?s=duotone florin-sign}
 * @preview ![florin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/florin-sign.svg)
 */
const FlorinSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 256c0 17.7 14.3 32 32 32l80 0c8.9-21.3 17.8-42.7 26.7-64L64 224c-17.7 0-32 14.3-32 32zm181.3 32L320 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0-26.7 64z" />
        <path d="M226.1 91.1C241 55.3 275.9 32 314.7 32L352 32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-37.3 0c-12.9 0-24.6 7.8-29.5 19.7L157.9 420.9C143 456.7 108.1 480 69.3 480L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l37.3 0c12.9 0 24.6-7.8 29.5-19.7L226.1 91.1z" />
    </Icon>
);

export default FlorinSign;