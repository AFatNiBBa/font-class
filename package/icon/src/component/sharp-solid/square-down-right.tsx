
import { Icon } from "../../index";

/**
 * A component that renders the `square-down-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-right?s=sharp-solid square-down-right}
 * @preview ![square-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-down-right.svg)
 */
const SquareDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 480l448 0 0-448L0 32 0 480zM320 192l0 160-160 0-16-16 52-52-84-84 56-56 84 84 52-52 16 16z" />
    </Icon>
);

export default SquareDownRight;