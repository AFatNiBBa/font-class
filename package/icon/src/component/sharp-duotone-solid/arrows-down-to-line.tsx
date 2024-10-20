
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-down-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-down-to-line?s=sharp-duotone-solid arrows-down-to-line}
 * @preview ![arrows-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-down-to-line.svg)
 */
const ArrowsDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l32 0 512 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
        <path d="M70.6 249.4L48 226.7 2.7 272l22.6 22.6 80 80L128 397.3l22.6-22.6 80-80L253.3 272 208 226.7l-22.6 22.6L160 274.7 160 64l0-32L96 32l0 32 0 210.7L70.6 249.4zm320 0L368 226.7 322.7 272l22.6 22.6 80 80L448 397.3l22.6-22.6 80-80L573.3 272 528 226.7l-22.6 22.6L480 274.7 480 64l0-32-64 0 0 32 0 210.7-25.4-25.4z" />
    </Icon>
);

export default ArrowsDownToLine;