
import { Icon, generic } from "../../index";

/**
 * A component that renders the `greater-than-equal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=sharp-duotone-solid greater-than-equal}
 * @preview ![greater-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/greater-than-equal.svg)
 */
const GreaterThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 32.9l2.7 1 360 128 21.3 7.6 0 45.2-21.3 7.6-360 128-2.7 1 0-67.9L288.5 192 32 100.8l0-67.9z" />
        <path d="M448 416l-32 0L32 416 0 416l0 64 32 0 384 0 32 0 0-64z" />
    </Icon>
);

export default GreaterThanEqual;