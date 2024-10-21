
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=sharp-solid greater-than}
 * @preview ![greater-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/greater-than.svg)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 64.5l5 2.2 360 160 19 8.4 0 41.6-19 8.4L5 445.2l-5 2.2 0-70L273.2 256 0 134.6l0-70z" />
    </Icon>
);

export default GreaterThan;