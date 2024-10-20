
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-right?s=duotone align-right}
 * @preview ![align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/align-right.svg)
 */
const AlignRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 64c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 32c-17.7 0-32 14.3-32 32zm0 256c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0c-17.7 0-32 14.3-32 32z" />
        <path d="M32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480zm0-256c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224z" />
    </Icon>
);

export default AlignRight;