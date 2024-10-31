
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=duotone shekel-sign}
 * @preview ![shekel-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shekel-sign.svg)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 192l0 256c0 17.7 14.3 32 32 32l160 0c70.7 0 128-57.3 128-128l0-288c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 288c0 35.3-28.7 64-64 64l-128 0 0-224c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M0 64C0 46.3 14.3 32 32 32l160 0c70.7 0 128 57.3 128 128l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-35.3-28.7-64-64-64L64 96l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64z" />
    </Icon>
);

export default ShekelSign;