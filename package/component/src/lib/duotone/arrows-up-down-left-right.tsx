
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-up-down-left-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down-left-right?s=duotone arrows-up-down-left-right}
 * @preview ![arrows-up-down-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-up-down-left-right.svg)
 */
const ArrowsUpDownLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M169.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4L224 224l32 0 32 0 0-114.7 9.4 9.4c12.5 12.5 32.8 12.5 45.3 0c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-64-64C272.4 3.1 264.2 0 256 0s-16.4 3.1-22.6 9.4l-64 64zm0 320c-12.5 12.5-12.5 32.8 0 45.3l64 64c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l64-64c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6c-12.5-12.5-32.8-12.5-45.3 0l-9.4 9.4L288 288l-32 0-32 0 0 114.7-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0z" />
        <path d="M118.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-9.4 9.4L256 224l146.7 0-9.4-9.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l64 64c12.5 12.5 12.5 32.8 0 45.3l-64 64c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l9.4-9.4L256 288l-146.7 0 9.4 9.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-64-64c-12.5-12.5-12.5-32.8 0-45.3l64-64c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default ArrowsUpDownLeftRight;