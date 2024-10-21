
import { Icon } from "../../index";

/**
 * A component that renders the `square-down-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-left?s=sharp-solid square-down-left}
 * @preview ![square-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-down-left.svg)
 */
const SquareDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480L0 480 0 32l448 0 0 448zM128 192l0 160 160 0 16-16-52-52 84-84-56-56-84 84-52-52-16 16z" />
    </Icon>
);

export default SquareDownLeft;