
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-wide-short` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-wide-short?s=duotone arrow-down-wide-short}
 * @preview ![arrow-down-wide-short](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-wide-short.svg)
 */
const ArrowDownWideShort: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 64c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32z" />
        <path d="M128 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L160 365.7 160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 301.7L63.6 330.4c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96C110.5 476.2 119 480 128 480z" />
    </Icon>
);

export default ArrowDownWideShort;