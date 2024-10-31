
import { Icon } from "../../index";

/**
 * A component that renders the `square-h` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-h?s=sharp-regular square-h}
 * @preview ![square-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-h.svg)
 */
const SquareH: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM336 152l0 104 0 104 0 24-48 0 0-24 0-80-128 0 0 80 0 24-48 0 0-24 0-80 0-48 0-80 0-24 48 0 0 24 0 80 128 0 0-80 0-24 48 0 0 24z" />
    </Icon>
);

export default SquareH;