
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-split-up-and-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-split-up-and-left?s=sharp-duotone-solid arrows-split-up-and-left}
 * @preview ![arrows-split-up-and-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-split-up-and-left.svg)
 */
const ArrowsSplitUpAndLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M194.7 128L240 173.3l22.6-22.6L288 125.3 288 256l32 0c10.7 0 21.3 0 32 0l0-130.7 25.4 25.4L400 173.3 445.3 128l-22.6-22.6-80-80L320 2.7 297.4 25.4l-80 80L194.7 128z" />
        <path d="M173.3 208l-22.6 22.6L125.3 256 320 256l32 0 0 32 0 160 128 0 32 0 0 64-32 0-160 0-32 0 0-32 0-160-162.7 0 25.4 25.4L173.3 368 128 413.3l-22.6-22.6-80-80L2.7 288l22.6-22.6 80-80L128 162.7 173.3 208z" />
    </Icon>
);

export default ArrowsSplitUpAndLeft;