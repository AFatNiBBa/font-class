
import { Icon } from "../../index";

/**
 * A component that renders the `square-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-check?s=sharp-solid square-check}
 * @preview ![square-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-check.svg)
 */
const SquareCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM337 209L209 337l-17 17-17-17-64-64-17-17L128 222.1l17 17 47 47L303 175l17-17L353.9 192l-17 17z" />
    </Icon>
);

export default SquareCheck;