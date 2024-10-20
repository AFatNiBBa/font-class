
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up?s=sharp-solid square-arrow-up}
 * @preview ![square-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-arrow-up.svg)
 */
const SquareArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM241 103L353 215l17 17L336 265.9l-17-17-71-71L248 392l0 24-48 0 0-24 0-214.1-71 71-17 17L78.1 232l17-17L207 103l17-17 17 17z" />
    </Icon>
);

export default SquareArrowUp;