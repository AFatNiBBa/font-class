
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down?s=sharp-solid square-arrow-down}
 * @preview ![square-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-arrow-down.svg)
 */
const SquareArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480L0 480 0 32l448 0 0 448zM241 409L353 297l17-17L336 246.1l-17 17-71 71L248 120l0-24-48 0 0 24 0 214.1-71-71-17-17L78.1 280l17 17L207 409l17 17 17-17z" />
    </Icon>
);

export default SquareArrowDown;