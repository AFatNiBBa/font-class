
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-up-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-to-line?s=duotone arrows-up-to-line}
 * @preview ![arrows-up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-up-to-line.svg)
 */
const ArrowsUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 46.3 14.3 32 32 32l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64z" />
        <path d="M54.6 278.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L160 237.3 160 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7L54.6 278.6zm320 0c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 237.3 480 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4z" />
    </Icon>
);

export default ArrowsUpToLine;