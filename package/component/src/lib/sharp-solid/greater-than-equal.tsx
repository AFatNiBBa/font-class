
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than-equal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=sharp-solid greater-than-equal}
 * @preview ![greater-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/greater-than-equal.svg)
 */
const GreaterThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M34.7 33.8l-2.7-1 0 67.9L288.5 192 32 283.2l0 67.9 2.7-1 360-128 21.3-7.6 0-45.2-21.3-7.6-360-128zM416 416L32 416 0 416l0 64 32 0 384 0 32 0 0-64-32 0z" />
    </Icon>
);

export default GreaterThanEqual;