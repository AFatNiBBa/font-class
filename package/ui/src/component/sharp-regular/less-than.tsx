
import { Icon } from "../../index";

/**
 * A component that renders the `less-than` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=sharp-regular less-than}
 * @preview ![less-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/less-than.svg)
 */
const LessThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 64.9L14 234.2 0 240.6l0 30.8 14 6.4L384 447.2l0-52.8L81.7 256 384 117.6l0-52.8z" />
    </Icon>
);

export default LessThan;