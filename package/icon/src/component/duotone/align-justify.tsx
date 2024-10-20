
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-justify` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-justify?s=duotone align-justify}
 * @preview ![align-justify](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/align-justify.svg)
 */
const AlignJustify: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 81.7 14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64zM0 320c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288c-17.7 0-32 14.3-32 32z" />
        <path d="M32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480zm0-256c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224z" />
    </Icon>
);

export default AlignJustify;