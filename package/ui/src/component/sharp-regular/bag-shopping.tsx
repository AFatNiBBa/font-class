
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping?s=sharp-regular bag-shopping}
 * @preview ![bag-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bag-shopping.svg)
 */
const BagShopping: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 112l0 48 128 0 0-48c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-48 96l-64 0 0 256 352 0 0-256-64 0 0 56 0 24-48 0 0-24 0-56-128 0 0 56 0 24-48 0 0-24 0-56zm0-48l0-48C112 50.1 162.1 0 224 0s112 50.1 112 112l0 48 64 0 48 0 0 48 0 256 0 48-48 0L48 512 0 512l0-48L0 208l0-48 48 0 64 0z" />
    </Icon>
);

export default BagShopping;