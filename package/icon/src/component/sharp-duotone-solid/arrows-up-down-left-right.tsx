
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-up-down-left-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down-left-right?s=sharp-duotone-solid arrows-up-down-left-right}
 * @preview ![arrows-up-down-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-up-down-left-right.svg)
 */
const ArrowsUpDownLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M154.7 104L200 149.3l22.6-22.6 1.4-1.4 0 98.7 32 0 32 0 0-98.7 1.4 1.4L312 149.3 357.3 104 334.6 81.4l-56-56L256 2.7 233.4 25.4l-56 56L154.7 104zm0 304l22.6 22.6 56 56L256 509.3l22.6-22.6 56-56L357.3 408 312 362.7l-22.6 22.6-1.4 1.4 0-98.7-32 0-32 0 0 98.7-1.4-1.4L200 362.7 154.7 408z" />
        <path d="M149.3 200l-22.6 22.6-1.4 1.4L256 224l130.7 0-1.4-1.4L362.7 200 408 154.7l22.6 22.6 56 56L509.3 256l-22.6 22.6-56 56L408 357.3 362.7 312l22.6-22.6 1.4-1.4L256 288l-130.7 0 1.4 1.4L149.3 312 104 357.3 81.4 334.6l-56-56L2.7 256l22.6-22.6 56-56L104 154.7 149.3 200z" />
    </Icon>
);

export default ArrowsUpDownLeftRight;