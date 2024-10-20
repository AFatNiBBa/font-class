
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-from-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-line?s=duotone arrow-up-from-line}
 * @preview ![arrow-up-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-from-line.svg)
 */
const ArrowUpFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 448c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z" />
        <path d="M169.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 141.3l0 66.7 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112 0-66.7L86.6 214.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128z" />
    </Icon>
);

export default ArrowUpFromLine;