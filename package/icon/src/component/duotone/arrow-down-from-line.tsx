
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-from-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-line?s=duotone arrow-down-from-line}
 * @preview ![arrow-down-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-from-line.svg)
 */
const ArrowDownFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 46.3 14.3 32 32 32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64z" />
        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.7l0-66.7 0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112 0 66.7L86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
    </Icon>
);

export default ArrowDownFromLine;