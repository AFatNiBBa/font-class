
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-down-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-down-to-line?s=duotone arrows-down-to-line}
 * @preview ![arrows-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-down-to-line.svg)
 */
const ArrowsDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 448c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32z" />
        <path d="M521.4 233.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L416 274.7 416 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 210.7 41.4-41.4zm-320 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L96 274.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 210.7 41.4-41.4z" />
    </Icon>
);

export default ArrowsDownToLine;