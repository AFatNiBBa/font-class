
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left?s=sharp-duotone-solid down-left}
 * @preview ![down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/down-left.svg)
 */
const DownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M152 216L304 64l80 80L232 296l-80-80z" />
        <path d="M16 432V144l32-32L336 400l-32 32H16z" />
    </Icon>
);

export default DownLeft;