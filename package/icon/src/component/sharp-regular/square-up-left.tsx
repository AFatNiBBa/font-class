
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-left?s=sharp-regular square-up-left}
 * @preview ![square-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-up-left.svg)
 */
const SquareUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM128 320l0-160 160 0 24 24-52 52 76 76-56 56-76-76-52 52-24-24z" />
    </Icon>
);

export default SquareUpLeft;