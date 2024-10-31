
import { Icon } from "../../index";

/**
 * A component that renders the `square-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=sharp-solid square-down}
 * @preview ![square-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-down.svg)
 */
const SquareDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 480l448 0 0-448L0 32 0 480zM96 256l80 0 0-128 96 0 0 128 80 0 0 16L224 400 96 272l0-16z" />
    </Icon>
);

export default SquareDown;