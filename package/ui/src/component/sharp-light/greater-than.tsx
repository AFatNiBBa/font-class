
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=sharp-light greater-than}
 * @preview ![greater-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/greater-than.svg)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 64.3L374.8 241.5l9.2 4.3 0 20.3-9.2 4.3L0 447.7l0-35.4L330.6 256 0 99.7 0 64.3z" />
    </Icon>
);

export default GreaterThan;