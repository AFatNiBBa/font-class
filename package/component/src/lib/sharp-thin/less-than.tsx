
import { Icon } from "../../index";

/**
 * A component that renders the `less-than` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=sharp-thin less-than}
 * @preview ![less-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/less-than.svg)
 */
const LessThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M376 67.1L12.4 248.8 8 251.1l0 9.9 4.4 2.2L376 444.9l0-17.9L33.9 256 376 84.9l0-17.9z" />
    </Icon>
);

export default LessThan;