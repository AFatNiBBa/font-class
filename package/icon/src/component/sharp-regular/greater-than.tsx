
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=sharp-regular greater-than}
 * @preview ![greater-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/greater-than.svg)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 64.9L370 234.2l14 6.4 0 30.8-14 6.4L0 447.2l0-52.8L302.3 256 0 117.6 0 64.9z" />
    </Icon>
);

export default GreaterThan;