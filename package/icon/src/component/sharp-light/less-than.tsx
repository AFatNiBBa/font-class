
import { Icon } from "../../index";

/**
 * A component that renders the `less-than` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=sharp-light less-than}
 * @preview ![less-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/less-than.svg)
 */
const LessThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 64.3L9.2 241.5 0 245.9l0 20.3 9.2 4.3L384 447.7l0-35.4L53.4 256 384 99.7l0-35.4z" />
    </Icon>
);

export default LessThan;