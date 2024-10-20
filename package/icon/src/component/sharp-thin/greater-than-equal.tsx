
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than-equal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=sharp-thin greater-than-equal}
 * @preview ![greater-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/greater-than-equal.svg)
 */
const GreaterThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M411.1 184.6L32 28l0 17.3L387 192 32 338.7 32 356 411.1 199.4l4.9-2 0-10.7-4.9-2zM440 464L8 464l-8 0 0 16 8 0 432 0 8 0 0-16-8 0z" />
    </Icon>
);

export default GreaterThanEqual;