
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-left?s=sharp-duotone-solid up-left}
 * @preview ![up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-left.svg)
 */
const UpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M152 296l80-80L384 368l-80 80L152 296z" />
        <path d="M16 80V368l32 32L336 112 304 80H16z" />
    </Icon>
);

export default UpLeft;