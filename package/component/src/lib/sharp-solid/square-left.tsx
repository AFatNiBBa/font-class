
import { Icon } from "../../index";

/**
 * A component that renders the `square-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-left?s=sharp-solid square-left}
 * @preview ![square-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-left.svg)
 */
const SquareLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32L0 480l448 0 0-448L0 32zm224 96l0 80 128 0 0 96-128 0 0 80-16 0L80 256 208 128l16 0z" />
    </Icon>
);

export default SquareLeft;