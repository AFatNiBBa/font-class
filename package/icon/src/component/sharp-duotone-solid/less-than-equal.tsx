
import { Icon, generic } from "../../index";

/**
 * A component that renders the `less-than-equal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than-equal?s=sharp-duotone-solid less-than-equal}
 * @preview ![less-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/less-than-equal.svg)
 */
const LessThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 169.4l0 45.2 21.3 7.6 360 128 2.7 1 0-67.9L159.5 192 416 100.8l0-67.9-2.7 1-360 128L32 169.4z" />
        <path d="M0 416l32 0 384 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
    </Icon>
);

export default LessThanEqual;