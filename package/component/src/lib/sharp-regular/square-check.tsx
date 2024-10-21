
import { Icon } from "../../index";

/**
 * A component that renders the `square-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-check?s=sharp-regular square-check}
 * @preview ![square-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-check.svg)
 */
const SquareCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM337 209L209 337l-17 17-17-17-64-64-17-17L128 222.1l17 17 47 47L303 175l17-17L353.9 192l-17 17z" />
    </Icon>
);

export default SquareCheck;