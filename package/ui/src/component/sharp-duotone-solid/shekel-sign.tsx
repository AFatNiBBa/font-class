
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=sharp-duotone-solid shekel-sign}
 * @preview ![shekel-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shekel-sign.svg)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 160l0 288 0 32 32 0 160 0c70.7 0 128-57.3 128-128l0-320-64 0 0 320c0 35.3-28.7 64-64 64l-128 0 0-256-64 0z" />
        <path d="M0 32l32 0 160 0c70.7 0 128 57.3 128 128l0 192-64 0 0-192c0-35.3-28.7-64-64-64L64 96l0 384L0 480 0 64 0 32z" />
    </Icon>
);

export default ShekelSign;