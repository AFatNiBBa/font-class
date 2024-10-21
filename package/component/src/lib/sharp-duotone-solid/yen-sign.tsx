
import { Icon, generic } from "../../index";

/**
 * A component that renders the `yen-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yen-sign?s=sharp-duotone-solid yen-sign}
 * @preview ![yen-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/yen-sign.svg)
 */
const YenSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M16 224l32 0 58 0c7.3 13.4 14.7 26.8 22 40.2l0 23.8-80 0-32 0 0-64zm0 96l32 0 80 0 0 64-80 0-32 0 0-64zm176-55.8L214 224l58 0 32 0 0 64-32 0-80 0 0-23.8zm0 55.8l80 0 32 0 0 64-32 0-80 0 0-64z" />
        <path d="M.7 32L128 264.2 128 448l0 32 64 0 0-32 0-183.8L319.3 32l-73 0L160 189.4 73.7 32 .7 32z" />
    </Icon>
);

export default YenSign;