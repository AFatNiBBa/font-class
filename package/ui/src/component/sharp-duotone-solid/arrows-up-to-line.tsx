
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-up-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-to-line?s=sharp-duotone-solid arrows-up-to-line}
 * @preview ![arrows-up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-up-to-line.svg)
 */
const ArrowsUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l32 0 512 0 32 0 0-64-32 0L32 32 0 32z" />
        <path d="M70.6 262.6L48 285.3 2.7 240l22.6-22.6 80-80L128 114.7l22.6 22.6 80 80L253.3 240 208 285.3l-22.6-22.6L160 237.3 160 448l0 32-64 0 0-32 0-210.7L70.6 262.6zm320 0L368 285.3 322.7 240l22.6-22.6 80-80L448 114.7l22.6 22.6 80 80L573.3 240 528 285.3l-22.6-22.6L480 237.3 480 448l0 32-64 0 0-32 0-210.7-25.4 25.4z" />
    </Icon>
);

export default ArrowsUpToLine;