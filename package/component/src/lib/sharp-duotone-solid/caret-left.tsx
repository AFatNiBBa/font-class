
import { Icon, generic } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=sharp-duotone-solid caret-left}
 * @preview ![caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/caret-left.svg)
 */
const CaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 256L144 416l48 0 0-320-48 0L0 256z" />
    </Icon>
);

export default CaretLeft;