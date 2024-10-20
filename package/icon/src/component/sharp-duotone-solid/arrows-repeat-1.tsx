
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-repeat-1` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-repeat-1?s=sharp-duotone-solid arrows-repeat-1}
 * @preview ![arrows-repeat-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-repeat-1.svg)
 */
const ArrowsRepeat_1: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 32 0 96 0 32 64 0 0-32 0-64 352 0 32 0 0-45.3-9.4-9.4-80-80L336 2.7 290.7 48l22.6 22.6L338.7 96 32 96 0 96zM64 352l0 45.3 9.4 9.4 80 80L176 509.3 221.3 464l-22.6-22.6L173.3 416 480 416l32 0 0-32 0-96 0-32-64 0 0 32 0 64L96 352l-32 0z" />
        <path d="M216 192l24 0 24 0 24 0 0 24 0 80 0 24-48 0 0-24 0-56-24 0 0-48z" />
    </Icon>
);

export default ArrowsRepeat_1;