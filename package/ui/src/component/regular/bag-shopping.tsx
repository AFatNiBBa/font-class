
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping?s=regular bag-shopping}
 * @preview ![bag-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bag-shopping.svg)
 */
const BagShopping: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 112l0 48 128 0 0-48c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-48 96l-64 0 0 208c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-208-64 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56-128 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56zm0-48l0-48C112 50.1 162.1 0 224 0s112 50.1 112 112l0 48 64 0c26.5 0 48 21.5 48 48l0 208c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 208c0-26.5 21.5-48 48-48l64 0z" />
    </Icon>
);

export default BagShopping;