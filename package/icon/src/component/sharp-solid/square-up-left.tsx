
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-left?s=sharp-solid square-up-left}
 * @preview ![square-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-up-left.svg)
 */
const SquareUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM128 320l0-160 160 0 16 16-52 52 84 84-56 56-84-84-52 52-16-16z" />
    </Icon>
);

export default SquareUpLeft;