
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-repeat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-repeat?s=sharp-duotone-solid arrows-repeat}
 * @preview ![arrows-repeat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-repeat.svg)
 */
const ArrowsRepeat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M50.7 384l22.6 22.6 80 80L176 509.3 221.3 464l-22.6-22.6L173.3 416 480 416l32 0 0-32 0-96 0-32-64 0 0 32 0 64-274.7 0 25.4-25.4L221.3 304 176 258.7l-22.6 22.6-80 80L50.7 384z" />
        <path d="M0 256l0-32 0-96L0 96l32 0 306.7 0L313.4 70.6 290.7 48 336 2.7l22.6 22.6 80 80L461.3 128l-22.6 22.6-80 80L336 253.3 290.7 208l22.6-22.6L338.7 160 64 160l0 64 0 32L0 256z" />
    </Icon>
);

export default ArrowsRepeat;