
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=sharp-thin greater-than}
 * @preview ![greater-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/greater-than.svg)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 67.1L371.6 248.8l4.4 2.2 0 9.9-4.4 2.2L8 444.9l0-17.9L350.1 256 8 84.9 8 67.1z" />
    </Icon>
);

export default GreaterThan;