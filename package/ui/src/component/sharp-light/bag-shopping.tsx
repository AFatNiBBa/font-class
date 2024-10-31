
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping?s=sharp-light bag-shopping}
 * @preview ![bag-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bag-shopping.svg)
 */
const BagShopping: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 96l0 32 128 0 0-32c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-32 64l-96 0 0 320 384 0 0-320-96 0 0 80 0 16-32 0 0-16 0-80-128 0 0 80 0 16-32 0 0-16 0-80zm0-32l0-32c0-53 43-96 96-96s96 43 96 96l0 32 96 0 32 0 0 32 0 320 0 32-32 0L32 512 0 512l0-32L0 160l0-32 32 0 96 0z" />
    </Icon>
);

export default BagShopping;